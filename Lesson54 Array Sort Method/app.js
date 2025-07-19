// Array Sort Method

const movies = [
    {name: 'Avatar 3D', year: 2008, rating: 9},
    {name: 'Titanik 4D', year: 1997, rating: 7},
    {name: 'Forsaj 9 3D', year: 2022, rating: 4},
    {name: 'Avengers', year: 2012, rating: 6}
]

const sortedMovies = movies.sort((a, b) => {
    return a.rating - b.rating
})

console.log(sortedMovies)

// const names = ['Sherzod', 'Nizomjon', 'Abdurahmon', 'Javohir']
// const sortedNames = names.sort()
// console.log(sortedNames)

// const numbers = [1, 5, 77, 70, 11, 3]
// const sortedNumbers = numbers.sort((a,b) => a-b)
// console.log(sortedNumbers)