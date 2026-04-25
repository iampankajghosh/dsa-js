/**
 * Move all Zeros to the end of the array
 *
 * Input: [1 ,0 ,2 ,3 ,0 ,4 ,0 ,1]
 * Output: [1 ,2 ,3 ,4 ,1 ,0 ,0 ,0]
 */

import fs from "fs";

(() => {
  const input = fs.readFileSync(0, "utf-8").trim().split("\n");

  let arr = JSON.parse(input[0]);

  function moveZerosToEnd(a) {
    let j = 0;

    for (let i = 0; i < a.length; i++) {
      if (a[i] !== 0) {
        [a[i], a[j]] = [a[j], a[i]];
        j++;
      }
    }

    return a;
  }

  console.log(moveZerosToEnd(arr));
})();
