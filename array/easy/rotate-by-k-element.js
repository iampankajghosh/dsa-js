/**
 * Rotate array by K elements
 *
 * Input: [1, 2, 3, 4, 5, 6, 7], k = 2, right
 * Output: [6, 7, 1, 2, 3, 4, 5]
 */

import fs from "fs";

(() => {
  const input = fs.readFileSync(0, "utf-8").trim().split("\n");

  let arr = JSON.parse(input[0]);
  let k = parseInt(input[1]);

  function rightRotate(a, k) {
    const n = a.length;
    if (n === 0) return a;

    k = k % n;

    function reverse(arr, start, end) {
      while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
      }
    }

    reverse(a, 0, n - 1);

    reverse(a, 0, k - 1);

    reverse(a, k, n - 1);

    return a;
  }

  console.log(rightRotate(arr, k));
})();
