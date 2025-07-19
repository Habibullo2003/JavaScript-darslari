// Function expression
// const calcYuza = function(a) {
//     return a ** 2
// }

// const s = calcYuza(4)
// console.log(s)

// Arrow function

// const calcYuza = a => a ** 2   /* bu ko'rinishda yozish faqat funksiya ichida bir qator kod bo'lsa 
//                                 shu ko'rinishda yoziladi va bitta parametr bo'lsa uni qavs ichida yozmasa 
//                                 ham bo'ladi. */
// const s = calcYuza(4)
// console.log(s)


//  Function expression
// const salom =  function (ism) {
//     return `Hello, ${ism}`
// }

// const result = salom('Habibullo')
// console.log(result)

// Arrow function 
// const salom = (ism, familiya) => `Hello, ${ism} ${familiya}` // bunda qavslar qo'yiladi. chunki 1 tadan ortiq parametr bor. 

// const result = salom('Habibullo', 'Xayrullayev')
// console.log(result)


// //  Function expression
// const productsSum = function (products, foiz) {
//     let total = 0
//     for(let i=0; i<products.length; i++){
//         total += products[i] + products[i]*foiz
//     }
//     return total
// }

// const result = productsSum([10, 40, 70], 0.3)
// console.log(result)


//  Arrow function
const productsSum = (products, foiz) => {
    let total = 0
    for(let i=0; i<products.length; i++){
        total += products[i] + products[i]*foiz
    }
    return total
}

const result = productsSum([10, 40, 70], 0.3)
console.log(result)