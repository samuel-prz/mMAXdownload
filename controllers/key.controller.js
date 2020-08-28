require('dotenv').config();

const accesoTemp = {};

accesoTemp.claveTemp = async (req,res) => {
    try{
        if (req.body.clave === process.env.MOD_KEY){
            res.status(200).send({ auth: true, message: 'Success' });
        } else {
            res.status(400).send({ auth: false, message: 'Failed' });
        }
        
            
        }catch(error){
        console.log(error)
        res.status(500).send({ auth: false, message: 'Error en los servicios.' });
    }
   
};

module.exports = accesoTemp;
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