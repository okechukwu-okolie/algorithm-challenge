// const title = document.getElementById('title')

// console.dir(document.all)
// // title.innerText = 'This is a new value'
// document.title = 'active page'
// // ........................................acessing the DOM
// const h1 = document.getElementsByTagName('h1')
// console.log(h1)
// const h2 = document.getElementById('main')
// console.log(h2.textContent)
// console.log('.....................................................')
// console.log(document.getElementsByClassName('hello'))
// const hello = document.getElementsByClassName('hello')
// console.log(hello[0])


// console.log(
//     document.querySelector('#main')
// )
// console.log(document.querySelectorAll('li')[2].textContent)

// console.log('........INNER TEXT INNER CONTENT AND INNER HTML.........')
// //INNERTEXT
// const p1 = document.getElementsByTagName('p')
// console.log(p1[0].innerHTML )

// console.log('......WORKING WITH CLASSLIST..........')
// const h1 = document.querySelector('h1')
// console.log(h1.classList)



// console.log('....adding classes to elements.......')

// h1.classList.add('newClass')
// h1.classList.remove('newClass')
// console.log(typeof(h1.classList))


// console.log('......toggling classes of elements.......')
// // if the class exists, toggle removes it, if it doesnt, it adds it to the element.
// h1.classList.toggle('newStyle')

// console.log('......working with attributes.......')
// const a = document.querySelector('a')
// const input = document.querySelector('input')

// // console.log(a.href)
// // console.log(input.type='text')
// // console.log(input.value='hello world')
// console.log(a.getAttribute('href'))
// a.setAttribute('href','https://www.youtube.com')
// a.innerText='Youtube'


// console.log('......working with siblings.......')
// let firstLi = document.querySelector('li')
// //for parents
// console.log(firstLi.parentElement.parentElement)
// console.log(firstLi.parentElement.parentElement.parentElement)
// console.log(firstLi.parentElement.parentElement.parentElement.parentElement) 
// //for children
// const ul = document.querySelector('ul')
// console.log(ul.children[0].textContent)

// //for next sibling
// console.log(firstLi.nextElementSibling.textContent)
// console.log(firstLi.nextElementSibling.nextElementSibling.textContent)
// console.log(firstLi.nextElementSibling.nextElementSibling.nextElementSibling.textContent)
// console.log(firstLi.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.textContent)

// //for previous sibling
// console.log('...............previous siblings..................................')
// console.log(firstLi.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.previousElementSibling.textContent)
// console.log(firstLi.nextElementSibling.nextElementSibling.nextElementSibling.previousElementSibling.textContent)
// console.log(firstLi.nextElementSibling.nextElementSibling.previousElementSibling.textContent)
// console.log(firstLi.nextElementSibling.previousElementSibling)



// console.log('......working with styles.......')
// const ul = document.querySelector('ul')
// const li = document.querySelector('li')
// ul.style.fontFamily = 'sans-serif'
// ul.style.fontWeight='bold'
// ul.style.color='red'
// ul.style.fontSize='30px'
// li.nextElementSibling.style.color='blue'



console.log('......creating elements and appending to the DOM.......')
//creating element
const h1 = document.createElement('h1')
console.log(h1)


