function productOfAnyAmountOfNumbers(...args) {
  // Insert code here;
  var prod = 1;
  
  for(var i = 0; i < args.length; i++) {
    prod *= args[i];
  }
  return prod;
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;