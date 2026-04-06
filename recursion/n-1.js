/**
 * Print N to 1 using recursion
 *
 * Input: N = 4
 * Output: 4, 3, 2, 1
 */

import fs from "fs";

(() => {
  let n = Number(fs.readFileSync("/dev/stdin", "utf8"));

  function printNum(start, end) {
    if (start < 1) return;
    process.stdout.write(start + ", ");
    printNum(start - 1, end);
  }

  printNum(n, n);
})();
