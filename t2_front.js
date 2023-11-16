const axios = require("axios"); // MANIPULAÇÃO EM ALTO NIVEL

const appid = "3773a92b669f9e349ae70807bde613aa";
const q = "Sao Paulo";
const units = "metric";
const lang = "pt_br";
const cnt = "10"; // ser utilizado dentro da string de conexao, por isso coloca o numero em forma de string

const url = `http://api.openweathermap.org/geo/1.0/direct?q=${q}&appid=${appid}` // concatena (&) operador de interpolação ($)

axios
    .get(url)
    .then(res => {
        console.log(res)
        return res.data
    })
    .then(res => {
        console.log('count: ' + res.cnt)
        return res.list
    })
    .then(res => {
        //console.log('lista: \n' + res)
        for (let prev of res){
            console.log(`
                ${new Date(prev.dt * 1000).toLocaleString()},
                ${'minima: ' + prev.main.temp_min}\u00B0C,
                ${'maxima: ' + prev.main.temp_max}\u00B0C,
                ${'latitude: ' + lat},
                ${'longitude: ' + lon}
            `)
        }
        return res;
    })
    .then (res => {
        const sub = res.filter(r => r.main.feels_like > 20);
        console.log(sub.length + " previsões passaram de 20\u00B0C")
    })