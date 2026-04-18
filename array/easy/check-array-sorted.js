/**
 * Check if an Array is Sorted
 *
 * Input: [1, 2, 3, 4, 5]
 * Output: true
 */

import fs from "fs";

(() => {
  let arr = JSON.parse(fs.readFileSync("/dev/stdin", "utf8"));

  function isSorted(a) {
    for (let i = 1; i < a.length; i++) {
      if (a[i] < a[i - 1]) {
        return false;
      }
    }
    return true;
  }

  console.log(isSorted(arr));
})();
