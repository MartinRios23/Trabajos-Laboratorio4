import React, { Component, Fragment } from 'react'
import Productos from '../Productos/Productos'
import { instrumentos } from '../../data/instrumentos.json'

export default class Home extends Component {
    
    constructor() {
        super();
        this.state = {
            instrumentos
        }
    }

    render() {

        const instrumentos = this.state.instrumentos.map((instrumento, i) => {
            return <Productos key={instrumento.id} id={instrumento.id} nombre = {instrumento.instrumento} marca={instrumento.marca} modelo={instrumento.modelo} imagen={instrumento.imagen} precio={instrumento.precio} costoEnvio={instrumento.costoEnvio} cantidadVendida={instrumento.cantidadVendida} desc={instrumento.descripcion} />; 
        })


        return (
            <Fragment>

                {instrumentos}
            </Fragment>
        )
    }
}
