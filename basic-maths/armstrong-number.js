/**
 * Check if a number is Armstrong Number or not
 *
 * Input: N = 153
 * Output: True
 */

import fs from "fs";

(() => {
  let n = Number(fs.readFileSync("/dev/stdin", "utf8"));

  let dupNum = n;
  let sum = 0;

  while (n > 0) {
    let lastDigit = n % 10;
    sum += lastDigit * lastDigit * lastDigit;
    n = Number.parseInt(n / 10);
  }

  if (dupNum == sum) {
    console.log("True");
  } else {
    console.log("False");
  }
})();
