/**
 *      Pattern 7
 *            *             Input: n = 4
 *          * * *
 *        * * * * *
 *      * * * * * * *
 */

import fs from "fs";

(() => {
  const n = fs.readFileSync("/dev/stdin", "utf8");

  for (let i = 0; i < n; i++) {
    // spaces
    for (let j = 0; j < n - i - 1; j++) {
      process.stdout.write("  ");
    }

    // stars
    for (let j = 0; j < 2 * i + 1; j++) {
      process.stdout.write("* ");
    }

    //spaces
    for (let j = 0; j < n - i - 1; j++) {
      process.stdout.write("  ");
    }
    console.log();
  }
})();
