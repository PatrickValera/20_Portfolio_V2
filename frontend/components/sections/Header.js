import { Box, Button, Link, Switch, Typography } from '@mui/material'
import React from 'react'

const Header = ({ isLight,setTheme }) => {
  return (
    <Box component='header' sx={{p:1, position: 'sticky', top: '0', zIndex: 10 }}>
      <Box
        sx={{
          px: 2,
          position: 'absolute',
          bgcolor: 'background.paper',
          display: 'flex',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <Typography variant='h6' sx={{ flexGrow: '1' }}>
          PV
        </Typography>
        <Box component='nav' display='flex' sx={{ gap: 2 }}>
          <Link
            href='#projects'
            underline='none'
            sx={{ color: 'text.primary' }}
          >
            Works
          </Link>
          <Link href='#awards' underline='none' sx={{ color: 'text.primary' }}>
            Awards
          </Link>
        </Box>
        <Switch
          checked={isLight}
          onChange={()=>(setTheme(state=>!state))}
          inputProps={{ 'aria-label': 'controlled' }}
        />
      </Box>
    </Box>
  )
}

export default Header
