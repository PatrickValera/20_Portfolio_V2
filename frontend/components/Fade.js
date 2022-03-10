import { Box } from '@mui/material'
import React from 'react'

const Fade = ({children,sx,key}) => {
  return (
    <Box sx={sx} key={key} className='fade'>{children}</Box>
  )
}

export default Fade