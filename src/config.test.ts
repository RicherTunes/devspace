import assert from "node:assert/strict";
import { loadConfig } from "./config.js";

const baseEnv = {
  DEVSPACE_ALLOWED_ROOTS: process.cwd(),
};

assert.equal(loadConfig(baseEnv).widgets, "changes");
assert.equal(loadConfig({ ...baseEnv, DEVSPACE_WIDGETS: "changes" }).widgets, "changes");
assert.equal(loadConfig({ ...baseEnv, DEVSPACE_WIDGETS: "minimal" }).widgets, "changes");
assert.equal(loadConfig({ ...baseEnv, DEVSPACE_WIDGETS: "full" }).widgets, "full");
assert.equal(loadConfig({ ...baseEnv, DEVSPACE_WIDGETS: "off" }).widgets, "off");

assert.equal(loadConfig({ ...baseEnv, DEVSPACE_TOOL_CARD_MODE: "write-only" }).widgets, "changes");
assert.equal(loadConfig({ ...baseEnv, DEVSPACE_TOOL_CARD_MODE: "minimal" }).widgets, "changes");
assert.equal(loadConfig({ ...baseEnv, DEVSPACE_TOOL_CARD_MODE: "full" }).widgets, "full");
assert.equal(loadConfig({ ...baseEnv, DEVSPACE_TOOL_CARD_MODE: "off" }).widgets, "off");

assert.throws(
  () => loadConfig({ ...baseEnv, DEVSPACE_WIDGETS: "invalid" }),
  /Invalid DEVSPACE_WIDGETS: invalid/,
);
