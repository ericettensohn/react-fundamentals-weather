import axios from 'axios';
import keys from './keys';



const Api = {
  getForecast(city) {
    console.log(city)
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&type=accurate&APPID=${keys.key}`
    console.log(url)
    return axios.get(url)
      .then(function(response) {
        return response;
      });
  }
}



export default Api;