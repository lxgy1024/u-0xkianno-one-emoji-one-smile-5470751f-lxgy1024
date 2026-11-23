// One Emoji, One Smile — writes exactly one emoji to entry.txt.
// The emoji: a warm face with smiling eyes. It reads as kind and friendly
// at a glance, needs no context, and is understood the same way by a
// stranger of any age or background — a genuine smile, not the plain
// default smiley and nothing intimate or jokey.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EMOJI = "😊";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, EMOJI, "utf8");

// Read back and verify the gate before exiting: UTF-8 text, 1 to 8
// characters, not only white space. Fail loudly instead of shipping
// a file the scorer would refuse.
import { readFileSync } from "node:fs";
const written = readFileSync(outPath, "utf8");
if ([...written].length < 1 || [...written].length > 8 || written.trim().length === 0) {
  throw new Error(`entry.txt failed the gate: ${JSON.stringify(written)}`);
}
