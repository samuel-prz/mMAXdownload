require('dotenv').config();
const pool = require('../db_connection');

const Buttons = {};

Buttons.getButtons = async (req,res) => {
    try{
               //realizamos una  consulta ,
        var queryButtons = await pool.query("SELECT * FROM download_files ");
        
        console.log((queryButtons).length)
        //Si la consulta no dio 0 resultados
        if ((queryButtons).length >= 1) {
            res.status(200).json({ queryButtons, message: 'Success'});
        }
         else {
             //Si la consulta da 0
            res.status(200).json({ message: 'Error en los registros' });
         }
        }catch(error){
        console.log(error)
        res.status(500).json({ message: 'Error en los servicios.' });
    }
   
};

module.exports = Buttons;
/*
onst Recuperar = {};
funcion que autentifica al usuario mediante el token que posee
clave = async (req, res) => {
    if (req.clave != key.env.MOD_KEY) {
        return res.status(400).send({ auth: false, message: 'Clave incorrecta.' });
    }
    else return res.status(200).send({ auth: true, message: 'Success' });
    
};

module.exports = clave; */