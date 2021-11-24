const orderModel = require("../models/orderModel.js")
const userModel = require("../models/userModel.js")
const productModel = require("../models/productModel.js")

const createOrder = async function (req, res) {
   let userId = req.body.userId
   let productId = req.body.productId

   let appTypeFree = req.isFreeAppUser
   let orderAmount
   let orderDate = Date()

   let user = await userModel.findById(userId)
   if(!user) {
       return res.send({message: "User doesn't exist. Please provide a valid userId"})
   }

   //product validation
   let product  = await productModel.findById(productId)
   if(!product) {
       return res.send({message: "Product doesn't exist. Please provide a valid productId"})
   }

   //user balance validation
   if(!appTypeFree && user.balance < product.price) {
       return res.send({message: "User doesn't have enough balance to purchase the product"})
   }

   if(appTypeFree) {
       orderAmount = 0
   } else {
       //paid app
       orderAmount = product.price
   }

   let orderDetails = {
       userId: userId,
       productId: productId,
       amount: orderAmount,
       isFreeAppUser: appTypeFree, 
       date: orderDate
   }

   let orderCreated = await orderModel.create(orderDetails)
   
  if(!appTypeFree) {
      await userModel.findOneAndUpdate({_id: userId}, {balance: user.balance - product.price})
  }

  res.send({data: orderCreated})

}



module.exports.createOrder = createOrder;