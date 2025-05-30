// const EventEmitter = require('events');

// class SchoolBell extends EventEmitter { }

// const schoolBell = new SchoolBell();

// schoolBell.on('ring', () => {
//     console.log('Hurrah! The class is over');
// });

// schoolBell.on('ring', () => {
//     console.log('We are very happy to hear the news of finishing the class');
// });

// schoolBell.emit('ring');

// schoolBell.on('broken', () => {
//     console.log('The class is yet to finish');
// });

// schoolBell.emit('broken');

const EventEmitter = require('events');

class SchoolBell extends EventEmitter { }

const schoolBell = new SchoolBell;

schoolBell.on('ring', () => {
    console.log('The class is finished');
});

schoolBell.on('ring', () => [
    console.log('Hurray! We are going to get ready for going home')
]);

schoolBell.emit('ring');

schoolBell.on('break', () => {
    console.log('This class is yet to finish');
});

schoolBell.on('break',()=>{
    console.log('We are not happy')
})


schoolBell.emit('break');
