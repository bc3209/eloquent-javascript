/*

Write a  program that uses console.log to print all the numbers from 1 to 100,
with two exeptions. For numbers divisible by 3, print "Fizz" instead of the
number, and for numbers divisible by 5, print "Buzz" instead. For numbers
divisible by both 3 and 5, print "Fizzbuzz."

*/

for (var num = 1; num <= 100; num++) {
  if (num % 15 === 0) {
    console.log('Fizzbuzz')
  } else if (num % 5 === 0) {
    console.log('Buzz')
  } else if (num % 3 === 0) {
    console.log('Fizz')
  } else {
    console.log(num)
  }
}
