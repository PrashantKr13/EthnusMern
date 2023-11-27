const mongoose = require('mongoose')

const subscriberSchema = new mongoose.Schema({
    email: String,
})

const subscriberModel = mongoose.model("subscriber", subscriberSchema)
module.exports = subscriberModel