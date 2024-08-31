const express = require('express');
const bodyParser = require('body-parser');
const { PORT } = require('./config/serverConfig')
const connect = require('./config/database');
const app = express();

const serverSetup = async() =>{
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.listen(PORT, ()=>{
        console.log(`Server started at PORT: ${PORT}`);
    })

    await connect();
    console.log("Mongo db connected");

}

serverSetup();