const KEY = 'cfc75178310d2d48b0c5762047c2026c'

const getData = async (city) => {
    const base = 'https://api.openweathermap.org/data/2.5/weather'
    const query = `?q=${city}&units=metric&appid=${KEY}`
    loader(true)
    const result = await fetch(base + query)
    const data = await result.json()
    loader(false)

    return data
}
