// template string
const title = "O'zbekiston futbol terma jamoasi JCH2026 ga chiqdi. Hamma baxtli!"
const author = 'futbol yangilikari uz'
const likes = 38000000

// concatentation way
// let result = 'Bu post nomi: ' + title + '. Post ' + author + ' tomonidan yozildi va ' + likes + ' ta likelarni yig\'di'
// console.log(result);

// template string way
let result = `Bu post nomi: ${title}. Post ${author} tomonidan yozildi va ${likes} ta likelarni yig'di`;
console.log(result);