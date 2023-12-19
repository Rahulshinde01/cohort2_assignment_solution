/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

  let str1_ws = str1.replace(/\s/g, "");
  let str2_ws = str2.replace(/\s/g, "");
  let str1_lc = str1_ws.toLowerCase();
  let str2_lc = str2_ws.toLowerCase();

  if(str1_lc.length !==str2_lc.length){
    return false;
  }

  const str1_sort = str1_lc.split('').sort().join("");
  const str2_sort = str2_lc.split('').sort().join("");

  return str1_sort===str2_sort;
}

module.exports = isAnagram;
