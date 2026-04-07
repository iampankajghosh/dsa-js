/**
 * Print Fibonacci series up to nth term
 *
 * Input: N = 5 (upto 5th term)
 * Output: 0 1 1 2 3 5
 */

import fs from "fs";

(() => {
  let str = String(fs.readFileSync("/dev/stdin", "utf8"));

  function isPalindrome(i) {
    if (i >= str.length / 2) return "Palindrome";
    if (str[i] != str[str.length - i - 1]) return "Not Palindrome";

    return isPalindrome(i + 1);
  }

  console.log(isPalindrome(0));
})();
