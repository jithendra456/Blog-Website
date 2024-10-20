
// import Comment from "../model/comment.js";


// export const newComment = async (request, response) => {
//     // try {
//     //     const Comment = await new comment(request.body);
//     //     Comment.save();
//     const { comments } = request.body;
//     try{

//         if (!comments || comments.trim() === '') {
//             return response.status(400).json({ error: "Comment cannot be empty" });
//         }
        
//         const comment = new Comment(request.body);
//         await comment.save();
        
//         response.status(200).json('Comment saved successfully');
//     }
//      catch (error) {
//         response.status(500).json({error:error.message});
//     }
// }

// export const getComments = async (request, response) => {
//     try {
//         const comments = await Comment.find({ postId: request.params.id });
        
//         response.status(200).json(comments);
//     } catch (error) {
//         response.status(500).json(error)
//     }
// }

// export const deleteComment = async (request, response) => {
//     try {
//         const comment = await Comment.findById(request.params.id);
//         await comment.delete()

//         response.status(200).json('comment deleted successfully');
//     } catch (error) {
//         response.status(500).json(error)
//     }
// }

import Comment from '../model/comment.js';


export const newComment = async (request, response) => {
   
    const { comments } = request.body;
    try{

        if (!comments || comments.trim() === '') {
            return response.status(400).json({ error: "Comment cannot be empty" });
        }
        
        const comment = new Comment(request.body);
        await comment.save();
        
        response.status(200).json('Comment saved successfully');
    }
     catch (error) {
        response.status(500).json({error:error.message});
    }
}


export const getComments = async (request, response) => {
    try {
        const comments = await Comment.find({ postId: request.params.id });
        
        // Check if comments exist
        if (!comments || comments.length === 0) {
            return res.status(404).json({ message: 'No comments found for this post.' });
        }
        
        response.status(200).json(comments);
    } catch (error) {
        response.status(500).json(error)
    }
}

export const deleteComment = async (request, response) => {
    try {
        const comment = await Comment.findById(request.params.id);
        await comment.delete()

        response.status(200).json('comment deleted successfully');
    } catch (error) {
        response.status(500).json(error)
    }
}