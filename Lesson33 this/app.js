/* this — bu joriy kontekstdagi (muayyan joydagi) object yoki qiymatga ishora qiluvchi maxsus kalit so'z (keyword).

Yani, this yordamida JavaScript ichida hozir qaysi object ishlayapti yoki funksiya qaysi 
objectga tegishli ekanini aniqlash mumkin. */

// this

const user = {
    name: 'Doston',
    age: 22, 
    email: 'doston22@gmail.com',
    location: 'Qashqadaryo',
    langs: ["o'zbek", "ingliz", "rus"],
    login: function () {
        console.log('Siz saytga kirdingiz!')
    },
    logout: function () {
        console.log('Siz saytdan chiqdingiz!')
    },
    speak:  function () {
        console.log(this)
        console.log('Men quyidagi tillarda gapira olaman: ')
        this.langs.forEach((lang) => {
            console.log(lang)
        })
    }
}

user.speak()


// Arrow function ichida this o'z konteksti bo'lmaydi, u tashqi kontekstdagi this ni oladi:

// const user = {
//     name: 'Doston',
//     age: 22, 
//     email: 'doston22@gmail.com',
//     location: 'Qashqadaryo',
//     langs: ["o'zbek", "ingliz", "rus"],
//     login: function () {
//         console.log('Siz saytga kirdingiz!')
//     },
//     logout: function () {
//         console.log('Siz saytdan chiqdingiz!')
//     },
//     speak: () => {
//         console.log(this)
//     }
// }

// user.speak()

// console.log(this)

