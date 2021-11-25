const axios = require("axios");

// old code - assignment code is in bottom
const getStatesList = async function (req, res) {
    try {
        let options = {
            method: "get",
            url: "https://cdn-api.co-vin.in/api/v2/admin/location/states",
        };
        const cowinStates = await axios(options);

        console.log("WORKING");
        let states = cowinStates.data;
        res.status(200).send({ msg: "Successfully fetched data", data: states });
    }
    catch (err) {
        console.log(err.message);
        res.status(500).send({ msg: "Some error occured" });
    }
};


const getDistrictsList = async function (req, res) {
    try {
        let id = req.params.stateId
        console.log(" state: ", id)
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}` //plz take 5 mins to revise template literals here
        }
        let response = await axios(options)

        let districts = response.data

        console.log(response.data)
        res.status(200).send({ msg: "Success", data: districts })
    }
    catch (err) {
        console.log(err.message)
        res.status(500).send({ msg: "Something went wrong" })
    }
}

const getByPin = async function (req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let response = await axios(options)

        let centers = response.data
        console.log(centers)
        res.status(200).send({ msg: "Success", data: centers })
    }
    catch (err) {
        console.log(err.message)
        res.status(500).send({ msg: "Something went wrong" })
    }
}


const getOtp = async function (req, res) {
    try {
        let options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: { "mobile": req.body.mobile }
        }
        let response = await axios(options)

        let id = response.data
        res.status(200).send({ msg: "Success", data: id })
    }
    catch (err) {
        console.log(err.message)
        res.status(500).send({ msg: "Something went wrong" })
    }
}
                        //Assignments of Axios 25 November//
//------------------------------------------------------------------------------------------//
// 25 November Assignment Problem-1
const getWeatherDetails = async function (req, res) {
    try {
        let city = req.query.city
        let API = req.query.APPID
        let options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API}`
        }
        let response = await axios(options)
        let myWeather = response.data
        console.log("Your Weather Details", myWeather)
        res.status(200).send({ msg: "Your Requested Weather Details", data: myWeather })
    }
    catch (err) {
        console.log(err.message)
        res.status(500).send({ msg: "Something went wrong" })
    }
}


// 25 November Assignment Problem-2
const getCityTemprature = async function (req, res) {
    try {
        let city = req.query.city
        let API = req.query.APPID
        let options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API}`
        }
        let response = await axios(options)
        let myWeather = response.data.main.temp
        console.log("Temprature of London : ", myWeather)
        res.status(200).send({ city, data: myWeather })
    }
    catch (err) {
        console.log(err.message)
        res.status(500).send({ msg: "Something went wrong" })
    }
}


// 25 November Assignment Problem-3
const getWeatherCity = async function (req, res) {
    try {
        let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let newCityArray = []

        for (i = 0; i < cities.length; i++) {

            let obj = { city: cities[i] }
            let response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=722ed44a372841ee9dfc3b54cf6e9b61`)

            console.log(response.data.main.temp)
            obj.temp = response.data.main.temp
            newCityArray.push(obj)
        }
        let sortedTemp = newCityArray.sort(function (a, b) { return a.temp - b.temp })
        console.log(sortedTemp)
        res.status(200).send({ status: true, data: sortedTemp })
    }

    catch (error) {
        console.log(error)
        res.status(500).send({ status: false, msg: "server error" })
    }
}


// 25 November My Experiment for Conversion of Kelvin to Celsius
const myExperiment = async function (req, res) {
    try {
        let cities = ["Chandigarh", "Hyderabad", "Jaipur", "Ahmedabad", "Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow", "Tokyo", "New York", "Barcelona", "Sydney", "Dubai", "Toronto", "Kuwait", "Yakutsk", "Oymyakon"]
        let newCityArray = []

        for (i = 0; i < cities.length; i++) {

            let obj = { City: cities[i] }
            let response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=722ed44a372841ee9dfc3b54cf6e9b61`)

            let newTemp = response.data.main.temp - 273.15
            let temp1 = Math.floor(newTemp) + " " + "Degree Celsius"
            console.log(temp1)
            obj.Temprature = temp1 // we already create (Temprature : temp1) in object 
            newCityArray.push(obj) // and there the whole object pushed to newCityArray
        }
        let sortedTemp = newCityArray.sort(function (a, b) { return a.Temprature - b.Temprature})
      
        console.log(sortedTemp)
        res.status(200).send({ Message: "Your Weather Details Are Here", data: sortedTemp })
    }
    catch (error) {
        console.log(error)
        res.status(500).send({ status: false, msg: "server error" })
    }
}

//Cowin exports
module.exports.getStatesList = getStatesList;
module.exports.getDistrictsList = getDistrictsList;
module.exports.getByPin = getByPin;
module.exports.getOtp = getOtp;
//Weather exports
module.exports.getWeatherDetails = getWeatherDetails;
module.exports.getCityTemprature = getCityTemprature;
module.exports.getWeatherCity = getWeatherCity;
module.exports.myExperiment = myExperiment;