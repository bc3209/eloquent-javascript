/*

* Zero is even
* One is odd.
* For any other number N, its evenness is the same as N - 2

Define a recursive function isEven corresponding to this description.
The function should accept a number parameter and return a Boolean.
Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way
to fix this?

*/

function isEven (n) {
  if (n === 0) {
    return true
  } else if (n === 1) {
    return false
  } else if (n < 0) {
    return 'Enter a non negative number'
  } else {
    return isEven(n - 2)
  }
}

console.log(isEven(50))
console.log(isEven(75))
console.log(isEven(-1))
