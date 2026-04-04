/**
 *    Pattern 16
 *    A
 *    B B        Input: n = 4
 *    C C C
 *    D D D D
 */

import fs from "fs";

(() => {
  const n = fs.readFileSync("/dev/stdin", "utf8");
  let ch = 65;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write(String.fromCharCode(ch) + " ");
    }
    ch++;
    console.log();
  }
})();
