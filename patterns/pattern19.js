/**
 * Pattern 19
 * *********
 * **** ****
 * ***   ***
 * **     **  Input: n = 6
 * *       *
 * *       *
 * **     **
 * ***   ***
 * **** ****
 * *********
 */

import fs from "fs";

(() => {
  const n = Number(fs.readFileSync("/dev/stdin", "utf8"));

  let initSpace = 0;
  let invertInitSpace = 2 * n - 2;

  for (let i = 0; i < n; i++) {
    // stars
    for (let j = 0; j < n - i; j++) {
      process.stdout.write("* ");
    }

    // spaces
    for (let j = 0; j < initSpace; j++) {
      process.stdout.write("  ");
    }

    // stars
    for (let j = 0; j < n - i; j++) {
      process.stdout.write("* ");
    }

    initSpace += 2;
    console.log();
  }

  // invert
  for (let i = 1; i <= n; i++) {
    // stars
    for (let j = 0; j < i; j++) {
      process.stdout.write("* ");
    }

    // spaces
    for (let j = 0; j < invertInitSpace; j++) {
      process.stdout.write("  ");
    }

    // stars
    for (let j = 0; j < i; j++) {
      process.stdout.write("* ");
    }

    invertInitSpace -= 2;
    console.log();
  }
})();
