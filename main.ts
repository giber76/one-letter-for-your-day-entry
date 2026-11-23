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

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", "Q", "utf8");
