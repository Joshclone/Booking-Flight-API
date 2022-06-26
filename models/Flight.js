// exports.exampleModel = [];

const mongoose = require("mongoose");

const flightSchema =  mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    time: Number,

    price: {
        type: Number,
        required: true
    },

   
    date: { type: Date, default: Date.now },
  
});

module.exports = mongoose.model('Flight', flightSchema);