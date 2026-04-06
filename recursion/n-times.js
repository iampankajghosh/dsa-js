/**
 * Print Name N times using recursion
 *
 * Input: N = 3
 * Output: Ashis Ashis Ashis
 */

import fs from "fs";

(() => {
  let n = Number(fs.readFileSync("/dev/stdin", "utf8"));

  function printName(i, num) {
    if (i > num) return;
    process.stdout.write("Ashish ");
    printName(i + 1, num);
  }

  printName(1, n);
})();
