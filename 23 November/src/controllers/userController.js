const userModel = require("../models/userModel.js")
const jwt = require('jsonwebtoken')

// 1st problem - create user in database
const createUser = async function (req, res) {
   let user = req.body
   let savedData = await userModel.create(user)
   res.send({ msg: savedData })
}

// 2nd problem - do login with valid credentials
const login = async function (req, res) {
   userName = req.body.name
   userPassword = req.body.password
   let user = await userModel.findOne({ name: userName, password: userPassword, isDeleted: false })
   if (user) {
      const generatedToken = jwt.sign({ userId: user._id }, "AKSRAman")
      res.send({ status: true, data: user._id, token: generatedToken })
   } else {
      res.send({ status: false, message: 'Oops...Invalid credentials' })
   }
}

//3rd problem - get user details with authentication
const getDetails = async function (req, res) {
   let token = req.headers['x-auth-token']
   if (!token) {
      return res.send({ status: false, message: 'Sorry , No authentication token present' })
   } else {
      let decodedToken = jwt.verify(token, 'AKSRAman')
      let decodedID = req.params.userId
      if (decodedToken.userId == decodedID) {
         let userDetails = await userModel.findOne({ _id: req.params.userId, isDeleted: false })
         if (userDetails) {
            res.send({ status: true, data: userDetails })
         } else {
            res.send({ status: false, message: 'User not found' })
         }
      } else {
         res.send({ status: false, message: 'Token not valid' })
      }
   }
}

// 4th problem - put request to update user's details
const updateDetails = async function (req, res) {
   let token = req.headers['x-auth-token']
   if (!token) {
      return res.send({ status: false, message: 'Sorry , No authentication token present' })
   } else {
      let decodedToken = jwt.verify(token, 'AKSRAman')
      let decodedID = req.params.userId
      if (decodedToken.userId == decodedID) {
         let newEmail = req.body.email
         let userDetails = await userModel.findOneAndUpdate({ _id: req.params.userId, isDeleted: false }, { email: newEmail }, { new: true })
         if (userDetails) {
            res.send({ status: true, data: userDetails })
         } else {
            res.send({ status: false, message: 'User not found' })
         }
      } else {
         res.send({ status: false, message: 'Token not valid' })
      }
   }
}

module.exports.createUser = createUser
module.exports.login = login
module.exports.getDetails = getDetails
module.exports.updateDetails = updateDetails