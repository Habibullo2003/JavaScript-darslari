const API = "https://jsonplaceholder.typicode.com/todos/"

// eski usul - new XMLHttpRequest()

// const getData = (resource) => {
//     return new Promise((resolve, reject) => {
//         const request = new XMLHttpRequest()

//         request.addEventListener('readystatechange', () => {
//             if(request.readyState === 4 && request.status === 200) {
//                 const data = JSON.parse(request.responseText)
//                 resolve(data)
//             } else if(request.readyState === 4) {
//                 reject('Error!')
//             }
//         })

//         request.open('GET', resource)
//         request.send()
//     })
// }

// getData(API) 
//     .then((data) => {
//         console.log(data)
//     })
//     .catch((err) => {
//         console.log(err)
//     })


// yangi usul - Fetch API

fetch(API) 
    .then((data) => {
        return data.json()
    })
    .then((dataJson) => {
        console.log(dataJson)
    })
    .catch((err) => {
        console.log(err)
    })