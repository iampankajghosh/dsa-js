/**
 *    Pattern 13
 *    1
 *    2 3              Input: n = 4
 *    4 5 6
 *    7 8 9 10
 */

import fs from "fs";

(() => {
  const n = fs.readFileSync("/dev/stdin", "utf8");
  let num = 1;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write(num + " ");
      num++;
    }
    console.log();
  }
})();
