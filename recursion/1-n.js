/**
 * Print 1 to N using recursion
 *
 * Input: N = 4
 * Output: 1, 2, 3, 4
 */

import fs from "fs";

(() => {
  let n = Number(fs.readFileSync("/dev/stdin", "utf8"));

  function printNum(start, end) {
    if (start > end) return;
    process.stdout.write(start + ", ");
    printNum(start + 1, end);
  }

  printNum(1, n);
})();
