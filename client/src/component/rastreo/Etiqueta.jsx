import React from 'react'

export default function Etiqueta(props) {
    return (
        <div>
            <h3>Checkpoint: {props.checkpoint}</h3>
            <h3>Etiqueta1d: {props.etiqueta1d}</h3>
            <h3>Tipo: {props.tipo}</h3>
        </div>
    )
}
