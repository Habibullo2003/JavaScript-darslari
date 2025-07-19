// Callback Hell

const getTodos = (resurse, callback) => {
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', () => {
        if(request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.responseText)
            callback(undefined, data)
        } else if(request.readyState === 4){
            callback("Ma'lumotni olishni iloji yo'q", undefined)
        }
    })
    request.open('get', resurse)
    request.send()
}

//async callback function
getTodos('todos/todo1.json', (err, data) => {
    console.log(data)
    getTodos('todos/todo2.json', (err, data) => {
        console.log(data)
    })
        getTodos('todos/todo3.json', (err, data) => {
            console.log(data)
        })
})