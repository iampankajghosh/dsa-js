/**
 * Find the highest/lowest frequency element
 *
 * Input: [10, 5, 10, 15, 10, 5]
 * Output: Highest: 10 (Count: 4)
 *         Lowest: 15 (Count: 2)
 */

import fs from "fs";

(() => {
  let arr = JSON.parse(fs.readFileSync("/dev/stdin", "utf8"));
  let map = new Map();
  let maxFreq = 0;
  let minFreq = arr.length;
  let highest = 0;
  let lowest;

  for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], (map.get(arr[i]) || 1) + 1);
  }

  for (let [num, count] of map) {
    if (count > maxFreq) {
      maxFreq = count;
      highest = num;
    } else {
      minFreq = count;
      lowest = num;
    }
  }

  console.log(`Highest: ${highest} (Count: ${maxFreq})`);
  console.log(`Lowest: ${lowest} (Count: ${minFreq})`);
})();
