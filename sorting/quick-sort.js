/**
 * Quick Sort Algorithm
 *
 * Input: [4, 1, 7, 9, 3]
 * Output: [1, 3, 4, 7, 9]
 */

import fs from "fs";

(() => {
  let arr = JSON.parse(fs.readFileSync("/dev/stdin", "utf8"));

  function quickSort(a) {
    if (a.length <= 1) return a;

    let pivot = a[a.length - 1]; // choose last element as pivot
    let left = [];
    let right = [];

    for (let i = 0; i < a.length - 1; i++) {
      if (a[i] < pivot) {
        left.push(a[i]);
      } else {
        right.push(a[i]);
      }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
  }

  console.log(quickSort(arr));
})();
