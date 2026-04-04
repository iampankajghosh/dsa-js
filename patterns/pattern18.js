/**
 *    Pattern 18
 *  E
 *  D E        Input: n = 5
 *  C D E
 *  B C D E
 *  A B C D E
 */

import fs from "fs";

(() => {
  const n = Number(fs.readFileSync("/dev/stdin", "utf8"));
  const A = 65;
  const start = A + n - 1;

  for (let i = 1; i <= n; i++) {
    for (let j = start - i + 1; j <= start; j++) {
      process.stdout.write(String.fromCharCode(j) + " ");
    }
    console.log();
  }
})();
