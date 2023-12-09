import axios from 'axios';

export const getWeatherDetails = async () => {
    try {
        const fetchUrl = 'http://api.weatherapi.com/v1/current.json?key=b78b9a191eee43f793e171147232711&q=Delhi&aqi=no'
        const weatherDetails = await axios.get(fetchUrl)
        return weatherDetails
    }
    catch (error) {
        console.log(error)
    }
}
