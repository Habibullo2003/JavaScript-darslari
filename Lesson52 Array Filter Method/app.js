// Array Filter Method

const movies = [
    {name: 'Avatar 3D', year: 2008, rating: 9},
    {name: 'Titanik 4D', year: 1997, rating: 7},
    {name: 'Forsaj 9 3D', year: 2022, rating: 4},
    {name: 'Avengers', year: 2012, rating: 6}
]


// filter
// const filterMovies = movies.filter((movie) => {
//     return movie.year > 2010
// })

// console.log(filterMovies)

// yuqoridagi kodni qisqartirilgan ko'rinishi
// const filterMovies = movies.filter(movie => movie.year > 2010)
// console.log(filterMovies)

const filterMovies = movies.filter((movie) => {
    return movie.name.includes('3D')
})

console.log(filterMovies)

// forEach
// const newMovies = []
// movies.forEach((movie) => {
//     if(movie.year > 2010) newMovies.push(movie)
// })

// console.log(newMovies)