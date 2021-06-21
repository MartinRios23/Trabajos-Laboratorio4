import React, { Component } from 'react'
import camion from '../../assets/img/camion.png'

export default class Productos extends Component {
    format = (num) => {
        let formater =  new Intl.NumberFormat('es-AR' , {
          style : 'currency',
          currency : 'ARG',
        })
        return formater.format((num))
      }
    render() {

        
        return (
            <div className="container mt-5">
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-2">
                            <a href={`/detalle/${this.props.id}`}>
                                <img className="container" src={require(`../../assets/img/${this.props.imagen}`).default} alt="Instrumento"/>
                            </a>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{this.props.nombre}</h5>
                                <p className="card-text">{this.format(this.props.precio)}</p>
                                <p className="card-text"><span >{this.props.costoEnvio === "G" ? <span><img src={camion} alt="camion"/> <span className="pt-1">"Envió gratis a todo el país"</span> </span>  : `Costo de Envio interior de Argentina $ ${this.props.costoEnvio}`}</span></p>
                                <p className="card-text">{this.props.cantidadVendida} Productos Vendidos</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
