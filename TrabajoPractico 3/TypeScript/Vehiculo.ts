import { HojaRuta } from "./HojaRuta";

export class Vehiculo {
  patente: string;
  marca: string;
  modelo: string;
  hojasRuta: HojaRuta[];

  constructor() {
    this.patente = "";
    this.marca = "";
    this.modelo = "";
    this.hojasRuta = [];
  }

  calcularTotalKilometrosRecorridos(fechaDesde: Date,fechaHasta: Date): number {
    if (!this.hojasRuta) this.hojasRuta = [];

    let totalKmVehiculo: number = 0;
    for(let i:number = 0; i < this.hojasRuta.length; i++){
      if (this.hojasRuta[i].fecha.getTime() >= fechaDesde.getTime() 
                  && this.hojasRuta[i].fecha.getTime() <= fechaHasta.getTime()) {
            totalKmVehiculo += this.hojasRuta[i].calcularTotalKilometros();
        }
    }
    this.hojasRuta.forEach((hojaRuta) => {
        
    });

    return totalKmVehiculo;
  }
}
