import { Typography } from '@mui/material'
import React from 'react'
import {Box} from '@mui/material'
const Introduction = () => {
  return (
    <Box display='flex' sx={{p:'50px 0',height:'100vh',border:'5px solid red',flexDirection:'column', justifyContent:'center' }}>
      <Typography variant='body1'> Hello, my name is</Typography>
      <Typography variant='h3'> Patrick Valera.</Typography>
      <Typography variant='body1'> A Software Engineer student and a self-taught web developer. I aim to deepen my understanding of various technologies and build exceptional products.</Typography>
    </Box>
  )
}

export default Introduction