import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";

export const getPosts = async(req,res)=>{
    try {
        const postMessages = await PostMessage.find();
        // console.log(postMessages);
        // console.log('getMethods call');
        res.status(200).json(postMessages);
        
    } catch (error) {
        res.status(200).json({message: error.message});
    }
}

export const createPost = async(req,res) => {
    // console.log('REQ.BODY:', req.body);
    const post = req.body;
    const newPost = new PostMessage({...post,creator:req.userId,createdAt:new Date().toISOString()});
    try {
        await newPost.save();
        res.status(201).json(newPost);
        console.log("Post Created!!");
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}

export const updatePost = async(req, res) => {
    const { id : _id} = req.params;
    const post = req.body;
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No Post with that id.');

    const updatedPost = await PostMessage.findByIdAndUpdate(_id, { ...post, _id}, { new: true });
    console.log('updated!');    
    res.json(updatedPost);   
}

export const deletePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send('No Post with that id.');
  }

  try {
    await PostMessage.findByIdAndDelete(id);
    console.log('Post deleted:', id);
    res.json({ message: 'Post deleted successfully' });
  } catch (error) {
    console.error('DELETE Error:', error);
    res.status(500).json({ message: error.message });
  }
};

export const likePost = async (req,res) => {
    const{id}= req.params;

    if(!req.userId) return res.json({message:'Unauthenticated'});

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No Post with that id.');
    try {

        const post = await PostMessage.findById(id);
        const index = post.likes.findIndex((id) => id === String(req.userId));

        if(index === -1){
            //like the post
            post.likes.push(req.userId);
        }else{
            //dislike the post
            post.likes = post.likes.filter((id) => id !== String(req.userId));
        }

        const updatedPost = await PostMessage.findByIdAndUpdate(id,post,{new:true});

        res.json(updatedPost);
        console.log(`liked post : ${post.id}`);
        
    } catch (error) {
        console.error('updated Error:', error);
        res.status(500).json({ message: error.message });
    }
}