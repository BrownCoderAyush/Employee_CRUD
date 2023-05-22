const express = require('express');
const bodyParser = require('body-parser');
const x = require('./config/serverConfig.js');
// const {PORT , SYNC_DB} = require('./config/serverConfig.js');

const db = require('./models/index');
const eR = require('./repository/employeeRepository.js');
const ER = new eR();
const emC = require('./repository/emergencyContactRepository.js');
const emc = new emC();



const app = express();

const prepareAndStartServer = ()=>{
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true})); 

    // if(SYNC_DB){
    //     db.sequelize.sync({alter:false});
    // }   
    app.listen(3001 ,async ()=>{
    console.log(`Server Started on Port : ${3001}`);
      /*
        const response = await ER.create({
            name : "QW",
            jobTitle : "AS" , 
            email : 'addaaaaaaqp', 
            emergencyContacts : [
                {
                    name : "Shubham",
                    level : "primary",
                    phoneNumber : 12345 ,
                    relationship : "brother"
                },
                {
                    name : "bham",
                    level : "secondary",
                    phoneNumber : 12345 ,
                    relationship : "brother"
                }
            ]

        });
        console.log("response" , response);
        */

    })
}

prepareAndStartServer();