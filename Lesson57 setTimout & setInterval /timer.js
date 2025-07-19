/* 65-dars topshirig'i yechimi */
const counterEl = document.getElementById('counter')
const startBtn = document.getElementById('start-btn')
const pouseBtn = document.getElementById('pouse-btn')

let counter = 0
let counterInterval
let count = true

function start() {
  if (count) {
    counterInterval = setInterval(() => {
      counter++
      counterEl.textContent = counter
    }, 1000)
    count = !count
  }
}

function pouse() {
  clearInterval(counterInterval)
  count = !count
}

startBtn.addEventListener('click', start)
pouseBtn.addEventListener('click', pouse)
