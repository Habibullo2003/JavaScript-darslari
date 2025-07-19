const API = "https://jsonplaceholder.typicode.com/todos/"

//  async & await

const getNewData = async (resource) => {
    const request = await fetch(resource)
    
    if(request.status != 200) {
        throw new Error('Qandaydir xatolik yuz berdi!')
    }

    const data = await request.json()
    return data
}

getNewData(API)
    .then((data) => {
        console.log(data)
    })
    .catch((err) => {
        console.log(err)
    })