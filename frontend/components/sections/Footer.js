import { Box, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <Box component='footer' sx={{minHeight:'30vh',width:'100%'}}>
        <Typography variant='body1'sx={{margin:'auto',width:'min-content',whiteSpace:'noWrap'}}>Built by Patrick Valera 2022</Typography>
        </Box>
  )
}

export default Footer