import { Box, Button, Link, Switch, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'

const Header = ({ isLight, setTheme }) => {
  const [navOpen, setNavOpen] = useState(false)
  const [fadeClass, setFadeClass] = useState('intro-fade')

  useEffect(() => {
    setFadeClass('intro-fade-done')
    const header = document.querySelector('.header')
    let lastScroll = window.scrollY
    let handleScroll = () => {
      if (window.scrollY - 70 > lastScroll) {
        // console.log('down')
        header.style.opacity = '0'
        lastScroll = window.scrollY - 70
      } else if (lastScroll > window.scrollY) {
        lastScroll = window.scrollY
        // console.log('up')
        header.style.opacity = '1'
      }
      if (window.scrollY > 300) {
        header.style.boxShadow = '0px 5px 15px #555'
      } else {
        header.style.boxShadow = 'none'
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <Box
        className='header'
        sx={{
          zIndex: 10,
          py: 2,
          position: 'fixed',
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          transition: 'all 300ms ease-in-out',
          backgroundColor: 'background.paper',
        }}
      >
        <Typography
          variant='h5'
          sx={{ flexGrow: '1',pl:3 }}
          className={fadeClass}
          style={{ transitionDelay: `0` }}
        >
          PV
        </Typography>

        {/* NAVIGATION HERE ====================== */}
        <Box
          component='nav'
          display='flex'
          // className={navOpen ? 'nav-open' : 'nav-close'}
          sx={{
            zIndex: '10',
            opacity: 0.99,
            gap: 2,
            transition: 'all 250ms ease-in-out',
            flexDirection: { xs: 'column', md: 'row' },
            position: { xs: 'fixed', md: 'relative' },
            top: '0',
            justifyContent: 'center',
            alignItems: 'center',
            bgcolor: {xs:'background.nav',md:'unset'},
            width: { xs: '60vw', md: 'unset' },
            height: { xs: '100vh', md: 'unset' },
            right: { xs: `${navOpen ? '0' : '-70vw'}`, md: 'unset' },
            // bgcolor: { xs: 'primary.light', md: 'unset' },
            // borderColor: 'background.paper',
            // borderLeft: { xs: '1px solid', md: 'unset' },
            // borderColor: 'red'
          }}
        >
          {['ABOUT', 'SKILLS', 'PROJECTS', 'CONTACT'].map((section, index) => (
            <Link
              className={fadeClass}
              underline='none'
              key={index}
              href={`#${section.toLowerCase()}`}
              style={{ transitionDelay: `${(index + 2) * 100}ms` }}
              sx={[
                { color: 'text.primary', fontWeight: '600' },
                (theme) => ({ '&:hover': { color: 'primary.main' } }),
              ]}
              onClick={() => setNavOpen(false)}
            >
              <Typography variant='body1'>{section}</Typography>
            </Link>
          ))}
          {/* THEME SWITCHER HERE ============ */}
          <Box className={fadeClass} style={{ transitionDelay: `500ms` }}>
            <Switch
              checked={isLight}
              onChange={() => setTheme((state) => !state)}
              inputProps={{ 'aria-label': 'controlled' }}
            />
          </Box>
        </Box>

        {/* MENU BUTTON HERE  */}
        <Box
          className={fadeClass}
          style={{ transitionDelay: `200ms` }}
          sx={{ zIndex: '15', display: 'flex', alignItems: 'center',pr:3 }}
        >
          <Button
            sx={{
              cursor: 'pointer',
              alignItems: 'center',
              minWidth: '0',
              display: { xs: 'flex', md: 'none' },
            }}
            onClick={() => setNavOpen((x) => !x)}
          >
            {navOpen ? (
              <AiOutlineClose size='1.4rem' />
            ) : (
              <FaBars size='1.4rem' />
            )}
          </Button>
        </Box>
      {/* BLUR BG HERE */}
      <Box
        className='blurbg'
        onClick={() => setNavOpen(false)}
        sx={[
          {
            pointerEvents:`${navOpen?'all':'none'}`,
            transition:'all 500ms ease-in-out',
            width: '100%',
            bottom: '0',
            top: '0',
            position: 'fixed',
            zIndex: '5',
              backdropFilter: `${navOpen?'blur(3px)':'blur(0px)'}`,
              // bgcolor:'red'
          },
         
        ]}
      ></Box>
      </Box>

    </>
  )
}

export default Header
