require('dotenv').config();
const pool = require('../db_connection');

const controllers = {};

controllers.createButtons = async (req,res) => {
    try{
               //realizamos una  consulta ,
        //console.log(req.body.pTexto)
        //if(req.body)
            var createButtons = await pool.query("INSERT INTO `botones` (`btn_texto`, `btn_link`, `btn_color`, `btn_version`, `btn_fecha`, `btn_estado`) VALUES ('"+req.body.pTexto+"', '"+req.body.pLink+"', '"+req.body.pColor+"', '"+req.body.pVersion+"', '"+req.body.pFecha+"', '1')");
            
            //console.log(createButtons)
            //Si la consulta no dio 0 resultados
            if (createButtons) {
                res.status(200).json({message: 'Success'});
            }
            else {
                //Si la consulta da 0
                res.status(200).json({status: 'SQL', message: 'Error en los registros' });
            }
        }catch(error){
        console.log(error)
        res.status(500).json({ message: 'Error en los servicios.' });
    }
   
};

controllers.editButtons = async (req,res) => {
    try{
               //realizamos una  consulta ,
        //console.log(req.body.pTexto) 
        var createButtons = await pool.query("INSERT INTO `botones` (`btn_texto`, `btn_link`, `btn_color`, `btn_version`, `btn_fecha`, `btn_estado`) VALUES ('"+req.body.pTexto+"', '"+req.body.pLink+"', '"+req.body.pColor+"', '"+req.body.pVersion+"', '"+req.body.pFecha+"', '1')");
        
        //console.log(createButtons)
        //Si la consulta no dio 0 resultados
        if (createButtons) {
            res.status(200).json({message: 'Success'});
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

controllers.deleteButtons = async (req,res) => {
    try{
               //realizamos una  consulta ,
        console.log(req.body)
        var deleteButtons = await pool.query("UPDATE `botones` SET `btn_estado`=0 WHERE btn_id='"+req.body.pID+"'");
        
        console.log(deleteButtons)
        //Si la consulta no dio 0 resultados
        if (deleteButtons) {
            res.status(200).json({message: 'Success'});
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

module.exports = controllers;
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