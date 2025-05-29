// const { add } = require('./utils/add');
// const { subtract } = require('./utils/subtract');
// console.log(subtract(20, 10));
// console.log(add(20, 10))


// const { add, subtract } = require('./utils/index');
const { add, subtract } = require('./utils');
console.log(add(20, 10));
console.log(subtract(20, 10));

(function () {
    console.log("আমি IIFE! আমি নিজেই নিজেকে চালাই।");
})();

(() => {
    console.log('This is Engineer');
})();

((name) => {
    console.log(`I will level up my skills in ${name}`);
})('level2');

console.log(require)
