// const fs = require('fs');

// console.log('Task-1');
// let text = 'Learning next level web development';

// fs.readFile('./async.txt', { encoding: 'utf-8' }, (err, data) => {
//     if (err) {
//         console.log('Something went wrong', err);
//         return;
//     }
//     text = data;
//     console.log(text, 'inside callback functions');
// });
// console.log(text);

// console.log('Task-3');

const fs = require('fs');
console.log('task-1');

let text = 'Learning next level web development';

fs.writeFile('./hello.txt', text, { encoding: 'utf-8' }, (err) => {
    if (err) {
        console.log('Something went wrong');
        return;
    }
    console.log('Written Successful');
});

fs.readFile('./hello.txt', { encoding: 'utf-8' }, (err, data) => {
    if (err) {
        console.log('Something went wrong', err);
    }
    text = data;
    console.log(data, '--> Inside callback functions');
});
console.log(text, 'from console');
console.log('Task-3');