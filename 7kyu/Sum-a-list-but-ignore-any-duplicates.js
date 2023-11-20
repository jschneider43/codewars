// Please write a function that sums a list, but ignores any duplicate items in the list.

// For instance, for the list [3, 4, 3, 6] , the function should return 10.




//MY SOLUTION
function sumNoDuplicates(n, i, j) {
    let result = 0
    for (i = 0; i < n.length; i++){
      for (j = 0; j < n.length; j++){
        if (i === j) {
          continue
        }
        if (n[i] === n[j]) {
          break
        }
      }
      if (j === n.length) {
        result += n[i]
      }
    }
    return result
  }