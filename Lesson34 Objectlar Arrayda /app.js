// Objectlarda array

const cars = [
    {name: 'BMW', year: 2025},
    {name: 'Audi', year: 2024},
    {name: 'Mercedes Benz', year: 2023},
    {name: 'Gentra', year: 2022}
]

cars.forEach((car) => {
    // console.log(car.name);
    // console.log(car.year);
    const result =`Bu mashina nomi: ${car.name} va u ${car.year} - yilda ishlab chiqarilgan.`
    console.log(result);
})




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
//     speak:  function () {
//         console.log(this)
//         console.log('Men quyidagi tillarda gapira olaman: ')
//         this.langs.forEach((lang) => {
//             console.log(lang)
//         })
//     },
//     cars: [
//     {name: 'BMW', year: 2025},
//     {name: 'Audi', year: 2024},
//     {name: 'Mercedes Benz', year: 2023},
//     {name: 'Gentra', year: 2022},
//     ],
//     aboutCars: function () {
//         const result =`Bu mashina nomi: ${car.name} va u ${car.year} - yilda ishlab chiqarilgan.`
//         console.log(result);
//     }
// }

// user.aboutCars()