const express = require('express');
const bodyParser = require('body-parser');
const APIroutes = require('./routes/index.js');


const db = require('./models/index');
const app = express();

const prepareAndStartServer = ()=>{
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true})); 
    app.use('/api',APIroutes);

    if(true){
        db.sequelize.sync({alter:false});
    }  
     
    app.listen(3001 ,async ()=>{
    console.log(`Server Started on Port : ${3001}`);
    })
}

prepareAndStartServer();