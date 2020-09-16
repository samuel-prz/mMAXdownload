const express = require('express');
//Middleware para ver las peticiones al servidor en la consola
const morgan = require('morgan');
//inicializacion del servidor
const app = express();



//middleware
app.use(morgan('dev'));
app.use(express.json())


app.use('/api', require('./routes/buttons.route.js'));
app.use('/api', require('./routes/crudBtn_route.js'));
app.use('/api', require('./routes/crudApp_route.js'));
//Inicio del servidor
app.listen(3000, ()=>{
    console.log('server on port', 3000);
});
