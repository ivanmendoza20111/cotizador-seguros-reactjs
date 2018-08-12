import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';
import Resumen from './Resumen';
import Resultado from './Resultado';
import {obtenerDiferenciaAnio, calcularMarca, obtenerPlan} from '../helper';

class App extends Component {

  state = {
    resultado : '',
    datos : {}
  }

  cotizarSeguro = (datos) => {
    const { marca,year,plan } = datos;

    //Agregar que la base de cada seguro es de 2000
    let resultado = 2000;

    //Obtener la diferencia de años 
    const diferencia = obtenerDiferenciaAnio(year);

    //Por cada año restar 3%
    resultado -= ((diferencia * 3) * resultado)/100;

    //Americano 15% Asitatio 5% Europeo 30% de incremento al valor actual
    resultado = calcularMarca(marca) * resultado;

    // el plan, del auto basico incrementa 20% y el plan completo incrementa 50%
    let incrementoPlan =  obtenerPlan(plan);

    //dependiendo del plan incrementado
    resultado = parseFloat(incrementoPlan * resultado).toFixed(2);
    
    this.setState({
      resultado:resultado,
      datos:datos
    });

  }

  render() {
    return (
      <div className="contenedor">
        <Header titulo="Cotizador de Seguros de Auto" />

        <div className="contenedor-formulario">
          <Formulario cotizarSeguro={this.cotizarSeguro} />
          <Resumen datos={this.state.datos}/>
          <Resultado resultado={this.state.resultado} />
        </div>
      </div>
    );
  }
}

export default App;
