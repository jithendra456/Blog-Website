import multer from 'multer';

import {GridFsStorage} from 'multer-gridfs-storage';
import dotenv from 'dotenv';

dotenv.config();
const username=process.env.DB_USER;
const password=process.env.DB_PASSWORD;

const storage=new GridFsStorage({
    url : `mongodb://${username}:${password}@ac-itye1vr-shard-00-00.f5yn39s.mongodb.net:27017,ac-itye1vr-shard-00-01.f5yn39s.mongodb.net:27017,ac-itye1vr-shard-00-02.f5yn39s.mongodb.net:27017/?ssl=true&replicaSet=atlas-uwddom-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Blog-App`,
    options:{useNewUrlParser:true},
    file:(request,file)=>{
        const match=["image/png","image/jpg"];
        if(match.indexOf(file.memeType)===-1){
            return `${Date.now()}-blog-${file.originalname}`;
        }
        return {
            bucketName:"photos",
            filename:`${Date.now()}-blog-${file.originalname}`
        }
    }

})

export default multer({storage:storage});