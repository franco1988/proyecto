const { Router } = require('express');
require('dotenv').config();
const { Skill } = require("../dataBase.js");

const router = Router();

router.post('/', async(req, res, next) => {
   const {name} = req.body;
   try {
        const [skill, create] = await Skill.findOrCreate({
            where:{name : name}
        });
        if(create){
            res.send('Se guardo exitosamente');
        }else{
            res.send('Ya esta creado')
        }
       
   } catch (error) {
       next(error)
   }
})

router.get('/', async(req, res, next) => {
   try {
       const skills = await Skill.findAll();
       if(skills){
           res.json(skills);
       }else{
           res.send('Base de datos vacia')
       }
   } catch (error) {
       next(error)
   }
})

module.exports = router;