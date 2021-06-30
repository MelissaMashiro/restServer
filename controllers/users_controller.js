const { response,request } = require('express');


const usuariosGet = (req = request,res = response) => {
    //des-estructurando los parametros recibidos...
    const {q,nombre = 'No name',apikey} = req.query; //son los parametros  recibidos

    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        apikey
    });
//probar ahciendo epticion como api/usuarios?q=hola&nombre=melissita&apikey=1234567
}


const usuariosPost = (req,res = response) => {

    const {nombre,edad} = req.body;//json recibido del body de la peticion

    res.json({
        msg: 'post API - controlador',
        nombre,
        edad
    });

}


const usuariosPut = (req,res = response) => {

    const id = req.params.id;
    //const { id } = req.params; #Forma 2 

    res.json({
        msg: 'put API - controlador',
        id
    });

}


const usuariosPatch = (req,res = response) => {

    res.json({
        msg: 'patch API - controlador'
    });

}

const usuariosDelete = (req,res = response) => {

    res.json({
        msg: 'delete API - controlador'
    });

}


//Export para pdoer usarlo en otros archivos
module.exports = {
    usuariosGet:usuariosGet,
    usuariosPut:usuariosPut,
    usuariosPost:usuariosPost,
    usuariosPatch:usuariosPatch,
    usuariosDelete
}