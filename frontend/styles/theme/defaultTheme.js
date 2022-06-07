import { createTheme } from '@mui/material/styles'

let defaultTheme = createTheme({})
defaultTheme = createTheme({

  components:{
    MuiButton:{
      defaultProps:{
        disableElevation:true,
        disableRipple:true,
        sx:{textTransform:'none'}
      }
    }
  }
})

export default defaultTheme
