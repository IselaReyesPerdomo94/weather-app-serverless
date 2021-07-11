const fetch = require('cross-fetch');

const fetchWeather = async(req, res) => {
    const response = await fetch('https://www.metaweather.com/api/location/2367105/');
    const data = await response.json();
    res.json(data);
}

module.exports = fetchWeather;