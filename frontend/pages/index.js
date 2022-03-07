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
import Icon from '../components/Icon'
import Awards from '../components/sections/Awards'
import { BsFillChatTextFill } from 'react-icons/bs'


export default function Home({ setTheme }) {
  const { projects, socials } = Profile
  return (
    <Box sx={{}}>
      {/* =========== MAIN =========== */}
      <Container  component='main' maxWidth='lg' sx={{ px: { xs: 1, md: '100px' } }}>
        <Introduction />
        <Projects projects={projects} />
        <Awards/>
        <Footer />
      </Container>
      {/* ========== END MAIN ========= */}

      {/* ========== SOCIALS ========== */}
      <Box sx={{ display: { xs: 'none', md: 'flex' }, flexDirection: 'column', position: 'fixed', bottom: '0', left: '40px', alignItems: 'center' }}>
        {socials.map((social, index) => (
          <Icon key={index} site={social.site} sx={{mb:1}} />
        ))}
        <Box sx={{ border: '1px solid', borderColor: 'text.primary', minHeight: '100px' }}></Box>
      </Box>
      <Box sx={{ display: { xs: 'none', md: 'flex' }, flexDirection: 'column', position: 'fixed', bottom: '0', right: '40px', alignItems: 'center' }}>
        <Icon site='mail' />
        <Box sx={{ border: '1px solid', borderColor: 'text.primary', minHeight: '120px',mt:1 }}></Box>

      </Box>
      {/* ========= END SOCIALS ======== */}

    </Box>

  )
}
