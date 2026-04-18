/**
 * Find Second Smallest and Second Largest Element in an array
 *
 * Input: [1, 2, 4, 7, 7, 5]
 * Output: Second Smallest : 2
 *         Second Largest : 5
 */

import fs from "fs";

(() => {
  let arr = JSON.parse(fs.readFileSync("/dev/stdin", "utf8"));

  function findSecondElements(a) {
    if (a.length < 2) return null;

    let unique = [...new Set(a)];

    if (unique.length < 2) return null;

    unique.sort((x, y) => x - y);

    let secondSmallest = unique[1];
    let secondLargest = unique[unique.length - 2];

    return {
      secondSmallest,
      secondLargest,
    };
  }

  let result = findSecondElements(arr);

  if (result === null) {
    console.log("Not enough elements");
  } else {
    console.log("Second Smallest :", result.secondSmallest);
    console.log("Second Largest :", result.secondLargest);
  }
})();
