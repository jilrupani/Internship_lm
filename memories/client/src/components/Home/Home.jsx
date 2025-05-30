import React,{useState,useEffect} from 'react'
import { Container, Grow, Grid } from "@mui/material";
import { getPosts } from '../../actions/posts.jsx'
import { useDispatch } from "react-redux";
import Posts from '../Posts/Posts.jsx';
import Form from '../Form/Form.jsx';
import useStyles from '../../styles.js'


const Home = () => {
    
  const [currentId,setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);
  return(
  <Grow in> 
        <Container>
          <Grid className={classes.mainContainer} container  justifyContent="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId}/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId}/>              
            </Grid>
          </Grid>
        </Container>
      </Grow>
  );
};

export default Home