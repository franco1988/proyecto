const { Router } = require('express');

const empleadosRoute = require('./empleadosRoute.js');
const skillRoute = require('./skillRoute.js');
const rastreo = require('./rastreo.js');


const router = Router();


router.use('/empleado', empleadosRoute);
router.use('/skill', skillRoute);
router.use('/rastreo', rastreo);


module.exports = router;