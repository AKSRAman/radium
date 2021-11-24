const express = require('express');
const router = express.Router();

const userController= require("../controllers/userController")

router.get('/test-me', function (req, res) {
    res.send('Testing - My first ever api!')
});


router.post('/postUser', userController.createUser);
router.post('/postLogin', userController.login);
router.get('/users/:userId', userController.getDetails);
router.put('/users/:userId', userController.updateDetails);



module.exports = router;