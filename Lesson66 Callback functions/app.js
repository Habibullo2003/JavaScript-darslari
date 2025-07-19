//  Callback Functions


const getTodos = (callback) => {
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', () => {
        if(request.readyState === 4 && request.status === 200) {
            callback(undefined, request.responseText)
        } else if(request.readyState === 4){
            callback("Ma'lumotni olishni iloji yo'q", undefined)
        }
    })
    request.open('get', 'https://jsonplaceholder.typicode.com/todos/')
    request.send()
}

//async callback function
getTodos((err, data) => {
    console.log('Callback function ishga tushdi!!!')
    if(err) {
        console.log(err)
    } else {
        console.log(data)
    }
})