import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App";
// import { ThemeProvider, createTheme } from '@material-ui/core/styles';
// import CssBaseline from '@material-ui/core/CssBaseline';
// const theme = createTheme({
//   palette : {
//     type : "dark"
//   }
// });

ReactDOM.render(
  // <ThemeProvider theme = {theme}>
  // {/* <CssBaseline/> */}
    <App />
  // </ThemeProvider>
  ,
  document.getElementById('root')
);

