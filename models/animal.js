const mongoose = require("mongoose");

const animalSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    age: {
        type: Number,
        required: true
    },

    kind: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Animal', animalSchema);