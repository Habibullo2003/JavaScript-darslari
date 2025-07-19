// Shallow copy - sayoz nusxalash

// primitive
// let a = 5
// let b = a
// b = 7

// console.log('a:', a)
// console.log('b:', b)

// reference
// const talaba = {
//     name: 'Doston',
//     age: 22
// }

// const newTalaba = talaba

// console.log(talaba)
// console.log(newTalaba)

// talaba.name = 'Sanjar'
// talaba.age = 23

// console.log(talaba)
// console.log(newTalaba)

/* Xulosa shallow copydagi reference da object yaratilib uni yangi o'zgaruvchiga yuklasak, hamda
yangi objectdagi xususiyatlarni o'zgartisak, eskisidagilar ham o'zgarib ketar ekan. */


// Deep copy - chuqur nusxalash

// reference

const talaba = {
    name: 'Doston',
    age: 22
}

// spread operator - to'liq ma'lumotlni nusxalash
const newTalaba = {...talaba}

talaba.name = 'Sanjar'
talaba.age = 23

console.log(talaba)
console.log(newTalaba)

// Bunda eski objectdagi xususiyatlar o'zgarib ketmaydi.

// chap tomonda kelsa bu rest operator qolgan ma'lumotni nusxalaydi.
const[bir, ...qolgani] = [1, 2, 3, 4]
console.log(qolgani)