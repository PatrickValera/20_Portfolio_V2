import { Box, Button, Link, Typography } from '@mui/material'
import React from 'react'
import Fade from '../Fade'
import { FiSend } from 'react-icons/fi'
const Contact = () => {
  return (
    <Box id='contact' sx={{ mb: '15vh' }}>
      <Fade sx={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
        <Typography variant='h6' sx={{ mt: '10vh', mb: 2 }}>Contact Me</Typography>
        <Typography variant='body1' sx={{ mb: 2 ,textAlign:'center'}}>I am curently looking for new opportunites and open for work<br/> Send me a message and I'll make sure to respond.</Typography>
        <Button variant='outlined'>
          <Link underline='none' variant='body1' href='mailto:patrickvalera500@gmail.com' >Say Hi <FiSend /></Link>
        </Button>
      </Fade>
    </Box>
  )
}

export default Contact