const productModel= require("../models/productModel.js");

const createProduct= async function (req, res) {
  var product= req.body
  let savedData= await productModel.create(product)
  res.send({msg: savedData})    
  }









  module.exports.createProduct = createProduct;
