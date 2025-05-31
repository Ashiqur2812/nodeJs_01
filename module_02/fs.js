const fs = require('fs');
console.log('Task 1');

const contest = 'One page summary of Key Performance Indicator(KPI) is called Dashboard';
fs.writeFileSync('./hello.txt', contest);
console.log('Task 2');

try {
    const data = fs.readFileSync('./hello.txt', { encoding: 'utf-8' });
    console.log(data);
} catch (error) {
    console.log(error.message);
}

try {
    const data = fs.readFileSync('./async.txt', { encoding: 'utf-8' });
    console.log('Task 3');
    console.log(data);
} catch (error) {
    console.log(error.message);
}




