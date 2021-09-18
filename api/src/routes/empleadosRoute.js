const { Router } = require('express');
require('dotenv').config();
const { Empleado, Skill } = require("../dataBase.js");

const router = Router();

router.post('/', async(req, res, next) => {
    
    const {codigo_empleado, nombre_empleado, cargo} = req.body;
    const skills = req.body.skills.split(',');
  
    const codigo = parseInt(codigo_empleado,10);
    
    if(req.body){
        try {
            const codigo_empleado = codigo;
            const empleado = await Empleado.create({
                codigo_empleado,
                nombre_empleado,
                cargo,
            });
            
            for(let i = 0; i < skills.length; i++){
                const [skill, create] = await Skill.findOrCreate({
                    where:{name : skills[i]}
                });
              
                await empleado.addSkills(skill.dataValues.id);
            }
            res.send('Se guardo con exito los datos');            
        }
        catch (error) {
            next(error);
        }
    } else {
        res.send('Envie datos validos')
    }
})

router.get('/todos', async(req, res, next) => {
    const empleados = await Empleado.findAll();
    
    if(empleados){
        try {
            res.json(empleados);            
        } catch (error) {
            next(error)
        }
    }else{
        res.send('No hay empleados');
    }
})

router.get('/', async(req, res, next) => {
    
    const {codigo_empleado, nombre_empleado, cargo} = req.body;
    if(codigo_empleado && nombre_empleado && cargo){
        try {
            const empleado = await Empleado.findByPk(codigo_empleado,{include: Skill});
            res.json(empleado);            
        } catch (error) {
            next(error)
        }
    }else{
        res.send('Empleado no encontrado');
    }
})

router.get('/:codigo', async(req, res, next) => {
    const codigo_empleado = req.params.codigo;
    if(codigo_empleado){
        try {
            const empleado = await Empleado.findByPk(codigo_empleado,{include: Skill});
            res.json(empleado);            
        } catch (error) {
            next(error)
        }
    }else{
        res.send('Empleado no encontrado');
    }
})

module.exports = router;