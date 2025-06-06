import { makeStyles } from '@mui/styles';


// import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  media: {
    borderRadius: '20px',
    objectFit: 'cover',
    width: '100%',
    maxHeight: '600px',

  },
  card: {
    display: 'flex',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      flexDirection: 'column',
    },
  },
  section: {
    borderRadius: '20px',
    margin: '10px',
    flex: 1,
  },
  imageSection: {
    marginLeft: '20px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
    },
  },
  recommendedPosts: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  loadingPaper: {
    display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', borderRadius: '15px', height: '39vh',
  },

  commentsOuterContainer:{
    display:'flex',justifyContent:'space-between',
  },
  commentsInnerContainer:{
    height:'200px',overflow:'auto' , marginRight:'30px'
  },
}));


// import { makeStyles } from '@mui/styles';

// export default makeStyles((theme) => ({
//   media: {
//     borderRadius: '20px',
//     objectFit: 'cover',
//     width: '100%',
//     maxHeight: '600px',

//   },
//   card: {
//     display: 'flex',
//     width: '100%',
//     [theme.breakpoints.down('sm')]: {
//       flexWrap: 'wrap',
//       flexDirection: 'column',
//     },
//   },
//   section: {
//     borderRadius: '20px',
//     margin: '10px',
//     flex: 1,
//   },
//   imageSection: {
//     marginLeft: '20px',
//     [theme.breakpoints.down('sm')]: {
//       marginLeft: 0,
//     },
//   },
//   recommendedPosts: {
//     display: 'flex',
//     [theme.breakpoints.down('sm')]: {
//       flexDirection: 'column',
//     },
//   },
//   loadingPaper: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: '20px',
//     borderRadius: '15px',
//     height: '39vh',
//   },
//   commentsOuterContainer: {
//     display: 'flex',
//     justifyContent: 'space-between',
//   },
//   commentsInnerContainer: {
//     height: '200px',
//     overflowY: 'auto',
//     marginRight: '30px',
//   },
//   buttonSubmit: {
//     marginBottom: 10,
//     backgroundColor: `${theme.palette.button.background} !important`,
//     border: `2px solid ${theme.palette.button.border} !important`,
//     borderRadius: '10px !important',
//     height: '50px',
//     width: '150px',
//     color: `${theme.palette.button.text} !important`,
//     '&:hover': {
//       backgroundColor: `${theme.palette.button.hover} !important`,
//       color: `${theme.palette.button.hoverText} !important`,
//       fontWeight: 'bold !important' , 
//     },

//     '&.Mui-disabled': {
//     backgroundColor: `${theme.palette.button.disableBaground} !important`, 
//     color: `${theme.palette.button.disabledText} !important`, 
//     border: `2px solid ${theme.palette.button.disabledBorder} !important`,
//     cursor: 'not-allowed',
//     },

//   },
// }));