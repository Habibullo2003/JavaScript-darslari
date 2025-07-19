//  Callback Function

const myfunc = (callbackFunc) => {
    let age = 22
    callbackFunc(age)
}

myfunc(function (value) {
    console.log(value)
})

// Demak funksiya argumentiga berilgan funksiyaga callback function deyiladi.