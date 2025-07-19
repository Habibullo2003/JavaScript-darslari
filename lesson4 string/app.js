// String
console.log('Habibullo Xayrullayev');

let email = 'habibullo@gmail.com';
console.log(email);

// String concatenation
let firstName = 'Habibullo';
let lastName = 'Xayrullayev';

let fullName = firstName + ' ' + lastName;
console.log(fullName);

// Getting characters
console.log(fullName[2])
console.log(firstName[7])
console.log(lastName[1])

// String length - uzunlik
console.log(fullName.length)  // stringni uzunligini hisoblab beradigan funksiya

// String methods - funksiyalar
console.log(fullName.toUpperCase());  // stringni barcha harflarini katta harflarga o'zgartirib beradigan beradigan funksiya.

let result = fullName.toLowerCase()  // stringni barcha harflarini kichik harflarga o'zgartirib result o'zgaruvchisiga yukladik.
console.log(result)  // consolega resultni chiqardik.

let index = email.indexOf('@')  // indexOf - belgini qaysi pozitsiyada ekanligini aniqlab beradi. Agar belgi qidirilayotgan o'zgaruvchida mavjud bo'lsa joylashgan indexsini raqami chiqadi, agar mavjud bo'lmasa -1 natijani qaytaradi.
console.log(index)  // consolega indexni chiqardik.