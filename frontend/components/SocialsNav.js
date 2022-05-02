import React, { useEffect, useRef, useState } from 'react'
import {
  RiGithubFill,
  RiLinkedinBoxFill,
  RiInstagramLine,
} from 'react-icons/ri'
import { AiFillCodeSandboxCircle } from 'react-icons/ai'
import { Box, Link, Typography } from '@mui/material'
import { BsFillChatTextFill } from 'react-icons/bs'

export const SocialsNav = ({ socials }) => {
  const [fadeClass, setFadeClass] = useState('intro-fade')
  useEffect(() => {
    setFadeClass('intro-fade-done')
  }, [])
  return (
    <Box
      className={fadeClass}
      style={{ transitionDelay: `1.4s` }}
      sx={{
        display: { xs: 'none', md: 'flex' },
        flexDirection: 'column',
        position: 'fixed !important',
        bottom: '0',
        left: '1.3rem',
        alignItems: 'center',
      }}
    >
      {socials.map((social, index) => (
        <Icon key={index} site={social.site} link={social.link} />
      ))}
      <Box
        sx={{
          border: '1px solid',
          borderColor: 'text.primary',
          minHeight: '100px',
        }}
      ></Box>
    </Box>
  )
}

const Icon = ({ site, label, link }) => {
  let icon = useRef(null)
  let props = { size: '1.45rem', className: '' }
  switch (site) {
    case 'github': {
      icon.current = <RiGithubFill {...props} />
      break
    }
    case 'linkedin': {
      icon.current = <RiLinkedinBoxFill {...props} />
      break
    }
    case 'codesandbox': {
      icon.current = <AiFillCodeSandboxCircle {...props} />
      break
    }
    case 'instagram': {
      icon.current = <RiInstagramLine {...props} />
      break
    }
    case 'mail': {
      icon.current = <BsFillChatTextFill {...props} size='1.3rem' />
      break
    }
  }
  return (
    <Box
      sx={[
        {
          mb: 1,
          cursor: 'pointer',
          transform: 'translateY(0)',
          transition: 'all 200ms ease-in-out',
        },
        (theme) => ({
          '&:hover': {
            color: theme.palette.primary.main,
            transform: 'translateY(-5px)',
          },
        }),
      ]}
    >
      <Link color='text.primary' href={link}>
        {icon.current}
      </Link>
      <Typography fontSize='.85rem' sx={{ textOverflow: 'ellipsis' }}>
        {label && label}
      </Typography>
    </Box>
  )
}
