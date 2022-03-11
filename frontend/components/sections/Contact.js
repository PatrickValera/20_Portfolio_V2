import { Box, Link, Typography } from '@mui/material'
import React from 'react'
import Fade from '../Fade'

const Contact = () => {
  return (
    <Box id='contact'>
      <Fade>
        <Typography variant='h6' sx={{ mt: '10vh', mb: 2 }}>Contact Me</Typography>
        <Typography variant='body1' sx={{  mb: 2 }}>You can message me about anything through email.</Typography>
        <Link variant='body1' href='mailto:patrickvalera500@gmail.com' sx={{p:1,border:'1px solid black'}}>SAY HELLO</Link>
      </Fade>
      </Box>
  )
}

export default Contact