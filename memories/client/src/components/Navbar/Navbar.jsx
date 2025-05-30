import React,{useState,useEffect} from 'react';
import  {Link,useNavigate, useLocation} from 'react-router-dom';
import { AppBar,Avatar,Button,Toolbar,Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import useStyles from './styles';
import memories from '../../Images/memories.svg'
import { LOGOUT } from '../../constants/actionType';
import { jwtDecode } from 'jwt-decode';

export const Navbar = () => {
    const classes = useStyles();
    const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const logout = () =>{
      dispatch({type: LOGOUT});
      navigate('/');

      setUser(null);
    };

    console.log(user);

    useEffect(()=>{
      const token = user?.token;

      if(token){
        const decodedToken = jwtDecode(token);

        if(decodedToken.exp * 1000 < new Date().getTime()) logout();
      }

      setUser(JSON.parse(localStorage.getItem('profile')));
    },[location]);

    try {
  const user = JSON.parse(localStorage.getItem('profile'));
  console.log(user);
} catch (error) {
  console.error('Error parsing localStorage data:', error);
}


    return(
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">Memories</Typography>
        <img className={classes.image} src={memories} alt="memories" height="60" />
       </div> 
       <Toolbar className={classes.toolbar}>
          {user ? (
              <div className={classes.profile}>
                <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                <Typography className={classes.userName} variant="h6" >{user.result.name}</Typography>
                <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
              </div>
          ):(
              <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
          )}
       </Toolbar>
    </AppBar>  
)
}
export default Navbar;
