const express = require('express');
const router = express.Router();

const userController= require("../controllers/userController")
const productController= require("../controllers/productController")
const orderController= require("../controllers/orderController")
const globalMiddleware = require("../globalMiddleware/glbMiddleware")

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

// Authors API
router.post('/postUser',globalMiddleware.captureInfo, userController.createUser  );
//router.get('/authors',  authorController.getAuthors  );

// Books API
router.post('/postProduct',  productController.createProduct  );
//router.get('/books',  BookController.getBooks  );

// Order API
router.post('/postOrder',  orderController.createOrder  );



module.exports = router;