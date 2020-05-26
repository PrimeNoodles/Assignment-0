function isPalindrome(word) {
  // Insert code here;
  for(var i = 0; i < word.length; i++) {
    if(word.charAt(i) != word.charAt(word.length - (1 - i))) {
      return false;
    }
    
    else {
      return true;
    }
  }
}

// Do not edit this line;
module.exports = isPalindrome;