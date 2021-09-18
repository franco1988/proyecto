import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { saveEmployee, getEmployee} from '../../store/action';
import './new.css'

export default function NewEmployee() {
    const dispatch = useDispatch();
    const nuevo = useSelector((state) => state.nuevo);
    const [employe, setEmploye] = useState({
        codigo_empleado:'',
        nombre_empleado:'',
        cargo:'',
        skills:''
    })

    function change(e){
        setEmploye({
            ...employe,
            [e.target.name]: e.target.value
        })
        console.log(employe)
    }

    async function search(e){
        e.preventDefault();
        setEmploye(employe);
        console.log("Search",employe)
        await dispatch(saveEmployee(employe));
        alert(nuevo);
        dispatch(getEmployee());
    }

    return (        
        <form className="formulario" onSubmit={search} >
            <input type="text" onChange={change} 
                name="codigo_empleado" placeholder="Codigo del Empleado...."
            />
            <input type="text" onChange={change} 
                name="nombre_empleado" placeholder="Nombre del Empleado...."
            />
            <input type="text" onChange={change} 
                name="cargo" placeholder="Cargo del Empleado...."
            />
            <input type="text" onChange={change} 
                name="skills" placeholder="Skills...javascript,Nodejs..."
            />
            <input className="button" type="submit" value="Submit" />
        </form>    
    )
}
