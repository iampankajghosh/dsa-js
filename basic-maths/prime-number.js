/**
 * Check if a number is prime or not
 *
 * Input: N = 2
 * Output: True
 */

import fs from "fs";

(() => {
  let n = Number(fs.readFileSync("/dev/stdin", "utf8"));
  let count = 0;

  for (let i = 1; i * i <= n; i++) {
    if (n % i == 0) {
      count++;

      if (n / i != i) {
        count++;
      }
    }
  }

  if (count == 2) {
    console.log("True");
  } else {
    console.log("False");
  }
})();
