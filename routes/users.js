const { Router } = require('express');
const { usuariosGet, usuariosPut, usuariosPost, usuariosDelete } = require('../controllers/users_controller');


const router = Router();

//el path inicial de estas rutas es el que se le puso en el middlewer de las rutas (/api/usuarios)
router.get('/',usuariosGet);

router.put('/:id',usuariosPut); // :id es para poder recibir queryparametros en la request y que guiade esos datos, en ves de tomarlos como parte de la ruta
//con lo anterior, ya no aceptará esa ruta si no se le coloca un parametro


router.post('/',usuariosPost);

router.delete('/',usuariosDelete);

module.exports = router;//necesario para correr esto 