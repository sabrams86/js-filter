var Element = function (value) {
  this.value = value;
  this.next;
}

// ----------------

var NodeList = function () {
  this.length = 0;
}

NodeList.prototype.add = function (node) {
  this[this.length] = node
  this.length++
};

var list = new NodeList
list.add(new Element('foo'))
list.add(new Element('bar'))
list.add(new Element('baz'))

console.log(list);

var filter = function (pred) {
  var result = []
  for (var i = 0; i < this.length; i++) {
    if(pred(this[i])) {
      result.push(this[i])
    }
  }
  return result
}

// var foo = function (a, b, c) {
//   // this
// }
//
// foo(1, 2, 3)
// foo.call({}, 1, 2, 3)
// foo.apply({}, [1, 2, 3])

Array.prototype.forEach.call(list, function (element) {
  console.log(element);
})
