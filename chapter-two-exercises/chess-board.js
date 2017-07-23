/*
Write a program that creates a string that represents an 8x8 grid, using
newline characters to separate lines. At each position of the grid there is
either a space or a "#" character. The characters should form a chess board.
Passing this string to console.log should show something like this:
______________________________________________________________________________

# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
______________________________________________________________________________
*/

var size = 8;
var board = "";

for (var i = 0; i < size; i++) {
  for (var j = 0; j < size; j++) {
    if ((i + j) % 2 == 0) {
      board += "#";
    } else {
      board += " ";
    }
  }
  board += "\n";
}
console.log(board);
