import { mkdirSync, writeFileSync } from "node:fs";

const TEXT = "He promised forever. She kept receipts.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
