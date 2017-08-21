var ancestry = require('./ancestry.js')
var ancestry = JSON.parse(ancestry)

function average (array) {
  function plus (a, b) { return a + b }
  return array.reduce(plus) / array.length
}
// This is working
var byName = {}
ancestry.forEach(function(person) {
  return byName[person.name] = person
})

function hasKnownMother(p) { return p.mother in byName }

function ageDifference(person) {
  return person.born - byName[person.mother].born
}

function age(p) { return p.died - p.born }
function male(p) { return p.sex === 'm' }
function female(p) { return p.sex === 'f' }


console.log(average(ancestry.filter(hasKnownMother).map(ageDifference)));
