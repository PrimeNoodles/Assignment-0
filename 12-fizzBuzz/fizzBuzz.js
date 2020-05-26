function fizzBuzz(start, end) {
  // Insert code here;
  var arr = [];

  for(var i = start; i <= end; i++) {
    // If i is a multiple of 3 and 5, push fizzbuzz
    if((i % 3 == 0) && (i % 5 == 0)) {
      arr.push("FizzBuzz");
    }
    // If i is a multiple of 5, push buzz
    else if(i % 5 == 0) {
      arr.push("Buzz");
    }
    // If i is a multiple of 3, push fizz
    else if(i % 3 == 0) {
      arr.push("Fizz");
    }
    // If i does not pertain to anything push the number of i
    else {
      arr.push(i);
    }
  }
  
  return arr;
}

// Do not edit this line;
module.exports = fizzBuzz;