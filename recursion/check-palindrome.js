/**
 * Check if the given string is palindrome or not
 *
 * Input: str = "ABCDCBA"
 * Output: Palindrome
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
