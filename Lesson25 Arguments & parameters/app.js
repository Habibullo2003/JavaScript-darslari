//         Arguments & Parameters

// const my_func = function (name, day) {
//     console.log(`Xayrli ${day}, ${name}`)
// }

// my_func('Habibullo', 'kun')   // name va day bular - parameters. 'Habibullo', 'kun' bular argumentlar


// funksiyaning biror parametriga default qiymat berish.

const my_func = function (name, day='kun') {
    console.log(`Xayrli ${day}, ${name}`)
}

my_func('Habibullo', 'tong')  // agar bu yerda tong ni olib tashlasak default berilgan qiymat ekranga chiqadi.