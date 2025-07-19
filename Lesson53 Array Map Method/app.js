// Array Map Method

const movies = [
    {name: 'Avatar 3D', year: 2008, rating: 9},
    {name: 'Titanik 4D', year: 1997, rating: 7},
    {name: 'Forsaj 9 3D', year: 2022, rating: 4},
    {name: 'Avengers', year: 2012, rating: 6}
]

const newMovies = movies.map((movie) => {
    return { name: movie.name, year: movie.year, rating: movie.rating + 1 }
})
console.log(newMovies)

// const numbers = [3, 5, 7, 9]

// map

// const newNumbers = numbers.map(num => num ** 2)
// console.log(newNumbers)

// forEach

// const newNumbers = []
// numbers.forEach((num) => {
//     newNumbers.push(num**2)
// })
// console.log(newNumbers)