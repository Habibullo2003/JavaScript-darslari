/* Object — bu kalit-qiymat (key-value) juftliklarini saqlovchi ma'lumot tuzilmasi (data structure).

JavaScriptda object orqali bir nechta qiymatlarni bitta joyda tartibli ravishda saqlash mumkin. 
Har bir qiymatning o'z kaliti (key) bo'ladi va bu kalit orqali qiymatga murojaat qilinadi. */

// object yaratilishi
const cars = {
    name: 'BMW',
    colour: ['oq', 'qora', 'qizil', 'yashil'],
    year: 2025,
    price: 300000000
}

console.log(cars)

// Yaratilgan objectni ichidagi ma'lum bir xususiyatni 2 xil usulda consolega chiqarishimiz mumkin.

// 1-usul
console.log(cars.name)

// 2-usul
console.log(cars['name'])

// Objectdagi biror xususiyatni qiymatini o'zgartirish.
cars.year = 2026
console.log(cars.year)