const express = require('express');
var cors = require('cors');

class Server{

    constructor(){
        this.app = express()//el this es obligatorio, el app solo no existe
        this.port = process.env.PORT;
        this.usuariosRoutePath = '/api/usuarios';

        //MIDDLEWARES (funcion que siempre se ejecutará cuando levantemos nuestro servidor)
        this.middlewares();
        //Rutas de mi aplicación
        this.routes();
    }

    //use() es la palabra clave para decir que este es un middleware
    middlewares(){
        
        //CORS
        this.app.use(cors());//habilita cors para que se pueda usar la api publicamente
        
        //Lectura y parseo del body(json) recibido por el cliente
        this.app.use(express.json());

        //Directorio público
        this.app.use(express.static('public'));
        
    }


    routes(){
       this.app.use(this.usuariosRoutePath,require('../routes/users'));
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log('Servidor corriendo en puerto', this.port);
        });
    }

}



module.exports = Server;