const fetch = require('cross-fetch');
const allowCors = require('../utils/allowCors');

const fetchWeatherBoston = async(req, res) => {
    const response = await fetch('https://www.metaweather.com/api/location/2367105/');
    const data = await response.json();
    res.json(data);
}

module.exports = allowCors(fetchWeatherBoston);