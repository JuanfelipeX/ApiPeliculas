const mongoose = require("mongoose");

const peliculaSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },

    descripcion: {
        type: String,
        required: true,
    },

    anio: {
        type: Number,
        required: true,
    },

    duracion: {
        type: Number,
        required: true,
    },

    genero: {
        type: String,
        required: true,
    },

    director: {
        type: String,
        required: true,
    },

    elenco: {
        type: Array,
        required: true,
    }
});

module.exports = mongoose.model('pelicula', peliculaSchema);