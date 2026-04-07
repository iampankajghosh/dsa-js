/**
 * Reverse a given array
 *
 * Input: N = 5 -> [5, 4, 3, 2, 1]
 * Output: [1, 2, 3, 4, 5]
 */

import fs from "fs";

(() => {
  let n = Number(fs.readFileSync("/dev/stdin", "utf8"));

  let sum = 0;
  let arr = Array.from({ length: n }, (_, i) => n - i);

  function f(l, r) {
    if (l >= r) return;

    sum = arr[l] + arr[r];
    arr[l] = sum - arr[l];
    arr[r] = sum - arr[r];

    f(l + 1, r - 1);
  }

  f(0, n - 1);
  console.log(arr);
})();
