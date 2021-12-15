export const getDatos = async () =>{

    const apiKey = "jo6606zMPz4IST0xR38SSY0PuvkD2Md0"

    const peticion = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
    const datos = await peticion.json()

    return datos
}


