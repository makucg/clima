import React from 'react';

const Clima = ({resultado}) => {

    //extrear valores
    const { name, main } = resultado;

    const kelvin = 273.15;

    if(!name) return null;

    return ( 
        <div className="card-panel white s12">
            <div className="blac-text">
                <h2>El clima de {name} es: </h2>
                <p className="temperatura">
                    { parseFloat(main.temp - kelvin, 10).toFixed(1) }<span>&#x2103;</span>
                </p>
                <p>Temperatura máxima:&nbsp;
                    { parseFloat(main.temp_max - kelvin, 10).toFixed(1) }<span>&#x2103;</span>
                </p>
                <p>Temperatura mínima:&nbsp;
                    { parseFloat(main.temp_min - kelvin, 10).toFixed(1) }<span>&#x2103;</span>
                </p>
            </div>
        </div>
     );
}
 
export default Clima;