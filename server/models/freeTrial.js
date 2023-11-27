const mongoose = require('mongoose')

const freeTrialSchema = new mongoose.Schema({
    fname: String,
    lname: String,
    email: String,
    phone: String
})

const freeTrialModel = mongoose.model("freeTrial", freeTrialSchema)
module.exports = freeTrialModel