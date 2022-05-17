import { Box } from '@mui/material'
import React from 'react'

const Text = ({path,name}) => {
  if(path===name) return (
    <Box sx={{bgcolor:'red',p:1}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    </Box>
  )
  else return (
    <Box> Folder</Box>
  )
}

export default Text