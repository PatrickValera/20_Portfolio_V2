import React, { useState } from 'react'
import Fade from '../../utils/components/Fade'
import { Box, Typography, Stack, Paper } from '@mui/material'
import { styled } from '@mui/material/styles'

import HeroAnimation from '../HeroAnimation'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#eeeee',
  ...theme.typography.body2,
  fontSize: '.70rem',
  textAlign: 'center',
  color: theme.palette.text.secondary,
  padding: '3px',
}))

const About = () => {
  const [path, setPath] = useState('/')
  return (
    <Box
      id='about'
      sx={{
        // display: 'flex',
        display:'none',
        mb: '20vh',
        flexWrap: 'wrap',
        gap: 2,
        alignItems: 'center',
        px: { xs: 0, md: 2 },
      }}
    >
      {/* ABOUT ME PARAGRAPHS HERE ================= */}
      <Box sx={{ flex: '400px 1 1', px: 2 }}>
        <Fade>
          <Typography variant='h5' sx={{ mb: 4 }}>
            About Me
          </Typography>
        </Fade>
        <Fade>
          <Typography variant='body2' sx={{ mb: 1 }}>
            {/* {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`} */}
            {/* {`Hi there. My name is Patrick and I'm a passionate web developer. I had a early introduction to web development back in 2012 but I never really started seriously learning about web development until 2020.`}
                        <br style={{ display: 'block', margin: '1.5rem', content: '""' }} />
                        {` For the most part, I taught myself how to create web apps thru youtube tutorials, and Udemy courses. I've garned numerous certificates and built 10+ projects in the last year. I also recenlty won my first hackathon which was orginized by MongoDB.`}
                        <br style={{ display: 'block', margin: '1.5rem', content: '""' }} />
                        {`Herer are some technologies I'm currently learning:`} */}
            {`Hi there. I'm Patrick and I'm a passionate web developer who enjoys creating web interfaces. My coding journey began in 2012 when I took web development and programming classes. Some of my early projects involved using HTML and CSS to create static websites.`}
            <br style={{ display: 'block', margin: '1.5rem', content: '""' }} />
            {`As of today, I have gained considerable technical knowledge on some of the most popular technologies such as React, VueJS, MongoDB and NodeJS. My technical background has allowed me to create noteworthy projects and win hackathons such as `}
            <Typography component='span' color='success.main'>
              {' '}
              <a
                href='https://dev.to/devteam/congrats-to-the-mongodb-atlas-hackathon-winners-4cc0'
                style={{ textDecoration: 'underline' }}
              >
                {`MongoDB's 2021 E-commerce hackathon`}
              </a>
            </Typography>
            <br style={{ display: 'block', margin: '1.5rem', content: '""' }} />
            {`At the moment, I'm honing my skills on the following technologies:`}
          </Typography>
          <Stack
            direction='row'
            sx={{ pl: 1, flexWrap: 'wrap', gap: 1, justifyContent: 'left' }}
          >
            <Item>TypeScript</Item>
            <Item>Algorithms</Item>
            <Item>AWS</Item>
          </Stack>
        </Fade>
      </Box>
      {/* END OF ABOUT ME PARAGRAPHS HERE ========== */}
      {/* FILE SYSTEM ============================== */}
      <Box sx={{ flex: '300px 1 1'}}>
        <Fade>
          {/* <Folder setPath={setPath} path={path} name='/'>
                        <Folder setPath={setPath} path={path} name='/Photos'>
                            <Folder setPath={setPath} path={path} name='/Photos/me'>
                                <Gallery />
                            </Folder >
                            <Folder setPath={setPath} path={path} name='/Photos/others'>
                                <p>PICS </p>
                            </Folder >
                        </Folder >
                        <Folder setPath={setPath} path={path} name='/Documents'>
                            <Text path={path} name='/Documents/text'>DOCS</Text>
                        </Folder>
                        <Folder setPath={setPath} path={path} name='/Other'>
                            <p>OTHER FILES</p>
                        </Folder>
                    </Folder> */}
          <HeroAnimation />
        </Fade>
      </Box>
      {/* END OF FILE SYSTEM ======================== */}
    </Box>
  )
}

export default About
