/*

Write a range function that takes two arguments, start and end, and returns
an array containing all the numbers from start up to (and including) end.

Next, write a sum function that takes an array of numbers and returns the sum
of these numbers. Run the previous program and see whether it does indeed return
55.

As a bonus assignment, modify your range function to take an optional third
argument that indicated the "step" values uses to build up the array. If no
step is given, the array elements go up by increments of one, corresponding to
the old behavior. The function call range(1, 10, 2) should return
[1, 3, 5, 7, 9]. Make sure it also works with negative step values so that
range(5, 2, -1) produces [5, 4, 3, 2].

*/

function range (start, end) {
  let numArray = []

  while (start <= end) {
    numArray.push(start)
    start += 1
  }
  return numArray
}

function sum (array) {
  let total = 0

  for (var i = 0; i < array.length; i++) {
    total += array[i]
  }
  return total
}

// Bonus assignment
function bonusRange (start, end, step) {
  if (typeof step === 'undefined') {
    step = 1
  }

  let numArray = []

  if (step > 0) {
    for (var i = start; i <= end; i += step) {
      numArray.push(i)
    }
  } else {
    for (var i = start; i >= end; i += step) {
      numArray.push(i)
    }
  }
  return numArray
}

console.log(sum([1, 2, 3, 4, 5]))
console.log(sum(range(1, 10)))

console.log(bonusRange(5, 2, -1))
console.log(bonusRange(1, 10, 2))
