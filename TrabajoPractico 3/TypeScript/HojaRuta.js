"use strict";
exports.__esModule = true;
exports.HojaRuta = void 0;
var HojaRuta = /** @class */ (function () {
    function HojaRuta() {
        this.fecha = new Date();
        this.numero = 0;
        this.detalles = [];
    }
    HojaRuta.prototype.calcularTotalKilometros = function () {
        var totalKilometros = 0;
        if (!this.detalles)
            this.detalles = [];
        /*for(let i:number = 0; i < this.detalles.length; i++){
            totalKilometros += this.detalles[i].kmRegreso - this.detalles[i].kmSalida;
        }*/
        this.detalles.forEach(function (detalle) { return (totalKilometros += (detalle.kmRegreso - detalle.kmSalida)); });
        return totalKilometros;
    };
    return HojaRuta;
}());
exports.HojaRuta = HojaRuta;
