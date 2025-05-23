// import React from "react";
// import Post from './Post/Post.jsx';
// // import useStyles from './styles.js';
// import {useSelector} from 'react-redux';

// const Posts = () =>{
//      const posts =useSelector((state)=>state.posts);
//     //  const classes= useStyles();

//      console.log(posts);
//     return(
//         <>
//         <h1>POSTS</h1>
//         <Post/>
//         <Post/>
//         </>
//     );
// }

// export default Posts;

import React from "react";
import {Grid,CircularProgress} from '@mui/material'
import Post from './Post/Post';
import { useSelector } from 'react-redux';

const Posts = () => {
  const posts = useSelector((state) => state.posts);

  return (
    !posts.length ? <CircularProgress/> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {posts.map((post) =>(
          <Grid key={post._id} item xs={12} sm={6}>
            <Post post={post}/>
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Posts;
