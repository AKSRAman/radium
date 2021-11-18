const AuthorModel= require("../models/authorModel.js")
const mongoose= require("mongoose")

// 16 November assignment Problem 1(A)
const createAuthor = async function (req, res) {
    const Author= req.body
    let savedAuthor= await AuthorModel.create(Author)
        res.send({msg: savedAuthor})
         }  
// 16 November assignment Problem 2
const ChetanBhagat= async function (req, res) {
    let ChetanBhagatBook= await AuthorModel.find( { AuthorName: "Chetan Bhagat" }).select( { BookName: 1 } ) 
    res.send({msg: ChetanBhagatBook})
     }  

module.exports.createAuthor= createAuthor
module.exports.ChetanBhagat= ChetanBhagat
