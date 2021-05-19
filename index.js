//Queremos SI o SI que la pagina este cargada. 
//window.addEventListener('DOMContentLoaded', () => {




const url_API = 'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0'

const fetchData = async () => {
    try { // Por si tirara error
        const res = await fetch(url_API)
        const data = await res.json()
        // Obtenemos nombre de todos los pokemons
        const arrayNombres = data.results.map(pokemon => pokemon.name)
        console.log(arrayNombres)
        const arrayURLs = data.results.map(pokemon => pokemon.url)
        console.log(arrayURLs)
    } catch (error) {
        console.log(error)
    }
}

fetchData()
