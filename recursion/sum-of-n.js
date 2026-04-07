/**
 * Sum of first N Natural Numbers
 *
 * Input: N = 5
 * Output: 15
 */

import fs from "fs";

(() => {
  let n = Number(fs.readFileSync("/dev/stdin", "utf8"));

  function f(num) {
    if (num == 0) return 0;

    return num + f(num - 1);
  }

  console.log(f(n));
})();
