const mongoose = require('mongoose');
const schema = mongoose.Schema;

const empleadosSchema = new schema({

    Legajo: String,

    Apellido: String,

    Nombre: String,

    DNI: String,

    Sector: String,

    FechaIngreso: Date,
    
    activo : {
        type: Boolean,
        default: false
    }


});

module.exports = mongoose.model('Empleados', empleadosSchema);