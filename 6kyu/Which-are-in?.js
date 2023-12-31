DESCRIPTION:
// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

// Example 1:
// a1 = ["arp", "live", "strong"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns ["arp", "live", "strong"]

// Example 2:
// a1 = ["tarp", "mice", "bull"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns []



//MY SOLUTION
function inArray(array1, array2) {
    result = [];
  
    for (let j = 0; j < array1.length; j++) {
      for (let i = 0; i < array2.length; i++) {
        if (array2[i].includes(array1[j])) {
          result.push(array1[j]);
          break
        }
      }
    }
  
    return result.sort();
  }