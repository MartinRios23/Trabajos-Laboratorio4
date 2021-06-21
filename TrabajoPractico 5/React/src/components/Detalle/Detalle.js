import React, { Component, Fragment } from 'react'
import { instrumentos } from '../../data/instrumentos.json'
import './detalle.css'
import camion from '../../assets/img/camion.png'

export default class Detalle extends Component {

    constructor(){
        super();
        this.state = {
            instrumentos
        }
    }

    format = (num) => {
        let formater =  new Intl.NumberFormat('es-AR' , {
          style : 'currency',
          currency : 'ARG',
        })
        return formater.format((num))
    }

    render() {
        
       
        
        const parametroId = this.props.match.params.id;
        const instrumentoSeleccionado = instrumentos.filter(instrumento => instrumento.id === parametroId);
        console.log(instrumentoSeleccionado[0].instrumento)

        return (
            <Fragment>
                <div className="detalle">
                    <div className="card  izquierda">
                        <img src={require(`../../assets/img/${instrumentoSeleccionado[0].imagen}`).default} alt="Instrumento"/>
                        <div className="card-body">
                            <h5 className="card-title">Descripcion</h5>
                            <p className="card-text">{instrumentoSeleccionado[0].descripcion}</p>
                        </div>
                        
                    </div>
                    <div className="card  derecha">
                        <div className="card-body">
                            <p className="card-title">{instrumentoSeleccionado[0].cantidadVendida} vendidos</p>
                            <h5 className="card-title">{instrumentoSeleccionado[0].instrumento}</h5>
                            <p className="card-text">{this.format(instrumentoSeleccionado[0].precio)}</p>
                            <p className="card-text">Marca:  {instrumentoSeleccionado[0].marca}</p>
                            <p className="card-text">Modelo:  {instrumentoSeleccionado[0].modelo}</p>
                            <p className="card-text"><span >{instrumentoSeleccionado[0].costoEnvio === "G" ? <span><img src={camion} alt="camion"/> <span className="pt-1">Envió gratis a todo el país</span> </span>  : `Costo de Envio interior de Argentina $ ${instrumentoSeleccionado[0].costoEnvio}`}</span></p>
                            <a href="#" className="btn btn-outline-primary">Agregar al Carrito</a>
                        </div>
                        
                    </div>

                </div>
               
            </Fragment>
        )
    }
}
