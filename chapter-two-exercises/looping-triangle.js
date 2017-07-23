/*
Write a loop that makes seven calls to console.log to output the following
triangle:
__________________________________________________________________________
#
##
###
####
#####
######
#######
__________________________________________________________________________
*/
var result = '#'

for (var count = 0; count < 7; count++) {
  console.log(result)
  result += '#'
}
