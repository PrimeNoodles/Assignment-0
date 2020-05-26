function sumOfNumsWithinARange(nums, start, end) {
  // Insert code here;
  var count = 0;
  
  for(var i = 0; i < nums.length; i++) {
    if(nums[i] <= end && nums[i] >= start) {
      count++;
    }
  }

  return count;  
}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;