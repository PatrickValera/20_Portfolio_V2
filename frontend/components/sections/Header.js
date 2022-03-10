import { Box, Button, Link, Switch, Typography } from '@mui/material'
import React, { useEffect } from 'react'

const Header = ({ isLight,setTheme }) => {
  useEffect(()=>{

  },[])
  return (
    <Box component='header' sx={{ position: 'sticky', top: '0', zIndex: 10 }}>
      <Box
        sx={{
          px: 2,
          py:1,
          position: 'absolute',
          bgcolor: 'background.paper',
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          overflow:'hidden'
        }}
      >
        <Typography variant='h5' sx={{ flexGrow: '1' }}>
          PV
        </Typography>
        <Box component='nav' display='flex' sx={{ gap: 2,flexDirection:{xs:'column',md:'row'},position:{xs:'absolute',md:'relative'},top:'0',right:{xs:'-200px',md:'unset'} }}>
          {['ABOUT','SKILLS','PROJECTS','CONTACT'].map((section,index)=>(
            <Link key={index} href={`#${section.toLowerCase()}`} underline='none' sx={[{color:'text.primary',fontWeight:'600'},(theme)=>({'&:hover':{color:'primary.main'}})]}>
              <Typography variant='body1'>{section}</Typography>
              </Link>
          ))}
    
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
