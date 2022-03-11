import { Box, Link, Typography } from '@mui/material'
import React from 'react'
import Fade from '../Fade'

const Contact = () => {
  return (
    <Box id='contact'>
      <Fade>
        <Typography variant='h6' sx={{ mt: '10vh', mb: 2 }}>Contact Me</Typography>
        <Link variant='body1' href='mailto:patrickvalera500@gmail.com'>SAY HELLO</Link>
      </Fade>
      </Box>
  )
}

export default Contact