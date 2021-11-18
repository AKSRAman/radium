const bookModel = require("../models/bookModel.js");
const authorModel= require("../models/authorModel.js");
const mongoose = require("mongoose");

const createBook = async function (req, res) {
   let myBook = req.body;
   let authorId = req.body.author;
   let authorFromRequest = await authorModel.findById(authorId)
   if(authorFromRequest){
    let savedBook = await bookModel.create(myBook);
    res.send({ msg: savedBook });
   } else {
     res.send('The Author Id provided is not valid.')
      }
   };

const getBooks = async function (req, res) {
  let allBooks = await bookModel.find().populate('author');
  res.send({ msg: allBooks });
};

module.exports.createBook = createBook;
module.exports.getBooks = getBooks;