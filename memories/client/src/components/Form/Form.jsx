import React, { useState, useEffect } from 'react'
import useStyles from './styles.js';
import {TextField, Button, Typography, Paper} from '@mui/material'
import FileBase from 'react-file-base64'
import { useDispatch } from 'react-redux';
import { createPost, updatePost } from '../../actions/posts';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Form({currentId, setCurrentId }) {
  const classes = useStyles();
  const [postData, setPostData] = useState({ title: '', message:'',tags:'',selectedfile:''});
  const post = useSelector((state) => currentId ? state.posts.posts.find((p) => p._id === currentId) : null );
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'));
  const navigate = useNavigate();

  useEffect(() => {
    if(post) setPostData(post);
  }, [post])

  const handleSubmit = (e) => {
    e.preventDefault();
    if(currentId === null){
      dispatch(createPost({ ...postData,name:user?.result?.name},navigate));
      clear();
    }
    else{
       dispatch(updatePost(currentId, {...postData,name:user?.result?.name}));
        clear();
    }
  };

  const clear = () => {
    setCurrentId(null),
    setPostData({
    title: '',
    message: '',
    tags: '',
    selectedFile: ''
  });
  }

  if(!user?.result?.name){
    return(
      <Paper>
        <Typography variant="h6" align="center">
          Please Sign In to create your own memories and like other's memories.
        </Typography>
      </Paper>
    )
  }

  return (
    <>
      <Paper 
      className={classes.paper}
      elevation={6}>
        <form autoComplete="off" noValidate  
        onSubmit={handleSubmit} >
          <Typography variant="h6">{currentId ? `Editing` : `Creating`} a Memory</Typography>
          {/* <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator}  onChange={(e) => setPostData({...postData,creator: e.target.value})} /> */}
          <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title}  onChange={(e) => setPostData({...postData,title: e.target.value})} />
          <TextField name="message" variant="outlined" label="Message" fullWidth value={postData.message}  onChange={(e) => setPostData({...postData,message: e.target.value})} />
          <TextField name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags}  onChange={(e) => setPostData({...postData,tags: e.target.value.split(',')})} />
          <div  
          className={classes.fileInput}
          >
            <FileBase
              type='file'
              multiple={false}
              onDone={({base64})=>setPostData({...postData,selectedFile:base64})}
              />
          </div>
          {postData.selectedFile && (
            <div style={{ textAlign: 'center', margin: '10px 0' }}>
              <img
                src={postData.selectedFile}
                alt="Preview"
                style={{ maxWidth: '100%', maxHeight: '200px', borderRadius: '8px' }}
              />
            </div>
          )}
          <Button 
          className={classes.buttonSubmit}
           variant="contained" size="large" type='submit' fullWidth>Submit</Button>
          <Button  className={classes.buttonSubmit} variant="contained" size="small" onClick={clear} fullWidth>Remove</Button>
        </form>
      </Paper>
    </>
  )
}

export default Form;