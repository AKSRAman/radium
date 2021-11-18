const PublisherModel= require("../models/publisherModel.js")
const mongoose= require("mongoose")

const createPublisher= async function (req, res) {
   var myPublisher= req.body
   let savedData= await PublisherModel.create(myPublisher)
   res.send({msg: savedData})    
   }

module.exports.createPublisher= createPublisher