/**
 *    Pattern 11
 *    1
 *    0 1       Input: n = 4
 *    1 0 1
 *    0 1 0 1
 */

import fs from "fs";

(() => {
  const n = fs.readFileSync("/dev/stdin", "utf8");

  let start = 1;

  for (let i = 0; i < n; i++) {
    if (i % 2 == 0) start = 1;
    else start = 0;

    for (let j = 0; j <= i; j++) {
      process.stdout.write(start + " ");
      start = 1 - start;
    }

    console.log();
  }
})();
