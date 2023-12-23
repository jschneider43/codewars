// Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!

// You need to cast the whole array to the correct type.

// Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.

// ie:["1", "2", "3"] to [1, 2, 3]




//MY SOLUTION
function toNumberArray(stringarray){
    let result = []
    for (let i = 0; i < stringarray.length; i++) {
      result.push(Number(stringarray[i]))
    }
    return result
  }