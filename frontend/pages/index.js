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
      {/* <Box sx={{ display: { xs: 'none', md: 'flex' }, flexDirection: 'column', position: 'fixed', bottom: '0', left: '15px', alignItems: 'center' }}>
        {socials.map((social, index) => (
          <Icon key={index} site={social.site} sx={{mb:1,color:'text.primary'}} link={social.link} />
        ))}
        <Box sx={{ border: '1px solid', borderColor: 'text.primary', minHeight: '100px' }}></Box>
      </Box> */}
      {/* <Box sx={{ display: { xs: 'none', md: 'flex' }, flexDirection: 'column', position: 'fixed', bottom: '0', right: '40px', alignItems: 'center' }}>
        <Icon site='mail' />
        <Box sx={{ border: '1px solid', borderColor: 'text.primary', minHeight: '120px',mt:1 }}></Box>
      </Box> */}
      {/* ========= END SOCIALS ======== */}

    </>

  )
}
