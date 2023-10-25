//Given an integral number, determine if it's a square number:

//MY SOLUTION
var isSquare = function(n){
    if(Number.isInteger(Math.sqrt(n))) {
      return true
    } else {
      return false
    }
  }