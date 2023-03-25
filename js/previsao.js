const axios = require('axios');

const appid = process.env.APPID;
const q = "Itu";

const cnt = 5;

const units = "metric";

const lang = "pt_br"

const urlBase = "api.openweathermap.org/data/2.5/forecast";

const url = `${urlBase}?q=${q}&appid=${appid}&cnt=${cnt}&units=${units}&lang=${lang}`


console.log(url)

axios.get(url).then((res) => {
    console.log(res.data);
})