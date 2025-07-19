const getTodos = (callback) => {
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', () => {
        if(request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.responseText)
            callback(undefined, data)
        } else if(request.readyState === 4){
            callback("Ma'lumotni olishni iloji yo'q", undefined)
        }
    })
    request.open('get', 'todos.json')
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