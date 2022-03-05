import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { Box, Container } from '@mui/material'
import Header from '../components/Header'
import Introduction from '../components/sections/Introduction'
import Projects from '../components/sections/Projects'
import Footer from '../components/sections/Footer'

export default function Home({ setTheme }) {
  return (
    <Box sx={{ bgcolor: 'primary.light' }}>
      <Header setTheme={setTheme} />
      <Container maxWidth='lg'>
        <Introduction />
        <Projects />
        <Footer/>
      </Container>
      <Box sx={{display:'flex',flexDirection:'column',position:'fixed',bottom:'0',left:'40px',border:'1px solid green'}}>
        <span>A</span>
        <span>B</span>
        <span>C</span>
        <span>D</span>
        <span>E</span>
      </Box>
      <Box sx={{width:'0',display:'flex',flexDirection:'column',position:'fixed',bottom:'0',right:'40px',border:'1px solid green',overflowWrap:'break-word'}}>
        <span>Email</span>
      </Box>
    </Box>

  )
}
