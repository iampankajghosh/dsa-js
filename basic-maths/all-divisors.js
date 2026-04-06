/**
 * Print all Divisors of a given number
 *
 * Input: N = 12
 * Output: [1, 2, 3, 4, 6, 12]
 */

import fs from "fs";

(() => {
  let n = Number(fs.readFileSync("/dev/stdin", "utf8"));
  let output = [];

  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      output.push(i);
    }
  }

  console.log(output);
})();
