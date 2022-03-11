import { createTheme } from '@mui/material/styles';

let darkTheme=createTheme({})
darkTheme = createTheme({
  palette: {
    mode: 'dark',
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
});

export default darkTheme;