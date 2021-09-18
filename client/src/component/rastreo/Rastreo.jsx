import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { searchRastreo } from '../../store/action';
import Etiqueta from './Etiqueta';
import Guia from './Guia';
import './rastreo.css'

function Rastreo() {
    const dispatch = useDispatch();
    const rastreoRes = useSelector((state) => state.rastreo);
    const [codigo, setCodigo] = useState('')

    function change(e){
        setCodigo(e.target.value)
        console.log(codigo)
    }

    function search(e){
        e.preventDefault();
        setCodigo(codigo);
        console.log("Search",codigo)
        dispatch(searchRastreo(codigo));
    }

    return (
        <div className="form">            
        <form  onSubmit={search} >
            <input className="form1" type="text" onChange={change} 
                name="codigo" placeholder="Codigo de Rastreo...." />
            <input className="button" type="submit" value="Submit" />
        </form> 
        <div className="codigo">
            {
                codigo[0] === '7' && rastreoRes? rastreoRes.map((e, index) => 
                    <Etiqueta key={index} checkpoint={e.checkpoint}
                    etiqueta1d={e.etiqueta1d} tipo={e.tipo}
                    />
                    )
                : 
                    codigo[0] !== '7' && rastreoRes? rastreoRes.map((e,index) => 
                        <Guia key={index} codigo_remision={e.codigo_remision}
                            dir_destinatario={e.dir_destinatario} dir_remite={e.dir_remite}
                            nombre_destinatario={e.nombre_destinatario} unidades={e.unidades}
                        />
                    )
                    : <div/>
            }
        </div>          
    </div>
    )
}

export default Rastreo
