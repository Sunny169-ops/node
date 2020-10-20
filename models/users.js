const mongoose = require('mongoose')

let userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    firstname:String,
    lastname:String,
    email:String
})

module.exports = mongoose.model('users', userSchema)