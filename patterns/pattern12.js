/**
 *    Pattern 12
 *    1             1
 *    1 2         2 1     Input: n = 4
 *    1 2 3     3 2 1
 *    1 2 3 4 4 3 2 1
 */

import fs from "fs";

(() => {
  const n = fs.readFileSync("/dev/stdin", "utf8");
  let space = 2 * (n - 1);

  for (let i = 1; i <= n; i++) {
    // numbers
    for (let j = 1; j <= i; j++) {
      process.stdout.write(j + " ");
    }
    // spaces
    for (let j = 1; j <= space; j++) {
      process.stdout.write("  ");
    }
    // numbers
    for (let j = i; j >= 1; j--) {
      process.stdout.write(j + " ");
    }
    console.log();
    space -= 2;
  }
})();
