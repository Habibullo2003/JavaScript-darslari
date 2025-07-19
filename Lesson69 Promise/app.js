// Promise

// const internet = true

// const getData = () => {
//     return new Promise((resolve, reject) => {
//         if(internet) {
//             console.log('Some data!')
//         } else {
//             console.log('Some error!')
//         }
//     })
// }

// getData().then((data) => {
//     console.log(data)
// }).catch((err)=>{
//     console.log(err)
// })


const getTodos = (resurse) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest()

        request.addEventListener('readystatechange', () => {
            if(request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText)
                resolve(data)
            } else if(request.readyState === 4){
                reject("Ma'lumotni olishni iloji yo'q")
            }
        })
        request.open('get', resurse)
        request.send()
    })
}

// getTodos('todos/todo1.json').then((data) => {
//     console.log(data)
// }).catch((err) => {
//     console.log(err)
// })

// promise chaining - promiselar zanjiri
getTodos('todos/todo1.json')
    .then((data) => {
        console.log(data)
        return getTodos('todos/todo2.json')
    })
    .then((data)=> {
        console.log(data)
        return getTodos('todos/todo3.json')
    })
    .then((data)=> {
        console.log(data)
    })
    .catch((err) => {
        console.log(err)
    })

//async callback function
// getTodos('todos/todo1.json', (err, data) => {
//     console.log(data)
//     getTodos('todos/todo2.json', (err, data) => {
//         console.log(data)
//     })
//         getTodos('todos/todo3.json', (err, data) => {
//             console.log(data)
//         })
// })