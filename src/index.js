// const express = require('express');
import express from 'express';
// const bodyParser = require('body-parser');
import bodyParser from 'body-parser';
// const { PORT } = require('./config/serverConfig')
const PORT = 3003;
// const connect = require('./config/database');
import {connect} from './config/database.js'
// const Tweet = require('./models/tweet');
import service from './services/tweet-service.js'

// const HashtagRepository = require('./repository/hashtag-repository'); 
const app = express();

const serverSetup = async() =>{
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.listen(PORT, ()=>{
        console.log(`Server started at PORT: ${PORT}`);
    });

   
    await connect();
    console.log("Mongo db connected");

    // let repo = new HashtagRepository();
    // await repo.bulkCreate([
    //     {
    //         title: 'Trend',
    //         tweets: []
    //     },
    //     {
    //         title: 'Excited',
    //         tweets: []
    //     },
    //     {
    //         title: 'Python',
    //         tweets: []
    //     }
    // ]);

    // const tweets = await Tweet.find({
    //     content:{
    //         $all: ["First tweet", "my tweet", "123m 4"]
    //     }
    // });
    let ser = new service();
    await ser.create({content: "my other #coDE is #work or #NOT"});

}

serverSetup();