var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?';
const KEY = 'appid=2c1efc939ccb1870b6512505b02cb460'
const UNITS = 'units=imperial';
//2c1efc939ccb1870b6512505b02cb460
module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl =`${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}&${UNITS}&${KEY}`;
    console.log(requestUrl);
    return axios.get(requestUrl).then(function (res){

      if (res.data.cod && res.data.message){
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function (err){
      debugger;
      throw new Error(err.response.data.message);
    });
  }
}
