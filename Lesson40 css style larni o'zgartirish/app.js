// CSS stylelarni o'zgartirish

const heading = document.querySelector('h1')

// heading.setAttribute('style', 'margin: 50px')   // bu usuldan foydalanish tavsiya etilmaydi. Chunki 
                                                   // bu usulda style ustiga style yozvoradi. 


console.log(heading.style)

heading.style.margin = '50px'
heading.style.color = 'brown'
heading.style.fontSize = '50px'


// berilgan style ni olib tashlash
heading.style.margin = ''
