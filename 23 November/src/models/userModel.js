const mongoose= require('mongoose')

const myUserSchema=new mongoose.Schema({
    
    name: String,
	mobile:{type:Number, required:true, unique:true},
	email:{type:String, required:true},
	password:{type:String, required:true},
	isDeleted:{type:Boolean, default:false}

}, {timestamps: true} )


module.exports = mongoose.model( 'myUser',myUserSchema )
