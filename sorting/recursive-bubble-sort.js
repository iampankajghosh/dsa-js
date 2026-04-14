/**
 * Recursive Bubble sort algorithm
 *
 * Input: [13, 46, 24, 52, 20, 9]
 * Output: [9, 13, 20, 24, 46, 52]
 */

import fs from "fs";

(() => {
  let arr = JSON.parse(fs.readFileSync("/dev/stdin", "utf8"));

  function bubbleSortRecursive(a, n) {
    if (n === 1) return;

    for (let i = 0; i < n - 1; i++) {
      if (a[i] > a[i + 1]) {
        let temp = a[i];
        a[i] = a[i + 1];
        a[i + 1] = temp;
      }
    }

    bubbleSortRecursive(a, n - 1);
  }

  bubbleSortRecursive(arr, arr.length);

  console.log(arr);
})();
