const mongoose = require('mongoose')

const credentialSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const credentialModel = mongoose.model("credentials", credentialSchema)
module.exports = credentialModel