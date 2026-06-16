#!/usr/bin/env node
import assert from "node:assert/strict";
import { spawn } from "node:child_process";

const baseUrl = process.env.SCAFFOLDE_SITE_URL ?? "http://127.0.0.1:3011";
const shouldStartServer = process.env.SCAFFOLDE_START_SERVER === "1";
let server;

async function waitForServer(timeoutMs = 30_000) {
  const start = Date.now();
  let lastError;
  while (Date.now() - start < timeoutMs) {
    try {
      const response = await fetch(baseUrl);
      if (response.ok) return;
    } catch (error) {
      lastError = error;
    }
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
  throw new Error(`Timed out waiting for ${baseUrl}: ${lastError?.message ?? "unknown error"}`);
}

function stopServer() {
  if (server && !server.killed) {
    server.kill();
  }
}

if (shouldStartServer) {
  const port = new URL(baseUrl).port || "3011";
  server = spawn("npm", ["run", "start", "--", "-p", port], {
    cwd: process.cwd(),
    stdio: ["ignore", "pipe", "pipe"],
  });
  server.stdout.on("data", (chunk) => process.stdout.write(chunk));
  server.stderr.on("data", (chunk) => process.stderr.write(chunk));
  process.on("exit", stopServer);
  process.on("SIGINT", () => {
    stopServer();
    process.exit(130);
  });
  await waitForServer();
}

try {
  const expectedTextRoutes = [
    ["/llms.txt", "text/plain"],
    ["/llms-full.txt", "text/plain"],
    ["/site.md", "text/markdown"],
    ["/manual.md", "text/markdown"],
    ["/proof.md", "text/markdown"],
    ["/stack.md", "text/markdown"],
    ["/robots.txt", "text/plain"],
    ["/sitemap.xml", "application/xml"],
  ];

  const requiredSelectors = [
    "nav-home",
    "nav-manual",
    "nav-stack",
    "nav-proof",
    "nav-agents",
    "nav-llms-txt",
    "nav-contact-workflow",
    "hero-read-manual",
    "hero-inspect-proof",
    "hero-agent-entrypoint",
    "agent-surface-llms-txt",
    "agent-surface-llms-full-txt",
    "agent-surface-agent-manifest",
    "agent-surface-homepage-markdown",
    "agent-surface-manual-markdown",
    "agent-surface-proof-markdown",
    "cta-contact-workflow",
    "cta-download-site-context",
  ];

  async function fetchOk(pathname) {
    const response = await fetch(new URL(pathname, baseUrl));
    assert.equal(response.status, 200, `${pathname} should return HTTP 200`);
    return response;
  }

  const home = await fetchOk("/");
  const homeHtml = await home.text();
  for (const testId of requiredSelectors) {
    assert.match(homeHtml, new RegExp(`data-testid=["']${testId}["']`), `homepage should expose data-testid=${testId}`);
  }
  assert.match(homeHtml, /AI infrastructure for agents that actually do work/, "homepage should include the primary positioning headline");
  assert.match(homeHtml, /Intent/, "mobile capability preview should include Intent");
  assert.match(homeHtml, /Agents/, "mobile capability preview should include Agents");
  assert.match(homeHtml, /Proof/, "mobile capability preview should include Proof");

  const agentManifest = await fetchOk("/.well-known/agent.json");
  assert.match(agentManifest.headers.get("content-type") ?? "", /application\/json/, "agent manifest should be JSON");
  const manifestJson = await agentManifest.json();
  assert.equal(manifestJson.name, "Scaffolde", "agent manifest should identify Scaffolde");
  assert.ok(Array.isArray(manifestJson.preferred_entrypoints), "agent manifest should expose preferred entrypoints array");
  assert.ok(Array.isArray(manifestJson.markdown_mirrors), "agent manifest should expose markdown mirrors array");
  assert.ok(Array.isArray(manifestJson.capabilities), "agent manifest should expose capabilities array");
  assert.ok(manifestJson.capabilities.length >= 4, "agent manifest should expose multiple capability layers");

  for (const [pathname, contentType] of expectedTextRoutes) {
    const response = await fetchOk(pathname);
    assert.match(response.headers.get("content-type") ?? "", new RegExp(contentType.replace("/", "\\/")), `${pathname} should return ${contentType}`);
    const body = await response.text();
    assert.ok(body.length > 20, `${pathname} should not be empty`);
  }

  console.log(`Smoke passed for ${baseUrl}`);
} finally {
  stopServer();
}
