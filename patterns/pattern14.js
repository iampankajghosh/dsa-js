/**
 *    Pattern 14
 *    A
 *    A B              Input: n = 4
 *    A B C
 *    A B C D
 */

import fs from "fs";

(() => {
  const n = fs.readFileSync("/dev/stdin", "utf8");
  let ch = 64;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write(String.fromCharCode(ch + j) + " ");
    }
    console.log();
  }
})();
