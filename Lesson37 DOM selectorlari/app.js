// Dom selectors

// 1. getElementsByTagName.   Array kabi natija qaytaradi. Lekin arrayda ishlatilishimiz mumkin bo'lgan
// methodlarni bunda ishlata olmaymiz. Masalan: forEach()

// const listItem = document.getElementsByTagName('li')
// console.log(listItem)
// listItem.forEach((item) => {
//     console.log(item)
// })     // forEach ishlatolmaymiz. Chunki bu HTMLCollection qaytaradi.

// 2. getElementsByClassName. getElementsByTagName ga o'xshaydi faqat taglar orqali emas classlar orqali
// kerakli natijani chiqariladi.

// const listItem = document.getElementsByClassName('list-item')
// console.log(listItem)

// 3. getElementById.  Id bo'yicha natija chiqariladi. id yagona bo'ladi.

// const listId = document.getElementById('click-btn')
// console.log(listId)

// 4. querySelector / querySelectorAll.  bular yuqoridagi TagName, ClassName, Id bo'yicha istaganimizni
// so'rab shunga ko'ra natija olsak bo'ladi. 

// 1. querySelector - bitta selectorni console ga chiqarmoqchi bo'lsak ishlatamiz.

// const queryList = document.querySelector('body')
// console.log(queryList)

// 2. querySelectorAll - bir nechta selectorni console ga chiqarmoqchi bo'lsak ishlatamiz. 
// Bunda Array methodlaridan foydalansak bo'ladi. Masalan: forEach(). Bu NodeList qiymat qaytaradi.

const queryListAll = document.querySelectorAll('li')
// console.log(queryListAll)
queryListAll.forEach((listItem) => {
    console.log(listItem)
})
