/*

Design an interface that abstracts iteration over a collection of values.
An object that provides this interface represents a sequence, and the interface
must somehow make it possible for code that uses such an object to iterate over
the sequence, looking at the element values it is made up of and having some
way to find out when the end of the sequence is reached.

When you have specified your interface, try to write a function logFive that
takes a sequence object and calls console.log on its first five elements—or
fewer, if the sequence has fewer than five elements.

Then implement an object type ArraySeq that wraps an array and allows iteration
over the array using the interface you designed. Implement another object type
RangeSeq that iterates over a range of integers
(taking from and to arguments to its constructor) instead.

*/

function RangeSeq(to, from) {
  this.to = to
  this.from = from
}

RangeSeq.prototype.next = function () {
  if (this.end) {
    return null
  } else {
    return this.to++
  }
};

Object.defineProperty(RangeSeq.prototype, 'end', {
  get: function() {
    return this.to > this.from
  }
})

function ArraySeq(array) {
  this.array = array
  this.index = 0
}

ArraySeq.prototype.next = function () {
  if (this.end) {
    return null
  } else {
    return this.array[this.index++]
  }
};

Object.defineProperty(ArraySeq.prototype, 'end', {
  get: function() {
    return this.array === this.array.length
  }
})

function logFive(sequence) {
  for (var i = 0; i < 5; i++) {
    if (!sequence.next) {
      return null
    }
    console.log(sequence.next())
  }
}





logFive(new ArraySeq([1, 2]))
logFive(new RangeSeq(100, 1000))
