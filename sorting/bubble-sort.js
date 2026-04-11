/**
 * Bubble sort algorithm
 *
 * Input: [5, 4, 3, 2, 1]
 * Output: [1, 2, 3, 4, 5]
 */

import fs from "fs";

(() => {
  let arr = JSON.parse(fs.readFileSync("/dev/stdin", "utf8"));

  function bubbleSort(a) {
    let n = a.length;

    for (let i = n - 1; i >= 0; i--) {
      for (let j = 0; j <= i - 1; j++) {
        if (a[j] > a[j + 1]) {
          let temp = a[j + 1];
          a[j + 1] = a[j];
          a[j] = temp;
        }
      }
    }

    return a;
  }

  console.log(bubbleSort(arr));
})();
