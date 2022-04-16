const mongoose = require("mongoose");
const express = require("express");
const peliculaSchema = require("../models/pelicula");
const router = express.Router();

router.post("/peliculas", (req, res) => {
    const pelicula = peliculaSchema(req.body);

    pelicula
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));

});



router.get("/peliculas", (req, res) => {

    peliculaSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));

});


router.get("/peliculas/:id", (req, res) => {
    const { id } = req.params;
    peliculaSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));

});


router.put("/peliculas/:id", (req, res) => {
    const { id } = req.params;
    const { nombre, descripcion, anio, duracion, genero, director, elenco } =
    req.body;
    peliculaSchema
        .updateOne({ _id: id }, {
            $set: { nombre, descripcion, anio, duracion, genero, director, elenco }
        })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
});


router.delete("/peliculas/:id", (req, res) => {
    const { id } = req.params;
    peliculaSchema
        .remove({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})


module.exports = router;