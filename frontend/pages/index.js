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
  useEffect(() => {
    console.log('UE')
    const items = document.querySelectorAll(".fade")
    const observer = new IntersectionObserver(entries => {

      entries.forEach(entry => {
        if(!entry.isIntersecting)return
        else entry.target.classList.toggle('show', entry.isIntersecting)
        if(entry.isIntersecting)observer.unobserve(entry.target)
      })
    },{
      threshold:1,
    })

    items.forEach(item => {
      observer.observe(item)
    })
  },[])
  return (
    <Box sx={{ bgcolor: 'primary.light' }}>
      <Header setTheme={setTheme} />
      <Container maxWidth='lg'>
        <Introduction />
        <Projects projects={projects} />
        <Footer />
      </Container>
      <Box sx={{ display: 'flex', flexDirection: 'column', position: 'fixed', bottom: '0', left: '40px', border: '1px solid green' }}>
        <span>A</span>
        <span>B</span>
        <span>C</span>
        <span>D</span>
        <span>E</span>
      </Box>
      <Box sx={{ width: '0', display: 'flex', flexDirection: 'column', position: 'fixed', bottom: '0', right: '40px', border: '1px solid green', overflowWrap: 'break-word' }}>
        <span>Email</span>
      </Box>
    </Box>

  )
}
