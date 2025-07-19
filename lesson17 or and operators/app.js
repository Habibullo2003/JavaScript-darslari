// Logical operators or ||, and &&
password = 'zxcvb@'
if(password.length >= 12 && password.includes('@')) {
    console.log('Sizning parolingiz juda uzun!')
} else if(password.length >= 8 || (password.includes('@') && password.length >= 5)){
    console.log('Sizning parolingiz yetarlicha kuchli!')
} else {
    console.log('Sizning parolingiz yetarlicha kuchli emas!')
}