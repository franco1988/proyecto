import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Employee from '../employee/Employee';
import Skill from '../skill/Skill';
import Search from '../search/Search';
import Rastreo from '../rastreo/Rastreo';
import {getEmployee, getSkills} from '../../store/action/index'
import NewEmployee from '../newEmployee/NewEmployee';
import './home.css';

function Home() {
    const dispatch = useDispatch();
    const employees = useSelector((state) => state.employees);
    const skills = useSelector((state) => state.skills);
    //const nuevo = useSelector((state) => state.nuevo);
    const [ver, setVer] = useState('');

    useEffect(() => {
        dispatch(getEmployee());
        dispatch(getSkills());
        // eslint-disable-next-line
    }, [])


    return (
        <div>
            <button onClick={() => setVer('')} >
                    Home
                </button>
            <div className="boton">
                <button onClick={() => setVer('employee')} >
                    Empleados
                </button>
                <button onClick={() => setVer('skill')} >
                    Skills
                </button>
                <button onClick={() => setVer('buscar')} >
                    Buscar Empleado
                </button>
                <button onClick={() => setVer('rastreo')} >
                    Rastreo
                </button>
                <button onClick={() => setVer('upload')} >
                    Cargar Empleado
                </button>
            </div>
            <div>
                {   ver === 'employee'? employees.map((e, index) => 
                        <Employee codigo={e.codigo_empleado} key={index}
                            name={e.nombre_empleado}
                        />) 
                        : <div></div>
                }
            </div>
            <div> 
                {   ver === 'skill'? skills.map((e, index) => 
                        <Skill key={index}
                            name={e.name}
                        />) 
                        : <div></div>
                }
            </div>
            <div>
                {   ver === 'buscar'? <Search/> : <div/>   }
            </div>
            <div>
                {   ver === 'rastreo'? <Rastreo/> : <div/> }
            </div>
            <div>
                {   ver === 'upload'? <NewEmployee/> : <div/> }
            </div>
        </div>
    )
}

export default Home
