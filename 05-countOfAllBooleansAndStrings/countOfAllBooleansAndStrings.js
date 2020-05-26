function countOfAllBooleansAndStrings(arr) {
  // Insert code here;
  var count = 0;

  for( var i = 0; i < arr.length; i++) {

    // Counts for if the content is a boolean value
    if(arr[i] === true) {
      count++;
      }

    if(arr[i] === false) {
      count++;
    }
    // Counts for if the content is a string value
    if(typeof(arr[i]) === "string"){
      count++;
    }
  }

  return count;  

}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;