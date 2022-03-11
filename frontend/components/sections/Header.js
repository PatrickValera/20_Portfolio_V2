import { Box, Link, Switch, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'

const Header = ({ isLight, setTheme }) => {
  const [navOpen, setNavOpen] = useState(false)
  useEffect(() => {
    const header = document.querySelector('.header')
    console.log(header)
    let lastScroll = window.scrollY
    let handleScroll = () => {
      if (window.scrollY > lastScroll) {
        console.log('down')
        header.style.opacity = '0'
      }
      else {
        console.log('up')
        header.style.opacity = '1'
      }
      console.log(window.scrollY)
      if (window.scrollY > 400) {
        header.style.borderBottom = '1px solid black'
      }
      else {
        header.style.borderBottom = '0px solid black'
      }
      lastScroll = window.scrollY
    }
    window.addEventListener('scroll', handleScroll)
    return (() => {
      window.removeEventListener('scroll', handleScroll)
    })

  }, [])
  return (

    <Box
      className='header'
      sx={{
        zIndex: '5',
        px: 4,
        py: 1,
        position: 'fixed',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        transition: 'all 300ms ease-in-out',
        backgroundColor: 'background.paper'
      }}
    >
      <Typography variant='h5' sx={{ flexGrow: '1' }}>
        PV
      </Typography>
      <Box component='nav' display='flex'
        className={navOpen ? 'nav-open' : 'nav-close'}
        sx={{

          gap: 2,
          transition: 'all 300ms ease-in-out',
          flexDirection: { xs: 'column', md: 'row' },
          position: { xs: 'fixed', md: 'relative' },
          top: '0',
          justifyContent: 'center',
          alignItems: 'center',
          bgcolor: 'background.paper',
          width: { xs: '70vw', md: 'unset' },
          height: { xs: '100vh', md: 'unset' },
          right: { xs: '-70vw', md: 'unset' },
          borderColor: 'background.paper',
          borderLeft: { xs: '1px solid', md: 'unset' },
          borderColor: 'text.primary'

        }}
      >
        {['ABOUT', 'SKILLS', 'PROJECTS', 'CONTACT'].map((section, index) => (
          <Link onClick={() => setNavOpen(false)} key={index} href={`#${section.toLowerCase()}`} underline='none' sx={[{ color: 'text.primary', fontWeight: '600' }, (theme) => ({ '&:hover': { color: 'primary.main' } })]}>
            <Typography variant='body1'>{section}</Typography>
          </Link>
        ))}

      </Box>
      <Box sx={{ zIndex: '5', display: 'flex', alignItems: 'center' }}>
        <Switch
          checked={isLight}
          onChange={() => (setTheme(state => !state))}
          inputProps={{ 'aria-label': 'controlled' }}
        />
        <Box sx={{ cursor: 'pointer',display:{xs:'block',md:'none'} }} onClick={() => setNavOpen(x => !x)}>
          {navOpen ? <AiOutlineClose /> : <FaBars />}
        </Box>
      </Box>
    </Box>

  )
}

export default Header
