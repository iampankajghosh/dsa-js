/**
 *    Pattern 17
 *        A
 *      A B A        Input: n = 4
 *    A B C B A
 *  A B C D C B A
 */

import fs from "fs";

(() => {
  const n = fs.readFileSync("/dev/stdin", "utf8");
  const ch = 65;

  for (let i = 0; i < n; i++) {
    // spaces
    for (let j = 0; j < n - i - 1; j++) {
      process.stdout.write("  ");
    }

    // characters
    for (let j = 0; j < 2 * i + 1; j++) {
      let charCode;

      if (j <= i) {
        charCode = ch + j;
      } else {
        charCode = ch + (2 * i - j);
      }

      process.stdout.write(String.fromCharCode(charCode) + " ");
    }

    console.log();
  }
})();
