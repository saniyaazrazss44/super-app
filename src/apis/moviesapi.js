import axios from "axios";

export const fetchData = async () => {
    const options = {
        method: 'GET',
        url: 'https://imdb-top-100-movies.p.rapidapi.com/top32',
        headers: {
            'X-RapidAPI-Key': '0a875fac41msh4513b6c9bb5eebfp154b02jsna1bb7be2af42',
            'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        console.log(response.data);
        return response.data
    } catch (error) {
        console.error(error);
    }
}