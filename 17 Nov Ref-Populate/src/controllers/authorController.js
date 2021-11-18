const authorModel= require("../models/authorModel.js")
const mongoose= require("mongoose")

const createAuthor= async function (req, res) {
   var myAuthor= req.body
   let savedData= await authorModel.create(myAuthor)
   res.send({msg: savedData})    
   }

const getAuthors= async function (req, res) {
    let allAuthors= await authorModel.find()
    res.send({data: allAuthors})
}

module.exports.createAuthor= createAuthor
module.exports.getAuthors= getAuthors