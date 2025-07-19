// Objectlarga methodlar qo'shish

const user = {
    name: 'Doston',
    age: 22, 
    email: 'doston22@gmail.com',
    location: 'Qashqadaryo',
    lang: ["o'zbek", "ingliz", "rus"],
    login: function () {
        console.log('Siz saytga kirdingiz!')
    },
    logout: function () {
        console.log('Siz saytdan chiqdingiz!')
    }
}

user.login()
user.logout()