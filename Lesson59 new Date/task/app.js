const fullDay = document.getElementById('full-day'),
      hour = document.getElementById('hour'),
      minute = document.getElementById('minute'),
      second = document.getElementById('second')



const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]


function show() {
    const now = new Date()
    fullDay.innerHTML = `${now.getDate()} ${months[now.getMonth()]}, ${now.getFullYear()}`
    hour.innerHTML = now.getHours() < 10 ? 0 + `${now.getHours()}` : now.getHours()
    minute.innerHTML = now.getMinutes() < 10 ? 0 + `${now.getMinutes()}` : now.getMinutes()
    second.innerHTML = now.getSeconds() < 10 ? 0 + `${now.getSeconds()}` : now.getSeconds()
    setTimeout(show,1000)
}




show()