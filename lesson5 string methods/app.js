/* -------       Ko'p ishatiladigan string methodlari      -------- */

let email = 'habibullo@gmail.com'

// indexOf() - characterni pozitsiyasini aniqlab beradi. bittadan ko'p bo'lsa character birinchisini oladi.
let result = email.indexOf('a')
console.log(result)

// lastIndexOf() - characterni pozitsiyasini aniqlab beradi. bittadan ko'p bo'lsa character oxirgisini oladi.
let result1 = email.lastIndexOf('a')
console.log(result1)

// slice() - belgilangan oraliqdagi characterlarni chiqarib beradi.
let result2 = email.slice(1, 3)
console.log(result2)

// substr() - slice() ga o'xshab ketadi lekin, boshlagan index dan oxiri belgilanganigachasini emas, o'shanchasini chiqaradi.
let result3 = email.substr(1, 3)
console.log(result3)

// replace() - characterni boshqa character bilan almashtirish.
let result4 = email.replace('o', 'a')
console.log(result4)

// charAt() - birinchi characterni olib beradi.
let result5 = email.charAt()
console.log(result5)

// toUpperCase() --- toLowerCase() - characterlarni barchasini katta yoki kichik qilib beradi.
let result6 = email.toUpperCase()
console.log(result6)
let result7 = email.toLowerCase()
console.log(result7)

// trim() - bo'sh joyni o'chirib beradi.
pochta = ' habibullo@mail.ru '
console.log(pochta)
let result8 = pochta.trim()
console.log(result8)
console.log(pochta.length, result8.length)

// split)_- array yani lug'at qilib beradi
let result9 = email.split()
console.log(result9)