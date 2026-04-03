/**
 *    Pattern 15
 *    A B C D
 *    A B C        Input: n = 4
 *    A B
 *    A
 */

import fs from "fs";

(() => {
  const n = fs.readFileSync("/dev/stdin", "utf8");
  let ch = 64;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - (i - 1); j++) {
      process.stdout.write(String.fromCharCode(ch + j) + " ");
    }
    console.log();
  }
})();
