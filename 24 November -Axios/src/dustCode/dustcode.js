//const axios = require("axios");



// const myExperiment = async function (req, res) {
//     try {
//         let City = req.query.city
//         let API = req.query.APPID
//         let options = {
//             method: "get",
//             url:`http://api.openweathermap.org/data/2.5/weather?q=${City}&APPID=${API}`
//         }
//         let response = await axios(options)
//         let myWeather = response.data.main.temp
//         console.log("Temprature: ", myWeather)
//         res.status(200).send({City, Temprature: myWeather })
//     }
//     catch (err) {
//         console.log(err.message)
//         res.status(500).send({ msg: "Something went wrong" })
//     }
// }