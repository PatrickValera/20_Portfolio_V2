import '../styles/globals.css'
import lightTheme from '../styles/theme/lightTheme'
import darkTheme from '../styles/theme/darkTheme'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { useState } from 'react'


function MyApp({ Component, pageProps }) {
  const [isLightTheme,setLightTheme]=useState(true)
  return (
    <ThemeProvider theme={isLightTheme?lightTheme:darkTheme}>
      <CssBaseline />
      <Component {...pageProps} setTheme={setLightTheme} />
    </ThemeProvider>
  )
}

export default MyApp
