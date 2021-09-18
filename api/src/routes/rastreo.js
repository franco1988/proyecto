const { Router } = require('express');
require('dotenv').config();
const axios = require('axios').default;

const router = Router();

router.get('/:codigo', async(req, res, next) => {
    const codigo = req.params.codigo;
    
    try {
        if(codigo[0] == 7){
            
            const datos = await axios.get('https://api.coordinadora.com/cm-model-testing/api/v1/talentos/checkpoint');
            
            const encontrado = datos.data.data.filter(elemento => parseInt(elemento.etiqueta1d) === parseInt(codigo));
            if(encontrado){
                res.json(encontrado);
            }else{
                res.send('No existe el codigo')
            }
        }else{
            
            const datos = await axios.get('https://api.coordinadora.com/cm-model-testing/api/v1/talentos/');
           
            const encontrado = datos.data.data.guias.filter(elemento => parseInt(elemento.codigo_remision) === parseInt(codigo));
            if(encontrado){
                res.json(encontrado);
            }else{
                res.send('No existe el codigo')
            }
        }
        
    } catch (error) {
        next(error);
    }
})

module.exports = router;


