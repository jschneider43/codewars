// You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Given the following input array:

// var list1 = [
//   { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
//   { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
// ];
// write a function that when executed as findOddNames(list1) returns only the developers where if you add the ASCII representation of all characters in their first names, the result will be an odd number:

// [
//   { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
// ]




//MY SOLUTION
function findOddNames(list) {
    return list.filter(x => x.firstName.split('').reduce((a, b) => a + b.charCodeAt(), 0) % 2 !== 0)
   }