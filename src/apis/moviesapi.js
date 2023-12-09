import axios from "axios";

export const fetchData = async () => {
    try {
        const fetchUrl = 'https://api.themoviedb.org/3/trending/all/week?api_key=c16a27c57b5f312490e1496ac0d7d1da'
        const moviesFetch = await axios.get(fetchUrl)
        return moviesFetch
    } catch (error) {
        console.log(error)
    }
}