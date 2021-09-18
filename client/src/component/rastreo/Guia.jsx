import React from 'react'

function Guia(props) {
    return (
        <div>
            <h3>Codigo_remision: {props.codigo_remision}</h3>
            <h3>Dir_destinatario: {props.dir_destinatario}</h3>
            <h3>Dir_remite: {props.dir_remite}</h3>
            <h3>Nombre_destinatario: {props.nombre_destinatario}</h3>
            <h3>Unidades: </h3>
            {
                props.unidades? props.unidades.map((e,index) => {
                    return(
                        <div key={index}>
                            <h4>{e.etiqueta1d}</h4>
                            <h4>{e.referencia}</h4>
                        </div>
                    )
                })
                : <div/>
            }
        </div>
    )
}

export default Guia
