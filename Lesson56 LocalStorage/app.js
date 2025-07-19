// LocalStorage

// 1. setItem

// const name = 'Habibullo'
// let age = 22
// localStorage.setItem('name', name)
// localStorage.setItem('age', age)

// Arrayda ishlatilishi

// const names = ['Habibullo', 'Azamat', 'Doston']
// localStorage.setItem('names', JSON.stringify(names))

// 2. getItem

// const getAge = localStorage.getItem('age')
// console.log(getAge)

// Arrayda ishlatilishi

// const getNames = JSON.parse(localStorage.getItem('names'))
// console.log(getNames)

// 3. clear

// localStorage.clear()



// misol 

const names = JSON.parse(localStorage.getItem('names')) 
              ? JSON.parse(localStorage.getItem('names'))
              : []


if(names.length > 0){
    names.forEach((name) => {
        console.log(name)
    })
} else {
    console.log("Hech qanday ism yo'q")
}