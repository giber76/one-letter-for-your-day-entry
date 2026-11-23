// One Letter for Your Day — entry: Q, for "queasy".
//
// The judge sees exactly one letter and infers the word behind it.
// Q is the sharpest non-obvious pick in the alphabet: "queasy" is a vivid,
// bodily picture of a day (stomach-turning, green around the gills), funny
// the moment it lands, and universally true — everyone has had a queasy day.
// The field is drowned in Z (zero sleep / zombie), K (knackered), D
// (doomscrolled) and U (unhinged); Q stands apart, and queasy is Q's only
// possible initial, so the letter fits its word exactly.
import { mkdirSync, writeFileSync } from "node:fs";

// The entry: exactly one letter, Q. Gate guard — fail loudly if the entry
// ever stops being a single A-Z letter, rather than shipping a bad entry.
const LETTER = "Q";
if (!/^[A-Z]$/.test(LETTER)) {
  throw new Error(`entry.txt must be exactly one letter A-Z, got ${JSON.stringify(LETTER)}`);
}

const dest = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dest, { recursive: true });
writeFileSync(`${dest}/entry.txt`, LETTER, "utf8");
