// In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

// For example:

// dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

// dup(["kelless","keenness"]) = ["keles","kenes"].




//MY SOLUTION
function dup(s) {
    const filterStr = (str) => {
      const arrOfChar = str.split('')
      const arrayOfNonRepChar = arrOfChar.filter((char, i, arrOfChar) => {
        return char !== arrOfChar[i-1]
      })
      return arrayOfNonRepChar.join('')
    }
  
    return s.map(string => {
      return filterStr(string)
    })
  }