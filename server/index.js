import express from 'express';
import Connection from './database/db.js';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './routes/route.js';
import bodyParser from 'body-parser';

dotenv.config();
const app=express();


const port =8080;

app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());

app.use("/",router);


const username=process.env.DB_USER;
const password=process.env.DB_PASSWORD;

Connection(username,password);

app.listen(port,()=>{
    console.log(`server running successfully on port ${port}`);
})

