// Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

// Examples:

// encrypt("012345", 1)  =>  "135024"
// encrypt("012345", 2)  =>  "135024"  ->  "304152"
// encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

// encrypt("01234", 1)  =>  "13024"
// encrypt("01234", 2)  =>  "13024"  ->  "32104"
// encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
// Together with the encryption function, you should also implement a decryption function which reverses the process.

// If the string S is an empty value or the integer N is not positive, return the first argument without changes.




//MY SOLUTION
function encrypt(text, n) {
    if (text == null) {
      return null
    }
    for (let k = 0; k < n; k++) {
      let odd = text.split('').filter((x, i) => i % 2 != 0)
      let even = text.split('').filter((x, i) => i % 2 == 0)
      text = odd.concat(even).join('')
    }
    return text
  }
  
  function decrypt(encryptedText, n) {
    if (!encryptedText) {
      return encryptedText
    }
    let char = encryptedText.split('')
    for (let i = 0; i < n; i++) {
      let odd = char.slice(0, char.length / 2)
      let even = char.slice(char.length / 2)
      char = []
      while (odd.length || even.length) {
        if (even.length) {
          char.push(even.shift())
        }
        if (odd.length) {
          char.push(odd.shift())
        }
      }
    }
    return char.join('')
  }