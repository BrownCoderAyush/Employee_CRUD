const express = require('express');
const bodyParser = require('body-parser');
const APIroutes = require('./routes/index.js');
const {PORT , SYNC_DB} = require('./config/serverConfig.js');

const db = require('./models/index');
const app = express();

const prepareAndStartServer = ()=>{
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true})); 
    app.use('/api',APIroutes);

    
    if(SYNC_DB){
        db.sequelize.sync({alter:false});
    }  

    app.listen(PORT ,async ()=>{
    console.log(`Server Started on Port : ${PORT}`);
    })
}

prepareAndStartServer();