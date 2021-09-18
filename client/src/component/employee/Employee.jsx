import React from 'react'
import './employee.css';

function Employee(props) {
    return (
        <div className="cuerpo">
            {
                props.cargo? 
                    <div className="empleado">
                        <h3>Codigo_empleado: {props.codigo}</h3>
                        <h3>Nombre_empleado: {props.name}</h3>
                        <h3>Cargo: {props.cargo}</h3>
                        <h3 className="eskill">Skills: 
                        {
                            props.skills? props.skills.map(e => 
                                <h3>{e.name}</h3>
                                )
                            : <div>no hay skills</div>
                        }
                        </h3>
                    </div>
                :   <div className="empleado">
                        <h3>Codigo_empleado: {props.codigo}</h3>
                        <h3>Nombre_empleado: {props.name}</h3>
                    </div>
            }
        </div>
    )
}

export default Employee
