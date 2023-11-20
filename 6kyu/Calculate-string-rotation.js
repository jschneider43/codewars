// Write a function that receives two strings and returns n, where n is equal to the number of characters we should shift the first string forward to match the second. The check should be case sensitive.

// For instance, take the strings "fatigue" and "tiguefa". In this case, the first string has been rotated 5 characters forward to produce the second string, so 5 would be returned.

// If the second string isn't a valid rotation of the first string, the method returns -1.



//MY SOLUTION
function shiftedDiff(first,second){
    for (let i = 0; i < first.length; i++){
      if (first === second) return i;
      first = rotateLeft(first, first.length - 1)
    }
    return -1
  }
  function rotateLeft(arr, n) {
       let arrTemp = arr.split('')
       for (let i = 0; i < n; i++) {
           let temp = arrTemp.shift()
          arrTemp.push(temp)
       }
      return arrTemp.join('')
  }