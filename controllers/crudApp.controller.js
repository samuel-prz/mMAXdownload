require('dotenv').config();
const pool = require('../db_connection');

const controllers = {};

controllers.createApp = async (req,res) => {
    try{
               //realizamos una  consulta ,
        //console.log(req.body.pTexto)
        //if(req.body)
            var createApp = await pool.query("INSERT INTO `app` (`app_text`, `app_icon`, `app_novedades`, `app_estado`) VALUES ('"+req.body.pText+"', '"+req.body.pIcon+"', '"+req.body.pNovedades+"', '1')");
            
            //console.log(createApp)
            //Si la consulta no dio 0 resultados
            if (createApp) {
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

controllers.editApp = async (req,res) => {
    try{
               //realizamos una  consulta ,
        //console.log(req.body.pTexto) 
        var createApp = await pool.query("UPDATE `botones` SET `btn_texto` = '"+req.body.pTexto+"', `btn_link` = '"+req.body.pLink+"', `btn_color` = '"+req.body.pColor+"', `btn_version` = '"+req.body.pVersion+"' WHERE `botones`.`btn_id` = "+req.body.pID+" ");
        
        //console.log(createApp)
        //Si la consulta no dio 0 resultados
        if (createApp) {
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

controllers.deleteApp = async (req,res) => {
    try{
               //realizamos una  consulta ,
        console.log(req.body)
        var deleteApp = await pool.query("UPDATE `app` SET `app_estado`=0 WHERE app_id='"+req.body.pID+"'");
        
        console.log(deleteApp)
        //Si la consulta no dio 0 resultados
        if (deleteApp) {
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