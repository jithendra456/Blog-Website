import express from 'express';
import {signUpUser} from '../controller/user-controller.js';
import {loginUser} from '../controller/user-controller.js';
import {uploadImage,getImage} from '../controller/Image-Controller.js';
import { createPost,getAllPosts,getPost,updatePost,deletePost } from '../controller/Post-Controller.js';
import { newComment,getComments,deleteComment } from '../controller/Comment-Controller.js';
import { authenticateToken } from '../controller/jwt-Controller.js';
import upload from '../utils/upload.js';


const router=express.Router();

router.post('/signUp',signUpUser);
router.post('/login',loginUser);
router.post('/file/upload',upload.single('file'),uploadImage);
router.get('/file/:filename',getImage);
router.post('/create',authenticateToken,createPost);
router.get('/posts',authenticateToken,getAllPosts);
router.get('/post/:id', authenticateToken, getPost);
router.put('/update/:id',authenticateToken,updatePost);
router.delete('/delete/:id',authenticateToken,deletePost);
router.post('/comment/new',authenticateToken,newComment);
router.get('/comments/:id', authenticateToken, getComments);
router.delete('/comment/delete/:id', authenticateToken, deleteComment);


export default router;