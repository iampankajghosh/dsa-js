/**
 * Count digits in a number
 *
 * Input: N = 7789
 * Output: 4
 */

import fs from "fs";

(() => {
  let n = Number(fs.readFileSync("/dev/stdin", "utf8"));

  let count = 0;

  while (n > 0) {
    count += 1;
    n = Number.parseInt(n / 10);
  }

  console.log(count);
})();
