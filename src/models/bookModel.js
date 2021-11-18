const mongoose=require('mongoose')

const bookSchema= new mongoose.Schema({

//String
//Number
// Boolean
// Array
// Object
// Date
// Buffer
// ObjectId

    bookName: {
        type: String,
        required: true
    },
    ISBN: {
        type: String,
        required: true,
        unique: true
    },
    author: String,

    tags: [ String ], //array of strings 

    year: {type:Number,
        default:2021},

    isPublished: {
        type: Boolean, //Boolean
        default: false
    },
    prices: {
        indianPrice: String,
        europeanPrice: String,
        usaPrice: String,
        nepalPrice: String,
        japanPrice: String,
        chinesePrice: String,
        sudanPrice: String
    },

    sales: {
        type: Number,
        default : 0
    },
    
    completionDate: Date

}, {timestamps: true} )

module.exports = mongoose.model( 'Book', bookSchema ) 

// Intro to Backend Engineering
// FunctionUp
// #Programming #backend #nodejs #bestBookEver #cool #lifeChanging