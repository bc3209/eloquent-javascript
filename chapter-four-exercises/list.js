/*

Write a function arrayToList that builds up a data structure like the previous
one when given [1, 2, 3] as an argument, and write a listToArray function that
produces an array from a list. Also write the helper functions prepend, which
takes an element and a list and creates a new list that adds the element to the
front of the input list, and nth, which takes a list and number and returns the
element at the given position in the list, or undefined when there is no such
element. If you haven't already, also write a recursive version of nth.

*/

function arrayToList (array) {
  let list = null

  for (var i = array.length - 1; i >= 0; i--) {
    list = { value: array[i], rest: list }
  }
  return list
}

function listToArray (list) {
  let listArray = []

  for (var node = list; node; node = node.rest) {
    listArray.push(node.value)
  }
  return listArray
}

function prepend (element, list) {
  return { element: element, rest: list }
}

function nth (list, number) {
  if (!list) {
    return undefined
  } else if (number === 0) {
    return list.value
  } else {
    return nth(list.rest, number - 1)
  }
}

console.log(arrayToList([9, 10]))
console.log(listToArray(arrayToList([9, 10, 1])))
console.log(prepend(10, prepend(11, null)))
console.log(nth(arrayToList([9, 10, 11]), 1))
