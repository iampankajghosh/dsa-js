/**
 * Factorial of a Number: Iterative and Recursive
 *
 * Input: N = 5
 * Output: 120
 */

import fs from "fs";

(() => {
  let n = Number(fs.readFileSync("/dev/stdin", "utf8"));

  function f(num) {
    if (num == 0) return 1;

    return num * f(num - 1);
  }

  console.log(f(n));
})();
