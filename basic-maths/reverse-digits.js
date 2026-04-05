/**
 * Reverse digits in a number
 *
 * Input: N = 7789
 * Output: 9877
 */

import fs from "fs";

(() => {
  let n = Number(fs.readFileSync("/dev/stdin", "utf8"));

  let revNum = 0;

  while (n > 0) {
    let lastDigit = n % 10;
    revNum = revNum * 10 + lastDigit;
    n = Number.parseInt(n / 10);
  }

  console.log(revNum);
})();
