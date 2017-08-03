/*

Write two functions, reverseArray and reverseArrayInPlace. The first,
reverseArray, takes an array as an argument and produces a new array that has
the same elements in the inverse order. The second, reverseArrayInPlace, does
what the reverse method does: it modifies the array given as argument in order
to reverse its elements. Neither may use the standard reverse method.

*/

function reverseArray (array) {
  let reversedArray = []

  for (var i = array.length - 1; i >= 0; i--) {
    reversedArray.push(array[i])
  }
  return reversedArray
}

function reverseArrayInPlace (array) {

  for (var i = 0; i < Math.floor(array.length / 2); i++) {
    var old = array[i]
    array[i] = array[array.length - 1 - i]
    array[array.length - 1 - i] = old
  }
  return array;
}

console.log(reverseArray([5, 6, 7]))

var arrayValue = [1, 2, 3];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
