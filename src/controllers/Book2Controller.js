const Book2Model= require("../models/Book2Model.js")
const mongoose= require("mongoose")

// 16 November assignment Problem 1(B)
const createBook2 = async function (req, res) {
    const Book2= req.body
    let savedBook2= await Book2Model.create(Book2)
        res.send({msg: savedBook2})
         }  

// 16 November assignment Problem 3
const PriceUpdate= async function (req, res) {
    let PriceUpdateBook= await Book2Model.updateMany( { Name: "Two states" }, {Price: 100} );
        res.send({msg: PriceUpdateBook})
         }  

// 16 November assignment Problem 4
const FindByName= async function (req, res) {
    let FindName= await Book2Model.find( { sales: { $in: [50, 100,]   } } ).select( { Name: 1 } )
        res.send({msg: FindName})
         }  

module.exports.createBook2= createBook2
module.exports.PriceUpdate= PriceUpdate
module.exports.FindByName= FindByName
