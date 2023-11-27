const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String
})

const commentModel = mongoose.model("comments", commentSchema)
module.exports = commentModel