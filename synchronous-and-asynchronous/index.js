// //synchronous code
// const myFunc = ()=>{
//     console.log('Inside the function now!!!')
// }

// console.log('Start')
// myFunc()
// console.log('End')


//asynchronous
console.log('Start')
setTimeout(() => {
    console.log('Inside the set timeout function')
}, 3000);

console.log('End')
 

// PROMISES
// PROMISES HAVE THREE STATES: pending, fulfilled/resolved , rejected.

