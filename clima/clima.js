const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=ecdd759698d25f399fdf278bce0c6b1f`)

    return resp.data.main.temp;

}


module.exports = {

    getClima
}