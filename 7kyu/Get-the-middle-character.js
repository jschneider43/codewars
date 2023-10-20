// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"

//MY SOLUTION
function getMiddle(s){
    if(s.length < 2){
      return s
    }
    if(s.length % 2) {
      for(let i = 0;i < s.length; i++)
        if(i === (s.length - 1) / 2){
          return s[i]
        }
    } else {
      for(let i = 0;i < s.length; i++)
        if(i === (s.length) / 2){
          return s[i - 1] + s[i]
      }
    }
  }