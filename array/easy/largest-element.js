/**
 * Find the Largest element in an array
 *
 * Input: [2, 5, 1, 3, 0]
 * Output: 5
 */

import fs from "fs";

(() => {
  let arr = JSON.parse(fs.readFileSync("/dev/stdin", "utf8"));

  function findLargest(a) {
    if (a.length === 0) return null;

    let max = a[0];

    for (let i = 1; i < a.length; i++) {
      if (a[i] > max) {
        max = a[i];
      }
    }

    return max;
  }

  console.log(findLargest(arr));
})();
