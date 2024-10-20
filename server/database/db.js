import mongoose from "mongoose";



const Connection=async(username,password)=>{
    // const username = encodeURIComponent('jithu45605');
    // const password = encodeURIComponent('jithu456');
    // const cluster = 'mqscr45.mongodb.net';
    // const dbname = 'Blog-app';

    const url = `mongodb://${username}:${password}@ac-itye1vr-shard-00-00.f5yn39s.mongodb.net:27017,ac-itye1vr-shard-00-01.f5yn39s.mongodb.net:27017,ac-itye1vr-shard-00-02.f5yn39s.mongodb.net:27017/?ssl=true&replicaSet=atlas-uwddom-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Blog-App`;

    try{
        await mongoose.connect(url,{useNewUrlParser:true});
        console.log("Database is connected successfully");
    }
    catch(err){
        console.log("Error occured in database connection",err);
    }
}

export default Connection;