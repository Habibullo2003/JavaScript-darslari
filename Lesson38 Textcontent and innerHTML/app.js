// textContent

// const title = document.getElementById('title')
// title.textContent += ' New text'

const listItem = document.querySelectorAll('.list-item')
listItem.forEach((item) => {
    item.textContent += ' darslari' 
})

// const title = document.getElementById('title')
// title.textContent = '<i>New Text</i>'

// innerHTML 

// const title = document.getElementById('title')
// title.innerHTML = '<i>New Text</i>'


// ESLATMA: innerHTML ni textContent dan farqi innerHTML taglarni ham qabul qiladi. textContent esa tagni
// oddiy string yozuv sifatida o'qib ketadi.


// const names = ['Davron', 'Sanjar', 'Shokir']
// const ol = document.querySelector('ol')
// names.forEach((name) => {
//     ol.innerHTML += `<li> ${name} </li>`
// })


// innerText - bu textContentga o'xshab ketadi. Lekin bir nechta kichik farqlari bor. Shulardan asosiysi
// textContent html da  style="display: none; (yashirilgan) qilingan matnlarni ham ekranga chiqara oladi.
// innerText esa chiqara olmaydi.

// Misol

const divText = document.getElementById('visible')
console.log(divText.textContent)
console.log(divText.innerText)