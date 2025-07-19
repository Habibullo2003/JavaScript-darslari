// forEach method

const cars = ['malibu', 'matiz', 'cobalt', 'nexia']
console.log(cars)
const newCars = []

cars.forEach(function (car) {
    const newCar = car.charAt().toUpperCase() + car.slice(1).toLowerCase() 
    newCars.push(newCar)
})

console.log(newCars)