const fs = require('fs');

// fs.readFile('./async.txt', { encoding: 'utf-8' }, (err, data) => {
//     if (err) {
//         console.log(err.message);
//         return;
//     }
//     fs.writeFile('./hello.txt', data, { encoding: 'utf-8' }, (err) => {
//         if (err) {
//             console.log(err.message);
//         }
//         console.log('Written Successfully');
//     });
// });

const readStream = fs.createReadStream('./async.txt', { encoding: 'utf-8' });
const writeStream = fs.createWriteStream('./hello.txt', { encoding: 'utf-8' });

readStream.on('data', (data) => {
    console.log(data);

    writeStream.write(data, (err) => {
        if (err) {
            throw Error(err);
        }
    });
});

readStream.on('error', (err) => {
    if (err) {
        throw Error(err);
    }
});

writeStream.on('error', (err) => {
    if (err) {
        throw Error(err);
    }
});

readStream.on('end', () => {
    console.log('Reading ended');
    writeStream.end();
});

writeStream.on('finish', () => {
    console.log('Written Successfully');
});
