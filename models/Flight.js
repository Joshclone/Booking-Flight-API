// exports.exampleModel = [];

const mongoose = require("mongoose");

const flightSchema =  mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    time: String,

    price: {
        type: Number,
        required: true
    },

   
    date: { type: String, default: Date.now },
  
});

module.exports = mongoose.model('Flight', flightSchema);
