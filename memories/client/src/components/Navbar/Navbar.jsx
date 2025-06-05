import React,{useState,useEffect} from 'react';
import  {Link,useNavigate, useLocation} from 'react-router-dom';
import { AppBar,Avatar,Button,Toolbar,Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import useStyles from './styles';
import memories from '../../Images/memories.svg'
import { LOGOUT } from '../../constants/actionType';
import { jwtDecode } from 'jwt-decode';
import { toast } from 'react-toastify';


export const Navbar = () => {
    const classes = useStyles();
    const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const logout = () =>{
      dispatch({type: LOGOUT});
      // navigate('/auth');
      toast.success('🦄Logout  successfully!', {
              position: "top-right",
              autoClose: 5000,
              theme: "dark",
            });
       setTimeout(() => navigate('/auth'), 500);
      setUser(null);
    };

    // console.log(user);

    useEffect(()=>{
      const token = user?.token;

      if(token){
        const decodedToken = jwtDecode(token);

        if(decodedToken.exp * 1000 < new Date().getTime()) logout();
      }

      setUser(JSON.parse(localStorage.getItem('profile')));
    },[location]);

//     try {
//   const user = JSON.parse(localStorage.getItem('profile'));
//   console.log(user);
// } catch (error) {
//   console.error('Error parsing localStorage data:', error);
// }


    return(
      <div>
    <AppBar className={classes.appBar} position="static" elevation={0}    >
      <Toolbar className={classes.toolbar} >
        <div className={classes.leftSide}>
        <Link to='/' >
        <img className={classes.logo} src={memories}  alt="memories" height="60" />
        </Link>
        <Typography component={Link} to='/' className={classes.textImage} variant="h2" align="center">Memories</Typography>
        </div>
      </Toolbar>
          {user ? (
              <div className={classes.profile}>
                <Avatar className={classes.avatar} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                <Typography className={classes.userName} variant="h6" >{user.result.name}</Typography>
                <Button variant="contained" className={classes.logout}  onClick={logout}>Logout</Button>
              </div>
          ):(
              <Button component={Link} to="/auth" variant="contained" className={classes.logout}  >Sign In</Button>
          )}
    </AppBar>  
    </div>
)
}
export default Navbar;






