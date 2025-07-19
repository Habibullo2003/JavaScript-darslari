// HTTP Request

const request = new XMLHttpRequest()

// request.addEventListener('readystatechange', () => {
//     // console.log(request, request.readyState)
//     if(request.readyState === 4) {
//         console.log(request.responseText)
//     }
// })


// open
request.open('get', 'https://jsonplaceholder.typicode.com/todos/')

// send
request.send()

// 1. open - tayyor
// 2. send - request yuborildi
// 3. Loading... yuklanyapti
// 4. ma'lumot keldi.


// Request status

request.addEventListener('readystatechange', () => {
    // console.log(request, request.readyState)
    if(request.readyState === 4 && request.status === 200) {
        console.log(request, request.responseText)
    } else if(request.readyState === 4) {
        console.log("Ma'lumotni olishning iloji bo'lmadi!!!")
    }
})
