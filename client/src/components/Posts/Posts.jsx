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
import Post from './Post/Post';
import { useSelector } from 'react-redux';

const Posts = () => {
  const posts = useSelector((state) => state.posts);

  return (
    <>
      <h1>Posts</h1>
      {posts.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </>
  );
};

export default Posts;
