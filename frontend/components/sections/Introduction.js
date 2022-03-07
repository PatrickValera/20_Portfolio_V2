import { Button, Typography } from '@mui/material'
import React from 'react'
import { Box } from '@mui/material'
const Introduction = () => {
  return (
    <Box display='flex' sx={{ p: '0 10%', height: '100vh', flexDirection: 'column', justifyContent: 'center', maxWidth:'800px' }}>
      <Box className='fade'sx={{ maxWidth: '450px' }}>
        <Typography variant='body1'> Hello, my name is</Typography>
        <Typography variant='h2'> Patrick Valera.</Typography>
        <Typography variant='body1' gutterBottom> A Software Engineer student and a self-taught web developer. I aim to deepen my understanding of various technologies and build exceptional products.</Typography>
        <Button variant='outlined'>View Resume</Button>
      </Box>
    </Box>
  )
}

export default Introduction