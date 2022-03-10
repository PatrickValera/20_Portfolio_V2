import { Box } from '@mui/material'
import React from 'react'

const Fade = ({children,sx}) => {
  return (
    <Box sx={sx}  className='fade'>{children}</Box>
  )
}

export default Fade