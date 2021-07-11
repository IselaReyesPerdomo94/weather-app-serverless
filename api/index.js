const fetch = require('cross-fetch');

const allowCors = fn => async(req, res) => {
    res.setHeader('Access-Control-Allow-Credentials', true)
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    )
    if (req.method === 'OPTIONS') {
        res.status(200).end()
        return
    }
    return await fn(req, res)
}

const fetchWeather = async(req, res) => {
    const response = await fetch('https://www.metaweather.com/api/location/2367105/');
    const data = await response.json();
    res.json(data);
}

module.exports = allowCors(fetchWeather);