// Given a variable n,

// If n is an integer, Return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark. If n is negative, then the negative sign should be removed.

// If n is not an integer, return the string "NaN".

// Ex:

// dashatize(274) -> '2-7-4'
// dashatize(6815) -> '68-1-5'




//MY SOLUTION
function dashatize(num) {
    let str = num.toString()
    let result = '';
    for ( let i = 0; i < str.length; i++ ) {
      str[i] % 2 === 1 ? result += `-${str[i]}-` : result += str[i]
    }
    while ( result[0] === '-' ) {
      result = result.slice(1)
    }
    while ( result[result.length-1] === '-' ) {
      result = result.slice(0, result.length-1)
    }
    return result.replace(/--/g, '-')
  }