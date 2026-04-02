/**
 *      Pattern 6
 *      1 2 3 4        Input: n = 4
 *      1 2 3
 *      1 2
 *      1
 */

import fs from "fs";

(() => {
  const n = fs.readFileSync("/dev/stdin", "utf8");

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i + 1; j++) {
      process.stdout.write(j + " ");
    }
    console.log();
  }
})();
