const path = require ('path');
const morgan = require('morgan');
const express = require('express');
const mongoose = require('mongoose')
const app = express();

//conectado al a base de datos
mongoose.connect("mongodb://localhost/UTN")
.then(db => console.log('DB Conectada'))
.catch(err => console.log(err))

//importando rutas
const indexRoutes = require('./routes/index');

//configuraciones
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

//rutas
app.use('/', indexRoutes);

//iniciando el servidor
app.listen(app.get('port'),() =>{
    console.log(`Servidor en puerto ${app.get('port')}`)
}
);  