// import Head from 'next/head'
// import Image from 'next/image'
// import Link from 'next/link'
import {  Container } from '@mui/material'
import Introduction from '../components/sections/Introduction'
import Projects from '../components/sections/Projects'
import Footer from '../components/sections/Footer'
import Profile from '../public/patrick.json'
// import { BsFillChatTextFill } from 'react-icons/bs'
import About from '../components/sections/About'
import Contact from '../components/sections/Contact'
import { SocialsNav } from '../components/SocialsNav'


export default function Home({ setTheme }) {
  const { projects, socials } = Profile
  return (
    <>
      {/* =========== MAIN =========== */}
      <Container  component='main' maxWidth='lg' sx={{px:{xs:1,sm:2,md:'60px'}}}>
        <Introduction />
        <About/>
        <Projects projects={projects} />
        <Contact/>
        <Footer />
      </Container>
      {/* ========== END MAIN ========= */}

      {/* ========== SOCIALS ========== */}
      <SocialsNav socials={socials}/>
      {/* ========= END SOCIALS ======== */}

    </>

  )
}
