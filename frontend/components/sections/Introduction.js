import { Button, Typography } from '@mui/material'
import React from 'react'
import { Box } from '@mui/material'
import HeroAnimation from '../HeroAnimation'
import {BiRightArrowAlt} from 'react-icons/bi'
const Introduction = () => {
  return (
    <Box display='flex' sx={{ height: '100vh', alignItems: 'center',alignContent:'center',gap:4, justifyContent:'center',flexWrap:'wrap' }}>
      <Box className='fade'sx={{ pl:4,flexGrow:'1'}}>
        <Typography variant='body1'> Hello, my name is</Typography>
        <Typography variant='h2'> Patrick Valera.</Typography>
        <Typography variant='body1' sx={{maxWidth:'450px'}} gutterBottom> A Computer Science student and a self-taught web developer. I aim to deepen my understanding of various technologies and build exceptional products.</Typography>
        <Button variant='text' endIcon={<BiRightArrowAlt/>}>View Resume</Button>
      </Box>
      <HeroAnimation/>
    </Box>
  )
}

export default Introduction