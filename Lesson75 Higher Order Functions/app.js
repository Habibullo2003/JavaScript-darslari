// First class function

// example1. funksiya boshqa bir funksiyani argument sifatida qabul qilishi. 

// const greeting = () => {
//     return 'Hello'
// }

// const sayHello = (func, name) => {
//     return func() + ' ' + name
// }

// const result = sayHello(greeting, 'Sherzod')
// console.log(result)

// example2. bir funksiya return sifatida boshqa bir funksiyani qaytarishi.

// function sayHello() {
//     return () => {
//         return 'Hello'
//     }
// }

// const result = sayHello()()
// console.loge.map((item) => {
//     return {...item, age: item.age + 1}
// })

// console.log(peopleMap)
// console.log(people)(result)

// example3. funksiya biror o'zgaruvchiga tenglanib, osha o'zgaruvchi nomi bilan chaqirilishi

// let callMe = () => {
//     console.log('Hello There')
// }

// callMe()



// Higher Order Functions



const people = [
    {
        name: 'Azamat',
        year: 2001,
        age: 24,
        job: 'teacher',
        region: 'Samarqand viloyati',
        isStudent: false
    },
    {
        name: 'Bobur',
        year: 2003,
        age: 23,
        job: 'web-developer',
        region: 'Xorazm viloyati',
        isStudent: false
    },
    {
        name: 'Dilnoza',
        year: 2007,
        age: 18,
        job: ' ',
        region: 'Qashqadaryo viloyati',
        isStudent: true
    },
    {
        name: 'Fotima',
        year: 2005,
        age: 20,
        job: 'support teacher',
        region: 'Toshkent shahri',
        isStudent: false
    },
    {
        name: 'Sherzod',
        year: 2004,
        age: 21,
        job: 'freelancer',
        region: 'Namangan viloyati',
        isStudent: true
    },
    {
        name: 'Davron',
        year: 2006,
        age: 19,
        job: ' ',
        region: 'Qashqadaryo viloyati',
        isStudent: true
    },
    {
        name: 'Jamila',
        year: 2002,
        age: 23,
        job: 'doctor',
        region: 'Farg\'ona viloyati',
        isStudent: false
    },
    {
        name: 'Sanjar',
        year: 2003,
        age: 22,
        job: 'IT managar',
        region: 'Samarqand viloyati',
        isStudent: true
    },
]

// for

// console.group()
// for(let i=0; i<people.length; i++) {
//     console.log(`Name: ${people[i].name}\nTug'ilgan joyi: ${people[i].region}`)
// }
// console.groupEnd()

// const peopleAge = []
// for(let i=0; i<people.length; i++) {
//     if(people[i].age >= 20) {
//         peopleAge.push(people[i].age)
//     }
// }
// console.log(peopleAge)


// forEach()

// people.forEach((item, index, arr) => {
//     // console.log(arr)
//     console.log(index, `Name: ${item.name} Tug'ilgan joyi: ${item.region}`)
// })


// some() va every()

/* some() - vazifasi berilgan shartni qanoatlantiradigan bitta natijani topsa ham true
 qiymat qaytaradi */

// const somePeople = people.some((item) => {
//    return item.year > 2005 
// })
// console.log(somePeople)

/* every() - vazifasi berilgan shartni qanoatlantirmaydigan bitta false topsa ham, false 
qiymat qaytaradi */  

// const everyPeople = people.every((item) => {
//    return item.year > 2005 
// })
// console.log(everyPeople)


// filter()
// const peopleAge = people.filter((item) => {
//     return item.age >= 20 && item.age <= 23
// })  

// console.log(peopleAge)


// map()
// const peopleMap = people.map((item) => {
//     return {...item, age: item.age + 1}
// })

// console.log(peopleMap)
// console.log(people)


// // find()
// const findPeople = people.find((item) => {
//     return item.isStudent == true
// })

// console.log(findPeople)

// // findIndex()
// const findIndexPeople = people.findIndex((item) => {
//     return item.isStudent == true
// })

// console.log(findIndexPeople)


// flat()
// let arr1 = [10, 20, [30, 40, 50], [60, 70, 80], 90, 100]
// let arr2 = [10, 20, [30, [40, 50]], [[60, 70, 80], 90], 100]
// let arr3 = [10, 20, [30, [40, 50]], [[[60, 70], 80], 90], 100]

// const arr1Flat = arr1.flat()
// console.log(arr1Flat)

// const arr2Flat = arr2.flat(2)
// console.log(arr2Flat)

// const arr3Flat = arr3.flat(3)
// console.log(arr3Flat)

// let employee = [
//     {id:101, name: 'John', skills: ['HTML', 'CSS', 'JavaScript']},
//     {id:101, name: 'John', skills: ['C#', 'SQL']},
//     {id:101, name: 'John', skills: ['Angular', 'React']}


// map() & flat()
// let employee1 = employee.map((employer) => {
//     return employer.skills
// }).flat()

// console.log(employee1)


// // flatMap()
// let employee1 = employee.flatMap((employer) => {
//     return employer.skills
// })

// console.log(employee1)


// sort()
// const sortedPeople = [...people].sort((item1, item2) => {
//     return item1.age - item2.age
// })

// console.log(sortedPeople)
// console.log(people)


// from() 
// const numStr = '123456789'
// const res = Array.from(numStr)
// console.log(res)

// const res1 = Array.from(numStr, (numStr) => {
//     return +numStr
// })

// console.log(res1)


// reduce()

// const arr = [1, 2, 3, 4, 5, 6, 7]

// const sum = arr.reduce((acc, curVal) => {
//     console.log('Accumlator: ', acc, 'CurrentValue: ', curVal)
//     return acc + curVal
// })

// console.log(sum)


const result = people.flatMap((item) => {
    return item.isStudent
})

console.log(result)

const countIsStudent = result.reduce((acc, curVal) => {
    if(!acc[curVal]) {
        acc[curVal] = 1
    } else {
        acc[curVal] += 1
    }

    return acc
}, {})

console.log(countIsStudent)