// THIS IS THE O(n) algorithm, as the number of items increase, the time to find an item increases.

// const student_names = ['bayo','shade','kola','kunle','mayowa']
// const my_name = 'bayo'
// const student_name_finder = (all_student,student_name)=>{
//     all_student.map((student)=>{
//             if(student === student_name){
//                     console.log(`The name ${student_name} exist`)
//                     return;
//             }
//     })
// }


// student_name_finder(student_names,my_name)
   

//o(1)algorithm. this is an algorithm that takes a constant time irrespective of items it contains.

const numbers = [1,2,3,4,5,6]

const getElement = (arr,index)=>arr[index]

console.log(getElement(numbers,3))


//LETTER REVERSAL
const change = (word)=>{
   return word.split('').reverse().join('')
}
console.log(change('samuel okolie'))




//PALINDROME
const palindromeCheck=(word)=>{
    let reversedWord = word.split('').reverse().join('')
    if(reversedWord === word){
        console.log(`${word} is a pallindrome`)
    }else{
        console.log(`${word} is not a pallindrome`)
    }
}

palindromeCheck('daily')
palindromeCheck('madam')





//NUMBER REVERSAL

const numReversal = (num)=>{
    const numbers = String(num)
   let reversedNumber =  parseInt(numbers.split('').reverse().join(''))
    console.log(reversedNumber)
}
numReversal(3456)



//SENTENCE CAPITALISATION

const sentence = 'this is the way life should be'

const capitalise=(word)=>{
    return word.toLowerCase().split(" ") .map((word)=>word[0].toUpperCase() + word.slice(1)).join(' ')
}
console.log(capitalise(sentence))



//FIZZ BUZZ
let number = 30

const fizzBuzz = (num) =>{
    for (i = 0; i < num; i++){
        if((i % 2 == 0)&(i % 3 == 0)){
            console.log(`${i} is divisible by 3: FIZZ-BUZZ`)
        }
        else if(i % 2 == 0){
            console.log(`${i} is divisible by 2: FIZZ`)
        }else if(i % 3 == 0){
            console.log(`${i} is divisible by 3: BUZZ`)
        }
        }
        console.log(i)
    }

console.log(fizzBuzz(number))


// MAX PROFIT

const foo = ['one','two','three','four']
const [three,one,two,four]= foo
console.log(three,one,two)



const personell = {
    name:'Aquilla',
    position:'Director',
    ID: 1,
}

const {ID,position,name} = personell
console.log(ID,position,name)