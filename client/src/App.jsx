import React,{useEffect} from 'react';
import {Container, AppBar ,Typography,Grow,Grid} from '@mui/material'
import {useDispatch} from 'react-redux';

import {getPosts} from './actions/posts.jsx'
import Posts from './components/Posts/Posts.jsx';
import Form from './components/Form/Form.jsx';
import memories from '../src/images/memories.png';
import useStyles from './styles.jsx';

 const App = () => {
  const classes= useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getPosts());
  },[dispatch]);

  return (
    <Container maxwidth="lg">
      <AppBar className={classes.AppBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center" >Memories</Typography>
        <img className={classes.image} src={memories} alt="memories" height="60" width="60"/>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form/>  
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
