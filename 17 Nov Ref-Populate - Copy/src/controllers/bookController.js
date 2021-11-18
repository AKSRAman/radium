const bookModel = require("../models/bookModel.js");
const authorModel = require("../models/authorModel.js");
const mongoose = require("mongoose");
const publisherModel = require("../models/publisherModel.js");


const createBook = async function (req, res) {
  let myBook = req.body;
  let authorId = req.body.author;
  let publisherId = req.body.publisher;
  let authorFromRequest = await authorModel.findById(authorId)
  let publisherFromRequest = await publisherModel.findById(publisherId)
  if (authorFromRequest && publisherFromRequest) {
    let savedBook = await bookModel.create(myBook);
    res.send({ msg: savedBook });
  } else {
    res.send('Either the Author Id or the Publisher Id, provided is not valid.')
  }
};

const getBooks = async function (req, res) {
  let allBooks = await bookModel.find().populate('author',{author_name:1,age:1}).populate('publisher',{name:1,headQuarter:1});
  

  res.send({ msg: allBooks });
};

module.exports.createBook = createBook;
module.exports.getBooks = getBooks;