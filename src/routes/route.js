const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel")

const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const authorController= require("../controllers/authorController")
const Book2Controller= require("../controllers/Book2Controller")

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});
//set 1
router.post('/createUser',  UserController.createUser  );
router.get('/getAllUsers',  UserController.getUsersData  );

//set2
router.post('/createBook',  BookController.createBook  );
router.get('/getAllBooks',  BookController.getBooksData  );
router.post('/getBookYear',  BookController.YearDetail );
router.post('/getSpecificDetails',  BookController.SpecificDetail );
router.get('/getPriceDetails',  BookController.PriceDetail );
router.get('/getRandomDetails',  BookController.RandomDetail );

//set3
router.post('/createAuthor',  authorController.createAuthor  );
router.post('/createBook2',  Book2Controller.createBook2  );
router.get('/getChetanBhagat',  authorController.ChetanBhagat  );
router.get('/getPriceUpdate',  Book2Controller.PriceUpdate  );
router.get('/getFindByName',  Book2Controller.FindByName  );

module.exports = router;