// Amaliyot masalalari.

// Loop / Array / String / Function / Object


/* ----------- 1-masala ---------- */
// ushbu arraydagi string indexini toping.
// const myArray = [[false, true], [1, 2], 90, 'yaxshi']

// // 1-usul for dan foydalanamiz.
// for(let i=0; i<myArray.length; i++) {
//     if(typeof myArray[i] == 'string') {
//         console.log(i)
//     }
// }

// // 2-usul forEach() dan foydalanamiz.
// myArray.forEach((item, i) => {
//     if(typeof item[i] == 'string') {
//         console.log(i)
//     }
// })


/* ----------- 2-masala ---------- */
// Array ichidagi faqat arraylarni elementlarini ajratib oling.
// Kutilayotgan natija: [1, 2, 3, 4, 5, 6]
// const data = [[1, 2, 3], 'qizil', [4, 5, 6], true, false]
// const myArray = []
// data.forEach((arr) => {
//     const res = Array.isArray(arr)
//     if(res) {
//         arr.forEach((num) => {
//             myArray.push(num)
//         })
//     }
// })
// console.log(myArray)


/* ----------- 3-masala ---------- */
// Array ichidagi [null, 0, '', false, undefined, NaN] qiymatlarni ajratib oling.
// const checkData = [null, 'false', 0, 99, false, undefined, '', NaN, '0']
// let resData = []
// checkData.forEach((data) => {
//     if(!data) {
//         resData.push(data)
//     }
// })
// console.log(resData)


/* ----------- 4-masala ---------- */
// Berilgan qiymat: 'samarqand'
// kutilayotgan qiymat: 'dnaqramas' => elementlarni teskari qilib beradigan kod yozing.
// 1-usul
// const word = 'samarqand'
// const splitWord = word.split('').reverse()
// let newWord = ''
// for(let i=0; i<splitWord.length; i++){
//     newWord += splitWord[i]
// }
// console.log(newWord)

// 2-usul
// const word = 'samarqand'
// const splitWord = word.split('')
// let newWord = ''
// for(i=word.length - 1; i>=0; i--){
//     newWord += splitWord[i]
// }
// console.log(newWord)


/* ----------- 5-masala ---------- */
/* Promptdan kiritilgan istalgan so'zlarni, misol uchun kiritiladi: 'AsSSaLomu AlAyKUM YaxShimisiz'
so'zi kiritilgan bo'lsa, uni quyidagicha chiqarish kerak: 'aSSALOMU aLAYKUM yAXSHIMISIZ' */
// 1-usul
// const word = 'AsSSaLomu AlAyKUM YaxShimisiz'
// const result = word.charAt().toLowerCase() + word.slice(1, 9).toUpperCase() + ' ' + word.charAt(10).toLowerCase() + 
//             word.slice(11, 17).toUpperCase() + ' ' +  word.charAt(18).toLowerCase() + word.slice(19).toUpperCase()
// console.log(result)

// 2-usul
// const word = 'AsSSaLomu AlAyKUM YaxShimisiz'
// const splitWord = word.split(' ')
// console.log(splitWord)
// const word1 = splitWord[0].charAt().toLowerCase() + splitWord[0].slice(1).toUpperCase()
// const word2 = splitWord[1].charAt().toLowerCase() + splitWord[1].slice(1).toUpperCase()
// const word3 = splitWord[2].charAt().toLowerCase() + splitWord[2].slice(1).toUpperCase()
// const result = word1 + ' ' + word2 + ' ' + word3
// console.log(result)

// 3-usul
// const word = 'AsSSaLomu AlAyKUM YaxShimisiz'
// const splitWord = word.split(' ')
// let res = ''
// splitWord.forEach((item) => {
//     const word1 = item.charAt().toLowerCase() 
//     const word2 = item.slice(1).toUpperCase()
//     res += word1 + word2 + ' '
// })
// console.log(res)


/* ----------- 6-masala ---------- */
// Arraydagi natural raqamlar yig'indisini hisoblovchi dastur tuzing.

// const arr = [-1, 87, 4, 3.1, -5.5, Infinity, 0, 1, 2, 0.9]
// let summa = 0
// arr.forEach((son) => {
//     if((son > 0) && (Math.floor(son) === son) && son !== Infinity){
//         summa += son
//     }
// })
// console.log(summa)


/* ----------- 7-masala ---------- */
// Promptdan kiritilgan stringlar ichida 'a' va 'A' harfi necha marta ishtirok etganini hisoblovchi kod yozing.

// const words = prompt('Satrni kiriting: ')
// const resultWords = words.split('')
// let count = 0
// resultWords.forEach((item) => {
//     if(item == 'a' || item == 'A') {
//         count += 1
//     }
// })
// console.log(count)


/* ----------- 8-masala ---------- */
/* Array berilgan: [27.7, 'Azamat', 'array', ['I am developer'], null, true, 18]
uni quyidagicha tipi bilan yangi arrayda chiqaring: ['number', 'string', 'string', 'object', 'object', 'boolean', 'number']*/

// const arr = [27.7, 'Azamat', 'array', ['I am developer'], null, true, 18]
// let newArr = []
// arr.forEach((item) => {
//     newArr.push(typeof item)
// })
// console.log(newArr)


/* ----------- 9-masala ---------- */
/* Kiritilgan textni nechta elementdan iborat ekanligini aniqlovchi dastur tuzing. 
length - metodidan foydalanmang.  text = 'Assalomu alaykum' */

// 1-usul

// const text = 'Assalomu alaykum'
// resultText = text.split('') 
// count = 0
// resultText.forEach(() => {
//     count += 1
// });
// console.log(count)

// 2-usul

// const text = 'Assalomu alaykum'
// console.log(text.lastIndexOf(text.slice(-1)) + 1)


/* ----------- 10-masala ---------- */
/* Array berilgan: [1, 2, 3, 4, 5] uning ichidagi elementlariga o'z index(position) raqamini
qo'shib yangi array hosil qiling.  Natija:  [1, 3, 5, 7, 9] */

// const arr = [1, 2, 3, 4, 5]
// let newArr = []
// arr.forEach((item, i) => {
//     newArr.push(item + i)
// })
// console.log(newArr)


/* ----------- 11-masala ---------- */
/* Berilgan songacha bo'lgan sonlar yig'indisini hisoblovchi dastur tuzing. 
 Misol: number = 10. result: summa = 55. */

//  number = prompt('Sonni kiriting: ')
//  summa = 0
//  for(let i=0; i<=number; i++){
//     summa += i
//  }
//  console.log(summa)

/* ----------- 12-masala ---------- */
/* Berilgan sonni n ga ko'paytirib 1 ni qo'shadigan kod yozing. Birinchi 10 ta holat qaytarilsin. 
Misol uchun. num = 7 bo'lsa Natija: (8, 15, 22, 29, 36, 43, 50, 57, 64, 71) */
// const num = 7
// let sum = 0
// for(let i=0; i<=10; i++){
//     sum = num * i + 1
//     console.log(sum)
// }


/* ----------- 13-masala ---------- */
/* Functionga array kiritsak u array ichidagi raqamlarni ishorasini teskarisiga aylantirib bersin.
misol: [1, 2, 3, 4, 5]  => [-1, -2, -3, -4, -5] 
       [1, -2, 3, -4, 5] => [-1, 2, -3, 4, -5]
       [] => []*/

// let numbers = [1, 2, 3, 4, 5]
// let result = []

// const reverseFunc = (arr) => {
//     arr.forEach((num) => {
//         result.push(num * -1)
//     })
// }
// reverseFunc(numbers)
// console.log(result)


/* ----------- 14-masala ---------- */
/* Functionga berilgan raqamni 0 dan o'sha raqamlargacha bo'lgan sonlarni 3, 5 va 15 ga bo'linish
holatlarini tekshiring,
agar 3 ga bo'linadigan sonlar - 'fizz' 
agar 5 ga bo'linadigan sonlar - 'buzz' 
agar 15 ga bo'linadigan sonlar - 'fizzbuzz' deb ataladi. 

masalan kiritilgan son: 12
natija: [1, 2, 'fizz', 4, 5, 'fizz', 7, 8, 'fizz', 10, 11, 'fizz']*/

// const arr = []

// const fizzbuzzFunc = function (number) {
//     for(let i=1; i<=number; i++) {
//         if(i % 3 === 0 && i % 5 !== 0) {
//             arr.push('fizz')
//         } else if(i % 3 !== 0 && i % 5 === 0){
//             arr.push('buzz')
//         } else if(i % 3 === 0 && i % 5 === 0){
//             arr.push('fizzbuzz')
//         } else {
//             arr.push(i)
//         }
//         } 
//     }

// fizzbuzzFunc(25)
// console.log(arr)


/* ----------- 15-masala ---------- */
/* O'zingiz haqingizda object yarating va unga haqida nomli method qo'shing. U methoddan foydalanilsa
objectdagi ma'lumotlardan foydalanib o'zingiz haqingizda ma'lumot bersin, */

const myObj = {
    name: 'Habibullo',
    surname:'Xayrulllayev',
    year: 2003,
    age: 22, 
    country: "O'zbekiston",
    region: 'Qashqadaryo',
    provincy: 'Mirishkor',
    city: 'Jeynov',
    haqida: function () {
        return `Mening ismim ${this.name}, familiyam ${this.surname}. Men ${this.year} - yilda
            ${this.country} respublikasi, ${this.region} viloyati, ${this.provincy} tumani, 
            ${this.city} shaharchasida tug'ilganman. Hozir yoshim ${this.age} da.`
    }
}

const result = myObj.haqida()
console.log(result)