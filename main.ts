// The One-Line Exit — make.fun entry.
// Writes one single-line resignation letter to /output/entry.txt.
// The letter opens with the formal "I resign, effective immediately" and
// then turns on the office chair filing a restraining order against the
// writer's back — the writer sides with the chair. Formal register up
// front, absurd twist at the end, and a punchline a colleague would repeat.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "I resign, effective immediately — my chair has filed a restraining order against my back, and frankly, I side with the chair.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "out";

// Gate check: the competition requires 1–140 characters, one line, not
// only whitespace. Fail loudly instead of writing an invalid entry.
const trimmed = entry.trim();
if (trimmed.length < 1 || trimmed.length > 140 || entry.includes("\n")) {
  throw new Error(
    `entry fails the gate: ${trimmed.length} chars, single line required`,
  );
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
