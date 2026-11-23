import { mkdirSync, writeFileSync } from "node:fs";

const TEXT = "He promised forever. She kept receipts.";

if (TEXT.trim().split(/\s+/).length !== 6) throw new Error("entry must be exactly six words");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
