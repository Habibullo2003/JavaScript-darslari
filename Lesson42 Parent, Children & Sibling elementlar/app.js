// Parent, Children & Sibling elementlar

// const article = document.querySelector('article')
// console.log(article.children)  

// article.children buni to'gridan-to'g'ri forEach() methodini qo'llay olmaymiz. Lekin quyidagi usul
// orqali forEach() qo'llashga olib kelamiz.

// Array.from(article.children).forEach((child) => {
//     child.classList.add('article-child')
// })


const title = document.querySelector('h2')

// console.log(title.parentElement) // otasini ekranga chiqaradi.
// console.log(title.parentElement.parentElement) // otasining otasini ya'ni bobosini ekranga chiqaradi.
// console.log(title.nextElementSibling) // o'zidan keyingini ekranga chiqaradi.
// console.log(title.previousElementSibling) // o'zidan avvalgini ekranga chiqaradi.


// chaining

console.log(title.nextElementSibling.parentElement.children)