/*

Write a function, deepEqual, that takes two vaules and returns true only if
they are the same value or are objects with the same properties whose values are
also equal when compared with a recursive call to deepEqual.

*/

function deepEqual (a, b) {
  if (a === b) {
    return true
  }

  if (a == null || typeof a !== 'object' ||
      b == null || typeof b !== 'object') {
    return false
  }

  var countOfPropertiesinA = 0
  var countOfPropertiesinB = 0

  for (var prop in a) {
    countOfPropertiesinA += 1
  }
  for (var prop in b) {
    countOfPropertiesinB += 1

    if (!(prop in a) || !deepEqual(a[prop], b[prop])) {
      return false
    }
  }
  return countOfPropertiesinA === countOfPropertiesinB
}

var obj = {here: {is: 'an'}, object: 2}
console.log(deepEqual(obj, obj))
console.log(deepEqual(obj, {here: 1, object: 2}))
console.log(deepEqual(obj, {here: {is: 'an'}, object: 2}))
