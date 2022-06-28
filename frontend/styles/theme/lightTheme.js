import { createTheme } from '@mui/material/styles'

let lightTheme = createTheme({})
lightTheme = createTheme({
  palette: {
    mode: 'light',
    background:{
      header:'#fff',
      nav:'rgb(120, 215, 255)',
      paper:'#eaeaea',
      paperContrast:'#131313'
    }
  },
  typography: {
    body1: {
      fontSize: '.6rem',
      [lightTheme.breakpoints.up('md')]: {
        fontSize: '.6rem',
      },
      [lightTheme.breakpoints.up('sm')]: {
        fontSize: '.9rem',
      },
    },
    body2: {
      fontSize: '0.7rem',
      [lightTheme.breakpoints.up('md')]: {
        fontSize: '1rem',
      },
    },
    h2: {
      fontSize: '2rem',
      [lightTheme.breakpoints.up('md')]: {
        fontSize: '3rem',
      },
    },
    h5: {
      fontSize: '1.4rem',
      [lightTheme.breakpoints.up('md')]: {
        fontSize: '1.75rem',
      },
    },
    h6: {
      fontSize: '1.1rem',
      [lightTheme.breakpoints.up('md')]: {
        fontSize: '1.3rem',
      },
    },
  },
  components:{
    MuiButton:{
      defaultProps:{
        disableElevation:true,
        disableRipple:true,
        sx:{textTransform:'none'}
      }
    }
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
})

export default lightTheme
