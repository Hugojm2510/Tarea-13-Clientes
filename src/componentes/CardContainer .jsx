// en versiones mas nuevas no es necesario poner React, pero es una buena practica
// useState, es un hook que permite manejar el estado dentro de un componente funcional
import { useState } from "react";
import PropTypes from "prop-types";

const CardContainer = ({ children }) => {
    /* 
    layout, donde guarda el valor del estado
    setLayout, cambia el valor de Layout
    useState(row), es la forma predeterminada en la que se muestran las tarjetas, en filas
    */
     const [layout, setLayout] = useState('row');        

    // cuando el usuario seleccione, recibe el evento event como parametro
    
    const cambiarPosicion = (event) => {
    // (...), el valor seleccionado por el usuario
    // ...(...), actualiza el estado de layout, el componente se renderiza y las tarjetas se acomoden 
    setLayout(event.target.value);
    }

    return (
        <div>
            {/* elegir opcion */}
            <select value={layout} onChange={cambiarPosicion}>
                <option value="row">Fila</option>
                <option value="column">Columna</option>
            </select>

            {/* contenedor de las tarjetas con estilo dinamico */}
            <div
                style={{
                    display: 'flex',
                    flexDirection: layout,
                    flexWrap: 'wrap',
                    gap: '16px',
                }}
            >
            {children}
            </div>
        </div>
    );
};

CardContainer.propTypes = {
    children: PropTypes.node,
};

export default CardContainer;

