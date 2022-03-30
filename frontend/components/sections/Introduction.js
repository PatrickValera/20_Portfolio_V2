import { Button, Link, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import HeroAnimation from '../HeroAnimation'
import { BiRightArrowAlt } from 'react-icons/bi'
const Introduction = () => {
  const [fadeClass, setFadeClass] = useState('intro-fade')
  useEffect(() => {
    setFadeClass('intro-fade-done')
  }, [])
  return (
    <Box
      display='flex'
      className={fadeClass}
      style={{ transitionDelay: `900ms` }}
      sx={{
        gap: 4,
        flexWrap: { xs: 'wrap', sm: 'nowrap' },
        height: '100vh',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
      }}
    >
      {/* SUMMARY ABOUT ME HERE========== */}
      <Box
        className='fade'
        sx={{
          px: { xs: 2, md: 4 },
          flex: '350px 1 1',
          pb: '15vh',
        }}
      >
        <Typography
          variant='body1'
          fontSize='.7rem'
          color='primary.dark'
          fontWeight='600'
        >
          {' '}
          Hello, my name is
        </Typography>
        <Typography
          variant='h1'
          color='primary.main'
          fontWeight='600'
          sx={{
            fontSize: { xs: '2.4rem', sm: '3.1rem', md: '4.5rem', lg: '6rem' },
          }}
        >
          {' '}
          Patrick Valera.
        </Typography>
        <Typography
          variant='body1'
          fontSize='.75rem'
          sx={{ width: '100%', maxWidth: '550px', mb: 2 }}
          gutterBottom
        >
          {`I am a Computer Science student and a web developer. I aim to deepen my understanding of various technologies and build exceptional products.`}
        </Typography>
        <Link href='/ResumePatrickValera.pdf' underline='none'>
          <Button
            variant='outlined'
            endIcon={<BiRightArrowAlt />}
            sx={{ p: '.2rem .4rem' }}
          >
            Resume
          </Button>
        </Link>
      </Box>
      {/* HERO ANIMATION HERE========== */}
      {/* <Box sx={{ flex: '300px 1 1',
      // display:{xs:'none',sm:'block'} 
      }}>
        <HeroAnimation />
      </Box> */}
    </Box>
  )
}

export default Introduction
