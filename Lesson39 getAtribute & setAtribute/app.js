// getAttribute - biror attribute ni ko'rish uchun ishlatiladi.

const link = document.querySelector('a')
console.log(link.getAttribute('href'))

// setAttribute - biror attribute ni o'zgartirish yoki yangi attribute qo'shis uchun ishlatiladi.

link.setAttribute('href', 'www.yandex.ru')
link.textContent = 'Go To Yandex Main Page'
console.log(link.getAttribute('href'), link.textContent)

const text = document.querySelector('p')
console.log(text.getAttribute('class'))

text.setAttribute('class', 'succes')
console.log(text.getAttribute('class'))

text.setAttribute('style', 'color: red')

