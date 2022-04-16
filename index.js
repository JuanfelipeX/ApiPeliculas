const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const bodyParser = require('body-parser');
const peliculaRoutes = require("./routers/pelicula");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("connected to mongoDB Atlas"))
    .catch((error) => console.error(error));

app.use('/api', peliculaRoutes);
app.use(express.json());


/*
let usuario = {
    cancion: '',
    autor: '',
    anio: ''
};


let respuesta = {
    error: false,
    codigo: 200,
    mensaje: ''
};


app.get('/', function(req, res) {
    respuesta = {
        error: true,
        codigo: 200,
        mensaje: 'Punto de inicio'
    };
    res.send(respuesta);
});


app.get('/usuario', function(req, res) {
    respuesta = {
        error: false,
        codigo: 200,
        mensaje: ''
    };
    if (usuario.cancion === '' || usuario.autor === '' || usuario.anio === '') {
        respuesta = {
            error: true,
            codigo: 501,
            mensaje: 'El usuario no ha sido creado'
        };
    } else {
        respuesta = {
            error: false,
            codigo: 200,
            mensaje: 'respuesta del usuario',
            respuesta: usuario
        };
    }
    res.send(respuesta);
});


app.post('/usuario', function(req, res) {
    if (!req.body.cancion || !req.body.autor || !req.body.anio) {
        respuesta = {
            error: true,
            codigo: 502,
            mensaje: 'El campo nombre y apellido son requeridos'
        };
    } else {
        if (usuario.cancion !== '' || usuario.autor !== '' || usuario.autor !== '') {
            respuesta = {
                error: true,
                codigo: 503,
                mensaje: 'El usuario ya fue creado previamente'
            };
        } else {
            usuario = {
                cancion: req.body.nombre,
                autor: req.body.apellido,
                anio: req.body.anio
            };
            respuesta = {
                error: false,
                codigo: 200,
                mensaje: 'Usuario creado',
                respuesta: usuario
            };
        }
    }

    res.send(respuesta);
});

app.put('/usuario', function(req, res) {
    if (!req.body.nombre || !req.body.apellido) {
        respuesta = {
            error: true,
            codigo: 502,
            mensaje: 'El campo nombre y apellido son requeridos'
        };
    } else {
        if (usuario.nombre === '' || usuario.apellido === '') {
            respuesta = {
                error: true,
                codigo: 501,
                mensaje: 'El usuario no ha sido creado'
            };
        } else {
            usuario = {
                nombre: req.body.nombre,
                apellido: req.body.apellido
            };
            respuesta = {
                error: false,
                codigo: 200,
                mensaje: 'Usuario actualizado',
                respuesta: usuario
            };
        }
    }

    res.send(respuesta);
});


app.delete('/usuario', function(req, res) {
    if (usuario.nombre === '' || usuario.apellido === '') {
        respuesta = {
            error: true,
            codigo: 501,
            mensaje: 'El usuario no ha sido creado'
        };
    } else {
        respuesta = {
            error: false,
            codigo: 200,
            mensaje: 'Usuario eliminado'
        };
        usuario = {
            nombre: '',
            apellido: ''
        };
    }
    res.send(respuesta);
});


app.use(function(req, res, next) {
    respuesta = {
        error: true,
        codigo: 404,
        mensaje: 'URL no encontrada'
    };
    res.status(404).send(respuesta);
});

*/

app.listen(3000, () => {
    console.log("El servidor está inicializado en el puerto 3000");
});