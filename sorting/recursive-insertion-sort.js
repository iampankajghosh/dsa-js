/**
 * Recursive Insertion Sort Algorithm
 *
 * Input: [13, 46, 24, 52, 20, 9]
 * Output: [9, 13, 20, 24, 46, 52]
 */

import fs from "fs";

(() => {
  let arr = JSON.parse(fs.readFileSync(0, "utf8"));

  function insertionSortRecursive(a, n) {
    if (n <= 1) return;

    insertionSortRecursive(a, n - 1);

    let last = a[n - 1];
    let j = n - 2;

    while (j >= 0 && a[j] > last) {
      a[j + 1] = a[j];
      j--;
    }
    a[j + 1] = last;
  }

  insertionSortRecursive(arr, arr.length);

  console.log(arr);
})();
