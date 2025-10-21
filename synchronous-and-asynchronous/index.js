// //synchronous code
// const myFunc = ()=>{
//     console.log('Inside the function now!!!')
// }

// console.log('Start')
// myFunc()
// console.log('End')


//asynchronous
// console.log('Start')
// setTimeout(() => {
//     console.log('Inside the set timeout function')
// }, 3000);

// console.log('End')
 

// PROMISES
// PROMISES HAVE THREE STATES: pending, fulfilled/resolved , rejected.

//promise syntax
//if promise is resolved:.then().finally(): if rejected:then().catch().finally()

// .then()handles successful outcomes of Promises in javascript, taking 2 arguements:onFulfilled,onRejected
//.catch() method returns a Promise and deals with rejected case only.
new Promise((resolve,reject)=>{
 //async operations
 resolve(value)
 reject(Error)
})

//example
// const promiseObj = new Promise((resolve, reject)=>{
//     let req = true;
//     req == false ? resolve("Request Successful"):reject('Request Rejected')
// }).then((value)=>console.log(value))
// .catch((error)=>console.log(error))

//another example
// function checkNumber(number){
//     return new Promise((resolve, reject)=>{
//         if(number%2 === 0){
//             resolve(`${number} is an even number.`)
//         }else{
//             reject(`${number} is an odd number`)
//         }
//     })
// }

// const numberToCheck = 61

// checkNumber(numberToCheck)
// .then((message)=>{
//     console.log(`Success: ${message}`)
// })
// .catch(error=>console.log('Error: ',error))


//async and await functions
async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const datas = await response.json()
    return datas.map(data=>data.body)

}
// const res = getData()
// console.log(getData())

async function main(){
    const data = await getData()
    console.log(data)
}

// main()

const results = document.querySelector('results')


fetch('text.txt')
.then((res=>{
    if(!res.ok)throw Error(res.statusText);
    return res.text() 
    }))
.then((data)=>console.log(data))
.catch((err)=>console.log(err))
