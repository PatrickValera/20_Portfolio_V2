import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Box, Container } from '@mui/material'
import Introduction from '../components/sections/Introduction'
import Projects from '../components/sections/Projects'
import Footer from '../components/sections/Footer'
import Profile from '../public/patrick.json'
import Icon from '../components/Icon'
import { BsFillChatTextFill } from 'react-icons/bs'
import About from '../components/sections/About'
import Contact from '../components/sections/Contact'
import { SocialsNav } from '../components/SocialsNav'


export default function Home({ setTheme }) {
  const { projects, socials } = Profile
  return (
    <>
      {/* =========== MAIN =========== */}
      <Container  component='main' maxWidth='lg' sx={{} }>
        <Introduction />
        <About/>
        <Projects projects={projects} />
        <Contact/>
        <Footer />
      </Container>
      {/* ========== END MAIN ========= */}

      {/* ========== SOCIALS ========== */}
     
      <SocialsNav socials={socials}/>
      {/* <Box sx={{ display: { xs: 'none', md: 'flex' }, flexDirection: 'column', position: 'fixed', bottom: '0', right: '40px', alignItems: 'center' }}>
        <Icon site='mail' />
        <Box sx={{ border: '1px solid', borderColor: 'text.primary', minHeight: '120px',mt:1 }}></Box>
      </Box> */}
      {/* ========= END SOCIALS ======== */}

    </>

  )
}
