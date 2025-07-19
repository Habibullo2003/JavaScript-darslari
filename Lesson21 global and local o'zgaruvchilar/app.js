// Global va local o'zgaruvchilar

let age = 22

if(true) {
    let age = 23
    console.log('Sizning yoshingiz: ', age)
    if(true){
        let age = 24
        console.log('Sizning yoshingiz: ', age)
        if(true){
            console.log('Sizning yoshingiz: ', age)
        }
    }
}