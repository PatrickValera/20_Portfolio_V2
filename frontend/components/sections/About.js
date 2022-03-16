import React, { useState } from 'react'
import Fade from '../Fade'
import { Box, Typography, Stack, Paper } from '@mui/material'
import { styled } from '@mui/material/styles';
import Folder from '../file-system/Folder';
import Gallery from '../Gallery';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#eeeee',
    ...theme.typography.body2,
    fontSize: '.85rem',
    textAlign: 'center',
    color: theme.palette.text.secondary,
    padding: '6px'
}));

const About = () => {
    const [path, setPath] = useState('/')
    return (
        <Box id='about' sx={{ display: 'flex', mb: '20vh',px:{xs:0,md:2} }}>
            {/* ABOUT ME PARAGRAPHS HERE ================= */}
            <Box sx={{ flex: '400px 1 1', px: 2 }}>
                <Fade>
                    <Typography variant='h5' sx={{ mb: 4 }}>
                        About Me
                    </Typography>
                </Fade>
                <Fade>
                    <Typography variant='body2' sx={{ mb: 1, }}>
                        {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`}
                        {/* {`Hi there. My name is Patrick and I'm a passionate web developer. I had a early introduction to web development back in 2012 but I never really started seriously learning about web development until 2020.`}
                        <br style={{ display: 'block', margin: '1.5rem', content: '""' }} />
                        {` For the most part, I taught myself how to create web apps thru youtube tutorials, and Udemy courses. I've garned numerous certificates and built 10+ projects in the last year. I also recenlty won my first hackathon which was orginized by MongoDB.`}
                        <br style={{ display: 'block', margin: '1.5rem', content: '""' }} />
                        {`Herer are some technologies I'm currently learning:`} */}
                    </Typography>
                    <Stack direction='row' sx={{ pl: 2, flexWrap: 'wrap', gap: 1, justifyContent: 'left' }}>
                        <Item>TypeScript</Item>
                        <Item>Redis</Item>
                        <Item>GraphQL</Item>
                        <Item>Docker</Item>
                    </Stack>
                </Fade>
            </Box>
            {/* END OF ABOUT ME PARAGRAPHS HERE ========== */}
            {/* FILE SYSTEM ============================== */}
            <Box sx={{ display: { xs: 'none', md: 'block' }, flex: '300px 1 1' }}>
                <Fade sx={{ border: '3px solid', borderColor: 'text.primary', height: '400px', p: 1 }}>
                    <Folder setPath={setPath} path={path} name='/'>
                        <Folder setPath={setPath} path={path} name='/Photos'>
                            <Folder setPath={setPath} path={path} name='/Photos/me'>
                                <Gallery />
                            </Folder >
                            <Folder setPath={setPath} path={path} name='/Photos/places'>
                                <p>PICS </p>
                            </Folder >
                        </Folder >
                        <Folder setPath={setPath} path={path} name='/Documents'>
                            <p>SOME DOCUMENTS</p>
                        </Folder>
                        <Folder setPath={setPath} path={path} name='/Other'>
                            <p>OTHER FILES</p>
                        </Folder>
                    </Folder>
                </Fade>
            </Box>
            {/* END OF FILE SYSTEM ======================== */}
        </Box>
    )
}

export default About