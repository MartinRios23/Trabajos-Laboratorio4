"use strict";
exports.__esModule = true;
exports.Vehiculo = void 0;
var Vehiculo = /** @class */ (function () {
    function Vehiculo() {
        this.patente = "";
        this.marca = "";
        this.modelo = "";
        this.hojasRuta = [];
    }
    Vehiculo.prototype.calcularTotalKilometrosRecorridos = function (fechaDesde, fechaHasta) {
        if (!this.hojasRuta)
            this.hojasRuta = [];
        var totalKmVehiculo;
        for (var i = 0; i < this.hojasRuta.length; i++) {
            if (this.hojasRuta[i].fecha.getTime() >= fechaDesde.getTime()
                && this.hojasRuta[i].fecha.getTime() <= fechaHasta.getTime()) {
                totalKmVehiculo += this.hojasRuta[i].calcularTotalKilometros();
            }
        }
        this.hojasRuta.forEach(function (hojaRuta) {
        });
        return totalKmVehiculo;
    };
    return Vehiculo;
}());
exports.Vehiculo = Vehiculo;
