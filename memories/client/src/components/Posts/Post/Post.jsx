import React from 'react'
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from '@mui/material'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import useStyles from './styles.js';
import moment from 'moment'
import { useDispatch } from 'react-redux';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import { deletePost,likePost } from '../../../actions/posts.jsx';

function Post({post, setCurrentId}) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));

  const Likes = () => {
    if (post.likes.length > 0) {
      return post.likes.find((like) => like === (user?.result?.sub || user?.result?._id))
        ? (
          <><ThumbUpAltIcon fontSize="small" />&nbsp;{post.likes.length > 2 ? `You and ${post.likes.length - 1} others` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}` }</>
        ) : (
          <><ThumbUpOffAltIcon fontSize="small" />&nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}</>
        );
    }

    return <><ThumbUpOffAltIcon fontSize="small" />&nbsp;Like</>;
  };


  return (
    <Card className={classes.card} >
      <CardMedia className={classes.media} image={post.selectedFile} title={post.title}/>
      <div className={classes.overlay}>
      <Typography variant="h6">{post.name}</Typography>
      <Typography variant="body">{moment(post.createdAt).fromNow()}</Typography>
    </div>
    {(user?.result?.sub ===  post?.creator || user?.result?._id === post?.creator) && (
    <div className={classes.overlay2}>
      <Button 
        style={{color: 'white'}} 
        size="small" 
        onClick={() => {  setCurrentId(post._id)}}>
        <MoreHorizIcon fontSize="default"/>
      </Button>
    </div>
    )}
    <div className={classes.details}>
      <Typography variant="body2" color='testSecondary'>{post.tags.map((tag)=> `#${tag} `)}</Typography>
    </div> 
    <Typography className={classes.title} variant="h5" gutterBottom>{post.title}</Typography>
    <CardContent>
    <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
    </CardContent>
    <CardActions>
      <Button size="small" color='primary' disabled={!user?.result} onClick={()=> dispatch(likePost(post._id))}>
        <Likes/>
      </Button>
      {(user?.result?.sub ===  post?.creator || user?.result?._id === post?.creator) && (
      <Button size="small" color='primary' onClick={()=> dispatch(deletePost(post._id))}>
        <DeleteIcon fontSize="small"/>
        DELETE
      </Button>
      )}
    </CardActions>
    </Card>
  )
}

export default Post;