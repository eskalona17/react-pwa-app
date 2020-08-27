import axios from 'axios';

const URL = 'http://api.openweathermap.org/data/2.5/weather';
const API_KEY = '2c24849a3d86fc94174c68ec068e21e5'

export const fetchWeather = async (query) =>{
    const{ data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY
        }
    });

    return data
}
