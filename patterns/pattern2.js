/**
 *      Pattern 2
 *      *           Input: n = 4
 *      * *
 *      * * *
 *      * * * *
 */

import fs from "fs";

(() => {
  const n = fs.readFileSync("/dev/stdin", "utf8");

  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      process.stdout.write("* ");
    }
    console.log();
  }
})();
