import { Detalle } from "./Detalle";

export class HojaRuta {
  fecha: Date;
  numero: number;
  detalles: Detalle[];

  constructor() {
    this.fecha = new Date();
    this.numero = 0;
    this.detalles = [];
  }

  calcularTotalKilometros(): number {
    let totalKilometros: number = 0;

    if (!this.detalles) this.detalles = [];
    /*for(let i:number = 0; i < this.detalles.length; i++){
        totalKilometros += this.detalles[i].kmRegreso - this.detalles[i].kmSalida;
    }*/
    this.detalles.forEach(
      (detalle) => (totalKilometros += (detalle.kmRegreso - detalle.kmSalida))
    );

    return totalKilometros;
  }
}
