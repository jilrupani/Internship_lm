// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import App from './App.jsx';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware, compose } from 'redux';
// import {thunk} from 'redux-thunk';
// import reducer from './reducers'; 
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
// import { ThemeProvider as StylesThemeProvider } from '@mui/styles';
// import CssBaseline from '@mui/material/CssBaseline';
// import { GoogleOAuthProvider } from '@react-oauth/google'
// import {StylesProvider} from '@mui/styles'
// import './index.css';

// const theme = createTheme();
// const store = createStore(reducer, compose(applyMiddleware(thunk))); 
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <StylesProvider injectFirst>
//     <ThemeProvider theme={theme}>
//       <Provider store={store}>
//         <GoogleOAuthProvider clientId="431220849207-hpbbj3gh18fshjc35jaavu2hpk6m8460.apps.googleusercontent.com">
//         {/* <GoogleOAuthProvider clientId="431220849207-hpbbj3gh18fshjc35jaavu2hpk6m8460.apps.googleusercontent.com"> */}
//         <CssBaseline />
//         <App />
//         </GoogleOAuthProvider>
//       </Provider>
//     </ThemeProvider>
//     </StylesProvider>
//   </StrictMode>
// );


import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk'
import reducers from './reducers';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import { ThemeProvider as StylesThemeProvider } from '@mui/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { GoogleOAuthProvider } from '@react-oauth/google';
import {StylesProvider} from '@mui/styles'
import './index.css';
// import theme from './theme.js'; 
// const theme = createTheme();

const theme = createTheme({
  palette: {
    
    background: {
      default: '#29427a', 
      paper: '#f5eddc',   
    },

    primary: {
      main: '#3e5da0',       
      contrastText: '#FFFFFF' 
    },

    secondary: {
      main: '#2db1ba',       
      contrastText: '#FFFFFF' 
    },

    colors: {
      avatar: '#ffffff',
      avatarBackground: '#00000',
    },

    text: {
      primary: '#29427a',  
      secondary: '#29427a', 
      disabled: '#29427a',
      logo: '#f5eddc',
      title: '#f5eddc', 
    },

    button: {
      background: '#29427a',
      text: '#f5eddc',
      border: '#f5eddc',
      hover: '#2db1ba',
      hoverText: '#f5eddc', 
      disableBaground: '#999999',
      disabledText: '#666666',
      disabledBorder: '#999999',
    },


  },
  card : {
    backgroundColor: '#f5eddc',
    text: '#29427a',
    like: 'rgb(0, 0, 0, 1)',
    delete: " rgb(255, 0, 0, 1)",
  }
});


const store = createStore(reducers, compose(applyMiddleware(thunk)));
createRoot(document.getElementById('root')).render(
  <>
    <StylesProvider injectFirst>
    <MuiThemeProvider theme={theme}>
      <StylesThemeProvider theme={theme}>
        <Provider store={store}>
          <GoogleOAuthProvider clientId="431220849207-hpbbj3gh18fshjc35jaavu2hpk6m8460.apps.googleusercontent.com">
            <CssBaseline />
            <App /> 
          </GoogleOAuthProvider>
        </Provider>
      </StylesThemeProvider>
    </MuiThemeProvider>
    </StylesProvider>
  </>
);