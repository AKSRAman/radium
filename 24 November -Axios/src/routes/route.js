const express = require('express');
const router = express.Router();

const userController= require("../controllers/userController")
const cowinController= require("../controllers/cowinController")

router.get('/test-me', function (req, res) {
    res.send('Testing - My first ever api!')
});

// 24 November
router.post('/postUser', userController.createUser);
router.post('/postLogin', userController.login);
router.get('/users/:userId', userController.getDetails);
router.put('/users/:userId', userController.updateDetails);

// 25 November
router.get("/cowin/states", cowinController.getStatesList)
router.get("/cowin/districts/:stateId", cowinController.getDistrictsList)
router.get("/cowin/centers", cowinController.getByPin)
router.post("/cowin/getOtp", cowinController.getOtp)

router.get("/getWeatherUpdate", cowinController.getWeatherDetails)
router.get("/getTempratureUpdate", cowinController.getCityTemprature)
router.get("/getMultipleWeather", cowinController.getWeatherCity)

// Experimental API
router.get("/getMyExperiment", cowinController.myExperiment)

module.exports = router;