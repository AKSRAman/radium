const mongoose=require('mongoose')

const Book2Schema= new mongoose.Schema({

    AuthorID: {
        type: Number,
        required: true},
        Name: String,
       Price: Number,
      Rating: Number,
}, 

{timestamps: true} )

module.exports = mongoose.model( 'Book2', Book2Schema ) 