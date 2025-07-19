//  Formalar "submit" eventi

const signupForm = document.querySelector('#signup-form')
const username = document.querySelector('#username')

signupForm.addEventListener('submit', (e) => {
    e.preventDefault()  // sahifa qayta yuklanishini oldini oladi.
    console.log('Form submitted')
    console.log(username.value) // form ichida bitta id bo'lsa shunaqa qilib consolega chiqariladi
    console.log(signupForm.username.value)  // agar form ichida bir nechta id bo'lsa shunday qilib consolega chiqariladi.
}) 