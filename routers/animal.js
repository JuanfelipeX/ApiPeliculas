const mongoose = require("mongoose");
const express = require("express");
const animalSchema = require("../models/animal");
const router = express.Router();

router.post("/animals", (req, res) => {
    const animal = animalSchema(req.body);

    animal
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));

});

module.exports = router;