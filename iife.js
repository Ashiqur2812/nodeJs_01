(
    (name) => {
        console.log(`This is ${name}`);
    }
)('Sarah Maria');

(() => {
    // let a = 10
        ((name) => {
            let a = 10;
            console.log(`Learning ${name}`);
            console.log(a)
        })('node');
    // console.log(a);
})()

console.log(__dirname)
console.log(__filename)