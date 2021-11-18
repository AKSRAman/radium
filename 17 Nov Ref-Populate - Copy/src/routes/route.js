const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const BookController= require("../controllers/bookController")
const publisherController= require("../controllers/publisherController")

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

// Authors API
router.post('/authors',  authorController.createAuthor  );
router.get('/authors',  authorController.getAuthors  );

// Books API
router.post('/books',  BookController.createBook  );
router.get('/books',  BookController.getBooks  );

// Publisher API
router.post('/publisher',  publisherController.createPublisher);

module.exports = router;