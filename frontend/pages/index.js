import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { Box, Container } from '@mui/material'
import Header from '../components/sections/Header'
import Introduction from '../components/sections/Introduction'
import Projects from '../components/sections/Projects'
import Footer from '../components/sections/Footer'
import Profile from '../public/patrick.json'
import { useEffect } from 'react'


export default function Home({ setTheme }) {
  const { projects } = Profile
 
  return (
    <Box sx={{ }}>
      <Container maxWidth='lg' sx={{}}>
        <Introduction />
        <Projects projects={projects} />
        <Footer />
      </Container>
      <Box sx={{ display: {xs:'none', md:'flex'}, flexDirection: 'column', position: 'fixed', bottom: '0', left: '40px' }}>
        <span>A</span>
        <span>B</span>
        <span>C</span>
        <span>D</span>
        <span>E</span>
      </Box>
      <Box sx={{ display: {xs:'none', md:'flex'}, width: '0', flexDirection: 'column', position: 'fixed', bottom: '0', right: '40px', overflowWrap: 'break-word' }}>
        <span>Email</span>
      </Box>
    </Box>

  )
}
