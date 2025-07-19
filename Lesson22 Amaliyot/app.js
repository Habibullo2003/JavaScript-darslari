/* 1-mashq: promptdan ism va yosh kiritilsa, kiritilgan yosh orqali ushbu malumotlar hisoblab 
berilishi kerak: tug'ilgan yili, necha oy yashagan, hafta, kun, soat, daqiqa, sekund */

// const ism = prompt('Ismingizni kiriting: ')
// const yosh = Number(prompt('Yoshingizni kiriting: '))

// let t_yil = 2025 - yosh
// let oy = yosh * 12
// let hafta = ((yosh * 365) / 7).toFixed(0)
// let kun = yosh * 365
// let soat = kun * 24
// let daqiqa = soat * 60
// let sekund = daqiqa * 60

// const result = `Hurmatli ${ism} siz hozirgacha ${oy} oy, ${hafta} hafta, ${kun} kun, ${soat} soat, 
//     ${daqiqa} daqiqa, ${sekund} sekund yashagansiz!`
// alert(result)


/* 2-mashq: Ismlar arrayi berilgan. Shu array ichida promptdan so'ralayotgan ism bo'lsa unda ha 
bunday ism bor, agar bo'lmasa afsus bunday ism yo'q degan yozuv chiqarilishi kerak. */

// ismlar = ['Azamat', 'Sherzod', 'Javohir', 'Qobil', 'Akobir']
// const kimKerak = prompt('Kim kerak: ')
// if(ismlar.includes(kimKerak)){
//     alert('Ha bunday ism bor!')
// } else {
//     alert('Afsus bunday ism yo\'q!')
// }

/* 3-mashq: Array ichidagi ismlar har birining oxiriga 'bek' qo'shimchasini qo'shing.  */

// for loopi  yordamida
// ismlar = ['Azamat', 'Sherzod', 'Javohir', 'Qobil', 'Akobir']
// for(let i=0; i<ismlar.length; i++){
//     result = ismlar[i] + 'bek'
//     console.log(result)
// }

// while loopi  yordamida
// ismlar = ['Azamat', 'Sherzod', 'Javohir', 'Qobil', 'Akobir']
// let i=0; 
// while(i<ismlar.length){
//     result = ismlar[i] + 'bek'
//     console.log(result)
//     i++
// }

/* 4-mashq: promptdan kiritilgan viloyat orqali o'sha viloyatda qancha aholi borligi chiqarilsin. */
// const viloyatNomi = prompt('Kerakli viloyatni kiriting: ')
// switch(viloyatNomi) {
//     case 'Qashqadaryo':
//         console.log('Qashqadaryoda 3 mln aholi yashaydi.') 
//         break
//     case 'Toshkent':
//         console.log('Toshkentda 5 mln aholi yashaydi.') 
//         break
//     case 'Samarqand':
//         console.log('Samarqandda 4.5 mln aholi yashaydi.') 
//         break
//     case 'Xorazm':
//         console.log('Xorazmda 3.3 mln aholi yashaydi.') 
//         break
//     case 'Buxoro':
//         console.log('Buxoroda 2.9 mln aholi yashaydi.') 
//         break
//     default:
//         console.log("Siz kiritgan viloyat haqida bizda malumotlar yo'q")
// }

/* 5-mashq: promptdan kiritilgan belgilar soni meyoridan oshsa qancha oshgani va qancha yozgani,
agar meyoridan kam yozilgan bo'lsa qancha yozganiva qancha yana belgi kiritishi kerakligi 
xabarini berish kerak */ 
const belgilar = prompt('Biror nima kiriting: ')
let meyor = 20
if(belgilar.length > meyor){
    alert(`Siz ${meyor} ta belgi kiritishingiz kerak. Lekin hozir siz ${belgilar.length} ta belgi 
        kiritdingiz. Siz kiritgan belgilar meyoridan ${belgilar.length - meyor} ta oshdi.`)
} else {
    alert(`Siz ${meyor} ta belgi kiritishingiz kerak. Lekin hozir siz ${belgilar.length} ta belgi 
        kiritdingiz. Siz kiritgan belgilar meyoridan ${meyor - belgilar.length} ta kam.`)
}