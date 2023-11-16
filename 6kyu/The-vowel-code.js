// Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5
// For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

// Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

// For example, decode("h3 th2r2") would return "hi there".

// For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.




//MY SOLUTION
function encode(string){
    var list = {
      'a': 1, 
      'e': 2, 
      'i': 3, 
      'o': 4, 
      'u': 5
    };
    return change(string, list);
  }
  
  function decode(string){
    var list = {
      '1': 'a',
      '2': 'e',
      '3': 'i',
      '4': 'o',
      '5': 'u'
    };
    return change(string, list);
  }
  
  function change(string, list) {
    var array = [];
    for (i = 0; i <= (string.length); i++) {
      var char = string.charAt(i);
      if (char in list) {
        array.push(list[char]);
      }
      else {
       array.push([char]);
       }
    }
    return array.join("");
  }