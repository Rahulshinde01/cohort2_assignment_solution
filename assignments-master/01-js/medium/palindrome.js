/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let input = str.replace(/[^a-zA-Z0-9]/g,"").toLowerCase();
  let start=0;
  let end = input.length-1;

  


  while(start<end){
     let ans = input.charAt(start)== input.charAt(end);
     if(!ans){
      return false;
     }
     start++;
      end--;
    

  }
  
  return true;
}

module.exports = isPalindrome;
