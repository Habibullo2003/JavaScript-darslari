//  Formalar "submit" eventi va regEx dan foydalanish

const signupForm = document.querySelector('#signup-form')
// const username = document.querySelector('#username')
const message = document.querySelector('.message')
const regEx = /^[a-zA-Z0-9]{6,12}$/

signupForm.addEventListener('submit', (e) => {
    e.preventDefault()  // sahifa qayta yuklanishini oldini oladi.
    // console.log('Form submitted')
    // console.log(username.value) // form ichida bitta id bo'lsa shunaqa qilib consolega chiqariladi
    // console.log(signupForm.username.value)  // agar form ichida bir nechta id bo'lsa shunday qilib consolega chiqariladi.
    const inputVal = signupForm.username.value

    if(regEx.test(inputVal)) {
        message.textContent = "Ma'lumot to'g'ri kiritildi!"
    } else {
        message.textContent = "Kiritilayotgan ma'lumot 6 va 12 oralig'ida bo'lishi kerak.\
        Shuningdek kichik va katta lotin haflaridan iborat bo'lishi kerak. Raqamlar ham ishtirok etishi mumkin!"
    }
}) 




//  Live input validation
signupForm.username.addEventListener('keyup', (e) => {
    if(regEx.test(e.target.value)) {
        signupForm.username.setAttribute('class', 'success')
    } else {
        signupForm.username.setAttribute('class', 'error')
    }
})