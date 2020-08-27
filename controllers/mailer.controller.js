var nodemailer = require('nodemailer');

const mailerController = {};

mailerController.mailer = async (req,res) => {
    try{
            console.log(req.body.email)
            let transporter = nodemailer.createTransport({
            
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: 'pruebas.mm00@gmail.com',
                pass: 'Fbcg3224'
            }
            });
            let mailOptions = await transporter.sendMail({
            from: 'pruebas.mm00@gmail.com',
            to: ''+req.body.email+'',
            subject: ''+req.body.option+'',
            text: ''+req.body.text+''+' '+req.body.name+' '+req.body.lastname
            });
            res.status(200).json({ message: 'success'});
    }catch(error){
        console.log(error)
        res.status(500).json({ message: 'Error en mailer'});
    }
};

module.exports = mailerController;