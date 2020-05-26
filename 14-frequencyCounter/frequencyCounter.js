function frequencyCounter(word) {
  // Insert code here;
  var count = {};

  for(var i = 0; i < word.length; i++) {
    // If the letter is not null, it has already existed, increase count by 1
    if(count[word[i]] != null) {
      count[word[i]]++;
    }
    // If here, then the letter has not existed yet, set count to 1
    else {
      count[word[i]] = 1;
    }
  }
  
  return count;
}

// Do not edit this line;
module.exports = frequencyCounter;