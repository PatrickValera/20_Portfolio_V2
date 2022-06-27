import { Box, Button, Link, Switch, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { FaBars, FaMoon, FaSun } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import { TiWeatherSunny } from 'react-icons/ti'
const Header = ({ isLightTheme, setTheme }) => {
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
        component='header'
        sx={{
          zIndex: 10,
          p: 2,
          position: 'fixed',
          display: 'flex',
          width: '100%',
          transition: 'all 300ms ease-in-out',
          backgroundColor: 'background.header',
        }}
      >
        <Typography
          variant='h5'
          sx={{ flexGrow: '1' }}
          className={fadeClass}
          style={{ transitionDelay: `0` }}
        >
          PV
        </Typography>

        {/* NAVIGATION HERE ====================== */}
        <Box
          component='nav'
          display='flex'
          sx={{
            opacity: 0.99,
            gap: 2,
            transition: 'all 250ms ease-in-out',
            flexDirection: { xs: 'column', md: 'row' },
            position: { xs: 'fixed', md: 'relative' },
            top: '0',
            justifyContent: 'center',
            alignItems: 'center',
            bgcolor: { xs: 'background.nav', md: 'unset' },
            width: { xs: '60vw', md: 'unset' },
            height: { xs: '100vh', md: 'unset' },
            right: { xs: `${navOpen ? '0' : '-70vw'}`, md: 'unset' },
          }}
        >
          {['Projects', 'Contact'].map((section, index) => (
            <Link
              className={fadeClass}
              underline='none'
              key={index}
              href={`/#${section.toLowerCase()}`}
              style={{ transitionDelay: `${(index + 3) * 100}ms` }}
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
          <Box className={fadeClass} style={{ transitionDelay: `200ms` }}>
            <Button
              size='small'
              variant='contained'
              color='warning'
              onClick={() => setTheme((state) => !state)}
              sx={{ fontSize: '.8rem', minWidth: 'unset', p: '.3rem',width:'1.8rem',height:'1.8rem' }}
            >
              {isLightTheme ? (
                <FaMoon color='#fcf3c5' size='1rem' />
              ) : (
                <FaSun color='#fcf3c5' size='1.2rem' />
              )}
            </Button>
          </Box>
        </Box>
        {/* MENU BUTTON HERE | Visible on mobile only  */}
        <Box
          className={fadeClass}
          style={{ transitionDelay: `200ms` }}
          sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}
        >
          <Button
            sx={{
              cursor: 'pointer',
              alignItems: 'center',
              minWidth: '0',
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
        {/* BLUR BG HERE | Visible on mobile only */}
        <Box
          className='blurbg'
          onClick={() => setNavOpen(false)}
          sx={[
            {
              pointerEvents: `${navOpen ? 'all' : 'none'}`,
              transition: 'all 500ms ease-in-out',
              width: '100%',
              height: '100%',
              position: 'fixed',
              zIndex: '-1',
              backdropFilter: `${navOpen ? 'blur(3px)' : 'blur(0px)'}`,
            },
          ]}
        ></Box>
      </Box>
    </>
  )
}

export default Header
