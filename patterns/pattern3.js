/**
 *      Pattern 3
 *      1           Input: n = 4
 *      1 2
 *      1 2 3
 *      1 2 3 4
 */

import fs from "fs";

(() => {
  const n = fs.readFileSync("/dev/stdin", "utf8");

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write(j + " ");
    }
    console.log();
  }
})();
