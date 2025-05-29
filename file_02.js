// const { a, add, b } = require('./file_01.js');
const var1 = require('./file_01.js');
console.log(var1.a)
console.log(var1.add)
console.log(var1.b)
const { a: a3, add: add3, b: b3 } = require('./file_03.js');
console.log(a3);
console.log(add3(2, 3, 4));
console.log(b3);
// console.log(a);
// console.log(add(2, 3, 4));
// console.log(b);