function pairSum(nums, target) {
  // Insert code here;
  // A nested for loop which returns all combination of pairs in the array to see if it adds to target
  for(var i = 0; i < nums.length; i++){
    for(var j = 0; j < nums.length; j++){
      // The same number cannot add itself
      if(i !== j) {
        if(nums[i] + nums[j] == target) {
          return true;
        }
      }
    }
  }
  
  return false;
}

// Do not edit this line;
module.exports = pairSum;