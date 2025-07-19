// Destructuring

// ARRAYda

// const cars = ['BMW', 'Bugatti', 'Mersedez Benz', 'KIA K5']

// consolega chiqarishni oddiy yo'li
/* const bmw = cars[0]
const bugatti = cars[1]
const mersedez = cars[2]
const kIA = cars[3]

console.log(bmw, bugatti, mersedez, kIA) */

// desturturing orqali consolega chiqarish

// const [bmw, bugatti, mersedez, kIA] = ['BMW', 'Bugatti', 'Mersedez Benz', 'KIA K5']
// console.log(bmw, bugatti, mersedez, kIA)


// boshqacharoq usul. rest operator yordamida chiqarish (array qaytaradi)

// const [bmw, bugatti, ...boshqaMashinalar] = ['BMW', 'Bugatti', 'Mersedez Benz', 'KIA K5']
// console.log(bmw, bugatti, boshqaMashinalar)



// OBJECTda

// const talaba = {
//     name: 'Anvar',
//     age: 20,
//     level: 2
// }

// consolega chiqarishni oddiy yo'li

/* const name = talaba.name
const age = talaba.age
const level = talaba.level

console.log(name, age, level) */

// desturturing orqali consolega chiqarish

// const {name, age, level} = {
//     name: 'Anvar',
//     age: 20,
//     level: 2
// }
// console.log(name, age, level)


// boshqacharoq usul. rest operator yordamida chiqarish (object qaytaradi)

const {name, ...boshqaMalumotlar} = {
    name: 'Anvar',
    age: 20,
    level: 2
}
console.log(name, boshqaMalumotlar)