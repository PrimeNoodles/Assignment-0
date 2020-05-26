function sumOfMinimumAndMaximum(nums) {
  // Insert code here;
  var min = Math.min(...nums);
  var max = Math.max(...nums);
  return (max + min);
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;