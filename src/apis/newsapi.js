import axios from "axios";

export const getNewsDetails = async () => {
    try {
        const fetchUrl = 'http://newsapi.org/v2/everything?q=News&apiKey=b10e9f73f06b438e809d50b6a891646d'
        const newsDetails = await axios.get(fetchUrl)
        return newsDetails
    } catch (error) {
        console.log(error)
    }
}