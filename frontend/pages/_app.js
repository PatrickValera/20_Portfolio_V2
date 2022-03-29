import '../styles/globals.css'
import lightTheme from '../styles/theme/lightTheme'
import darkTheme from '../styles/theme/darkTheme'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { useEffect, useState } from 'react'
import Header from '../components/sections/Header'


function MyApp({ Component, pageProps }) {
  const [isLightTheme,setLightTheme]=useState(false)
  useEffect(() => {
    const items = document.querySelectorAll(".fade")
    const observer = new IntersectionObserver(entries => {

      entries.forEach(entry => {
        if(!entry.isIntersecting)return
        else entry.target.classList.toggle('show', entry.isIntersecting)
        if(entry.isIntersecting)observer.unobserve(entry.target)
      })
    },{
      threshold:0,
      rootMargin:'-35% 0% -35% 0%',
    })

    items.forEach(item => {
      observer.observe(item)
    })
  },[isLightTheme])
  return (
    <ThemeProvider theme={isLightTheme?lightTheme:darkTheme}>
      <CssBaseline />
      <Header setTheme={setLightTheme} />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
