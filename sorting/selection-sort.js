/**
 * Selection sort algorithm
 *
 * Input: [13, 46, 24, 52, 20, 9]
 * Output: [9, 13, 20, 24, 46, 52]
 */

import fs from "fs";

(() => {
  let arr = JSON.parse(fs.readFileSync("/dev/stdin", "utf8"));

  function selectionSort(a) {
    let n = a.length;

    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;

      for (let j = i + 1; j < n; j++) {
        if (a[j] < a[minIndex]) {
          minIndex = j;
        }
      }

      // Swap
      if (minIndex !== i) {
        [a[i], a[minIndex]] = [a[minIndex], a[i]];
      }
    }

    return a;
  }

  console.log(selectionSort(arr));
})();
