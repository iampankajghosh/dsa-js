/**
 * Count frequency of an element in an array
 *
 * Input: [10, 5, 10, 15, 10, 5]
 * Output: {"5": 2, "10": 3, "15": 1}
 */

import fs from "fs";

(() => {
  let arr = JSON.parse(fs.readFileSync("/dev/stdin", "utf8"));
  let map = new Map();

  for (let i = 0; i < arr.length; i++) {
    let count = map.get(arr[i]);

    if (!count) {
      map.set(arr[i], 1);
    } else {
      map.set(arr[i], count + 1);
    }
  }

  console.log(Object.fromEntries(map));
})();
