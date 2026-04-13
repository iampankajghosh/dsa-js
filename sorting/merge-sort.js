/**
 * Merge sort algorithm
 *
 * Input: [3, 2, 8, 5, 1, 4, 23]
 * Output: [1, 2, 3, 4, 5, 8, 23]
 */

import fs from "fs";

(() => {
  let arr = JSON.parse(fs.readFileSync("/dev/stdin", "utf8"));

  function insertionSort(a) {
    let n = a.length;

    for (let i = 0; i <= n - 1; i++) {
      let j = i;

      while (j > 0 && a[j - 1] > a[j]) {
        let temp = a[j - 1];
        a[j - 1] = a[j];
        a[j] = temp;
        j--;
      }
    }

    return a;
  }

  console.log(insertionSort(arr));
})();
