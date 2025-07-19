//  Create & Remove element 

const ul = document.querySelector('ul')

// ul.remove()

const button = document.querySelector('button')

button.addEventListener('click', () => {
    // ul.innerHTML += '<li>Something new text 🆕</li>'

    // js da element yaratish
    const li = document.createElement('li')
    li.textContent = 'Something new text 🆕'
    // li ni boshidan qo'shish
    ul.prepend(li)
    // li ni oxiridan qo'shish
    // ul.appendChild(li)
})

const items = document.querySelectorAll('li')

items.forEach((item) =>{
    item.addEventListener('click', (e) => {
        // e.target.remove()
        console.log('Clicked li')
        // e.stopPropagation()
    })
})

ul.addEventListener('click', (e) => {
    if(e.target.nodeName == 'LI'){
        e.target.remove()
    }
})