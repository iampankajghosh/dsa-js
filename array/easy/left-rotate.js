/**
 * Left Rotate the Array by One
 *
 * Input: [1, 2, 3, 4, 5]
 * Output: [2, 3, 4, 5, 1]
 */

import fs from "fs";

(() => {
  let arr = JSON.parse(fs.readFileSync("/dev/stdin", "utf8"));

  function leftRotateByOne(a) {
    if (a.length === 0) return a;

    let first = a[0];

    for (let i = 1; i < a.length; i++) {
      a[i - 1] = a[i];
    }

    a[a.length - 1] = first;

    return a;
  }

  console.log(leftRotateByOne(arr));
})();
