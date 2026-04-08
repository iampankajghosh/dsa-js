/**
 * Print Fibonacci series up to nth term using recursion
 * Input: N = 5
 * Output: 0 1 1 2 3 5
 */

import fs from "fs";

(() => {
  let n = Number(fs.readFileSync("/dev/stdin", "utf8"));

  function fib(n) {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
  }

  let result = [];
  for (let i = 0; i <= n; i++) {
    result.push(fib(i));
  }

  console.log(result.join(" "));
})();
