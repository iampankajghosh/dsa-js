/**
 * Find GCD of two numbers
 *
 * Input: N1 = 9, N2 = 12
 * Output: 3
 */

import fs from "fs";

(() => {
  let n = fs.readFileSync("/dev/stdin", "utf8");

  let n1 = n.split("\n")[0];
  let n2 = n.split("\n")[1];
  let gcd = 1;

  for (let i = 1; i <= Math.min(n1, n2); i++) {
    if (n1 % i == 0 && n2 % i == 0) {
      gcd = i;
    }
  }

  console.log(gcd);
})();
