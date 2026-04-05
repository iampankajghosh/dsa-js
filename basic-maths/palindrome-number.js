/**
 * Check if a number is palindrome or not
 *
 * Input: N = 7789
 * Output: Not Palindrome
 */

import fs from "fs";

(() => {
  let n = Number(fs.readFileSync("/dev/stdin", "utf8"));

  let dupNum = n;
  let revNum = 0;

  while (n > 0) {
    let lastDigit = n % 10;
    revNum = revNum * 10 + lastDigit;
    n = Number.parseInt(n / 10);
  }

  if (dupNum == revNum) {
    console.log("Palindrome");
  } else {
    console.log("Not a palindrome");
  }
})();
