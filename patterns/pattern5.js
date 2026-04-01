/**
 *      Pattern 5
 *      * * * *        Input: n = 4
 *      * * *
 *      * *
 *      *
 */

import fs from "fs";

(() => {
  const n = fs.readFileSync("/dev/stdin", "utf8");

  for (let i = 0; i < n; i++) {
    for (let j = n; j > i; j--) {
      process.stdout.write("* ");
    }
    console.log();
  }
})();
