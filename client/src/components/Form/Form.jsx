// import React,{useState} from "react";
// // import useStyles from './styles.jsx';
// import { TextField,Button,Typography,Paper } from '@mui/material' 
// import FileBase from 'react-file-base64'
// import { useDispatch } from "react-redux";
// import { createPost } from "../../actions/posts.jsx";

// const Form = () =>{
//     const [postData,setPostData]= useState({
//         creator: '',title: '',message:'',tags:'',selectedFile:''});
//     // const classes= useStyles();
//     const dispatch = useDispatch();
//     const handleSubmit = (e) =>{
//         e.preventDefault();
//         dispatch(createPost(postData));
//     }

//     const clear = () =>{

//     }

//     return(
//         <Paper 
//         // className={classes.paper}
//         >
//             <form autoComplete="off" noValidate 
//             // className={`${classes.root} ${classes.form}`}
//              onSubmit={handleSubmit}>
//             <Typography variant="h6">Creating a Memory</Typography>
//             <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e)=> setPostData({...postData,creator:e.target.value})}/>
//             <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e)=> setPostData({...postData,title:e.target.value})}/>
//             <TextField name="message" variant="outlined" label="Message" fullWidth value={postData.message} onChange={(e)=> setPostData({...postData,message:e.target.value})}/>
//             <TextField name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={(e)=> setPostData({...postData,tags:e.target.value})}/>
//             <div> 
//             {/* // className={classes.fileInput} */}
//             <FileBase type="file" multiple={false} onDone={({base64}) => setPostData({...postData,selectedFile:base64})}></FileBase></div>
//             <Button 
//             // className={classes.buttonSubmit} 
//             variant="contained" color="primary" size="large" type="submit" fullwidth>Submit</Button>
//             <Button variant="contained" color="secondary" size="small" onClick={clear} fullwidth>Clear</Button>
//             </form>
//         </Paper>
//     );
// }

// export default Form;

import React, { useState } from "react";
import { TextField, Button, Typography, Paper } from '@mui/material';
import FileBase from 'react-file-base64';
import { useDispatch } from "react-redux";
import { createPost } from "../../actions/posts";

const Form = () => {
  const [postData, setPostData] = useState({
    creator: '', title: '', message: '', tags: '', selectedFile: ''
  });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(postData));
    clear();
  };

  const clear = () => {
    setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  };

  return (
    <Paper>
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Typography variant="h6">Creating a Memory</Typography>
        <TextField name="creator" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
        <TextField name="title" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
        <TextField name="message" label="Message" fullWidth value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
        <TextField name="tags" label="Tags" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value })} />
        <div>
          <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
        </div>
        <Button variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  );
};

export default Form;
