import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { searchEmployee } from '../../store/action';
import Employee from '../employee/Employee';
import './search.css'

function Search() {
    const dispatch = useDispatch();
    const search = useSelector((state) => state.searchEmployee);
    const [employee, setEmployee] = useState()

    function change(e){
        setEmployee(e.target.value)
        console.log(employee)
    }

    function searchEmploye(e){
        e.preventDefault();
        setEmployee(employee);
        console.log("Search",employee)
        dispatch(searchEmployee(employee));
    }
   
    return (
        <div>            
            <form onSubmit={searchEmploye} >
                <input className="form1" type="text" onChange={change} 
                    name="codigo_empleado" placeholder="Codigo del Empleado...." />
                <input className="button" type="submit" value="Submit" />
            </form> 
            <div>
                {
                    search? 
                        <Employee codigo={search.codigo_empleado} skills={search.skills}
                            name={search.nombre_empleado} cargo={search.cargo} key="1"
                        />
                    : <div/>
                }
            </div>          
        </div>
    )
}

export default Search
