import { Button, Typography } from '@mui/material'
import React from 'react'
import { Box } from '@mui/material'
import HeroAnimation from '../HeroAnimation'
import { BiRightArrowAlt } from 'react-icons/bi'
const Introduction = () => {
  return (
    <Box display='flex' sx={{
      gap: 4,
      flexWrap: 'wrap',
      height: '100vh',
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center',
    }}>
      <Box className='fade' sx={{
        pl: { xs: 1, md: 4 },
        flex: '350px 1 1'
      }}>
        <Typography variant='body1' color='primary.main'> Hello, my name is</Typography>
        <Typography variant='h2'> Patrick Valera.</Typography>
        <Typography variant='body1' sx={{ maxWidth: '330px' }} gutterBottom>
          {`I am a Computer Science student and a self-taught web developer. I aim to deepen my understanding of various technologies and build exceptional products.`}
        </Typography>
        <Button variant='text' endIcon={<BiRightArrowAlt />}>
          <Typography variant='body1'>View Resume</Typography>
        </Button>
      </Box>
      <Box sx={{ flex: '300px 1 1' }}>
        <HeroAnimation />
      </Box>
    </Box>
  )
}

export default Introduction