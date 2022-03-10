import { Box, Button, Link, Switch, Typography } from '@mui/material'
import React, { useEffect } from 'react'

const Header = ({ isLight,setTheme }) => {
  const handleScroll=(header)=>{
    console.log('hello')
    let scrollTop=document.documentElement.scrollTop
    if(0<scrollTop){
      header.style.top='-100%'
    }
    else{
      header.style.top='0'
    }
  }
  useEffect(()=>{
    const header=document.querySelector('.header')
    let lastScroll=window.scrollY
    let handleScroll=()=>{
      if(window.scrollY>lastScroll){
        header.style.opacity='0'
      }
      else{
        header.style.opacity='1'
      }
      lastScroll=window.scrollY
    }
    
    window.addEventListener('scroll',handleScroll)

    return (()=>{
      window.removeEventListener('scroll'.handleScroll)
    })
   
  },[])
  return (
    <Box component='header' className='header' sx={{ transition:'all 200ms ease-in-out',position: 'sticky',top:0,transform:'translateY(0px)',  zIndex: 10 }}>
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
