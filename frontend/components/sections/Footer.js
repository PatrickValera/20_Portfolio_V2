import { Box, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <Box component='footer' sx={{ width: '100%', mt: '10vh',mb:'5vh'}}>
      <Typography
        variant='body1'
        sx={{ margin: 'auto', width: 'min-content', whiteSpace: 'noWrap',textAlign:'center' }}
      >
        Built by Patrick Valera 2022<br/>
        Bootstrapped with NEXTJS <br/>
        Hosted by Vercel
      </Typography>
    </Box>
  )
}

export default Footer
