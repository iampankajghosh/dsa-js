/**
 * Remove Duplicates in-place from Sorted Array
 *
 * Input: [1, 1, 2, 2, 2, 3, 3]
 * Output: [1, 2, 3, _, _, _, _]
 */

import fs from "fs";

(() => {
  let arr = JSON.parse(fs.readFileSync("/dev/stdin", "utf8"));

  function removeDuplicates(a) {
    if (a.length === 0) return 0;

    let i = 0;

    for (let j = 1; j < a.length; j++) {
      if (a[j] !== a[i]) {
        i++;
        a[i] = a[j];
      }
    }

    for (let k = i + 1; k < a.length; k++) {
      a[k] = "_";
    }

    return a;
  }

  console.log(removeDuplicates(arr));
})();
