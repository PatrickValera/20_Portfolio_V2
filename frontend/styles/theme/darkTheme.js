import { createTheme } from '@mui/material/styles';

let darkTheme = createTheme()

darkTheme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#121212'
        }
      }
    },
    MuiButton:{
      defaultProps:{
        disableElevation:true,
        disableRipple:true
      }
    }
  },
  palette: {
    mode: 'dark',
    primary: {
      dark: 'rgb(255, 167, 38)',
      main: 'rgba(130,190,255,.95)',
      contrastText:'rgba(50,50,20,1)'
    },
    background: {
      header: '#121212',
      nav: '#232323',
      paper: '#222',
      paperContrast: '#eee',
    },
    text:{
      primary:'#dedede'
    }
  },
  typography: {
    body1: {
      fontSize: '.6rem',
      [darkTheme.breakpoints.up('md')]: {
        fontSize: '.6rem',
      },
      [darkTheme.breakpoints.up('sm')]: {
        fontSize: '.9rem',
      },
    },
    body2: {
      fontSize: '0.7rem',
      [darkTheme.breakpoints.up('md')]: {
        fontSize: '1rem',
      },
    },
    h2: {
      fontSize: '2rem',
      [darkTheme.breakpoints.up('md')]: {
        fontSize: '3rem',
      },
    },
    h5: {
      fontSize: '1.4rem',
      [darkTheme.breakpoints.up('md')]: {
        fontSize: '1.75rem',
      },
    },
    h6: {
      fontSize: '1.1rem',
      [darkTheme.breakpoints.up('md')]: {
        fontSize: '1.3rem',
      },
    },
  },
  breakpoints:{
    values:{
      xs:0,
      sm:600,
      md:900,
      lg:1200,
      xl:1550,
    }
  }

});

export default darkTheme;