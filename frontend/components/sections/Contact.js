import { Box, Typography } from '@mui/material'
import React from 'react'
import Fade from '../Fade'

const Contact = () => {
  return (
    <Box id='contact'>
      <Fade>
        <Typography variant='h5' sx={{ mt: '10vh', mb: 2 }}>Contact Me</Typography>
      </Fade>
      </Box>
  )
}

export default Contact