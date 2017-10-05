//This model requires mongoose v4.10.8 to work. 
//Verify your mongoose instilation is version 4.10.8
const
    mongoose = require('mongoose')

    appSchema = new mongoose.Schema({
        name: {type: String, required: true},
        version: {type: String},
        author: {type: String},
        price: {type: Number, default: 0},
        descriptionL: {type: String}
    }, {timestamps: true})

//Export the model
module.exports = mongoose.model('App', appSchema)