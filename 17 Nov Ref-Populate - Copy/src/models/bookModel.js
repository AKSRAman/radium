const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema({

    name: String,
    author: {
        type: ObjectId,
        ref: 'myAuthor',
        unique: true
    },

    publisher: {
        type: ObjectId,
        ref: 'myPublisher',
        unique: true
    },

    price: Number,
    ratings: Number,

}, { timestamps: true })

module.exports = mongoose.model('myBook', bookSchema)

