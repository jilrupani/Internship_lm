import React from "react";
import Post from './Post/Post.jsx';
import useStyles from './styles.jsx';
import {useSelectoor} from 'react-redux';

const Posts = () =>{
     const posts =useSelectoor((state)=>state.posts);
     const classes= useStyles();

     console.log(posts);
    return(
        <>
        <h1 className={classes.something}>POSTS</h1>
        <Post/>
        <Post/>
        </>
    );
}

export default Posts;