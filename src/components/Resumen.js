import React, { Component } from 'react';
import { primeraMayuscula } from '../helper';

class Resumen extends Component{

    mostrarResumen = ({marca,year,plan}) => {

        if(!marca || !year || !plan)
            return null;

        return(
            <div className="resumen">
                <h2>Resumen de Cotización</h2>
                <li>Marca: {primeraMayuscula(marca)}</li>
                <li>Plan: {primeraMayuscula(plan)}</li>
                <li>Año del auto: {year}</li>
            </div>
        )
    }

    render(){
        return(
            <div>
                {this.mostrarResumen(this.props.datos)}
            </div>
        )
    }
}

export default Resumen;
