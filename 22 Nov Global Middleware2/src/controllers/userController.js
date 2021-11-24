const userModel= require("../models/userModel.js")

const createUser= async function (req, res) {
   let user= req.body
   user.freeAppUser = req.isFreeAppUser
   let savedData= await userModel.create(user)
   res.send({msg: savedData})    
   }










   module.exports.createUser= createUser










// const getAuthors= async function (req, res) {
//     let allAuthors= await authorModel.find()
//     res.send({data: allAuthors})
// }


//module.exports.createUser= createUser
//module.exports.getAuthors= getAuthors