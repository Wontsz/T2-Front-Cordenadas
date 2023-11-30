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
        for (let coord of res){
            console.log(`
                ${'Local: ' + coord.name},
                ${'Latitude: ' + coord.lat},
                ${'Longitude: '+ coord.lon},   
            `)
        }
        
        const lat = coord.lat
        const lon = coord.lon
        const url2 = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appid}&lang=${lang}`

        axios
        .get(url2)
        .then(res => {
            return res.data
        })
        .then(res => {
            console.log(`
            ${'Sensaçao Térmica: ' + (res.main.feels_like - 273.15).toFixed(2)}\u00B0C
            ${'Descriçao: ' + res.weather[0].description}
            `)
        })
    })
        
