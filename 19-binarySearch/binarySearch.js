class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    // Insert code here;
    // Setting variables for the binary search
    var min = 0;
    var max = nums.length - 1;
    var mid = 0;

    while(min != max) {
      mid = Math.floor((max + min) / 2);
      if(nums[mid] == target) {
        return true;
      }
      else if(nums[mid] > target) {
        max = (mid - 1);
      }
      else {
        min = (mid + 1);
      }
    }

  return false;
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;