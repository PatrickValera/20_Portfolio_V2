import '../styles/globals.css'
import lightTheme from '../styles/theme/lightTheme'
import darkTheme from '../styles/theme/darkTheme'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { useEffect, useState } from 'react'


function MyApp({ Component, pageProps }) {
  const [isLightTheme, setLightTheme] = useState(true)
  useEffect(() => {
    const items = document.querySelectorAll(".fade")
    const observer = new IntersectionObserver(entries => {

      entries.forEach(entry => {
        if (!entry.isIntersecting) return
        else entry.target.classList.toggle('show', entry.isIntersecting)
        if (entry.isIntersecting) observer.unobserve(entry.target)
      })
    }, {
      threshold: 0,
      rootMargin: '-25% 0% -25% 0%',
    })

    items.forEach(item => {
      observer.observe(item)
    })
    return (() => {
      items.forEach(item => {
        item.classList.toggle('show')
      })
    })
  }, [isLightTheme])
  return (
    <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
      <CssBaseline />
      <Component {...pageProps} isLightTheme={isLightTheme} setTheme={setLightTheme} />
    </ThemeProvider>
  )
}

export default MyApp
