/**
 *      Pattern 10
 *    *
 *    * *       Input: n = 4
 *    * * *
 *    * * * *
 *    * * *
 *    * *
 *    *
 */

import fs from "fs";

(() => {
  const n = fs.readFileSync("/dev/stdin", "utf8");

  for (let i = 1; i <= 2 * n - 1; i++) {
    let stars = i;
    if (i > n) stars = 2 * n - i;

    for (let j = 1; j <= stars; j++) {
      process.stdout.write("* ");
    }
    console.log();
  }
})();
