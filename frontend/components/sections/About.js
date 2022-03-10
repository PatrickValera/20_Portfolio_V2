import React from 'react'
import Fade from '../Fade'
import { Box, Typography, Stack, Paper } from '@mui/material'
import { styled } from '@mui/material/styles';
import { IoIosFolder } from 'react-icons/io'
import Icon from '../Icon';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#eeeee',
    ...theme.typography.body2,
    fontSize: '.85rem',
    textAlign: 'center',
    color: theme.palette.text.secondary,
    padding: '6px'
}));

const About = () => {
    return (
        <Box id='about' sx={{ display: 'flex', mb: '20vh' }}>
            <Box sx={{ flex: '500px 1 1', p: 2 }}>
                <Fade>
                    <Typography variant='h5' sx={{ mb: 4 }}>
                        About Me
                    </Typography>
                </Fade>
                <Fade>
                    <Typography variant='body2' sx={{ mb: 3 }}>
                        {`Hi there. My name is Patrick and I'm a passionate web developer. I had a early introduction to web development back in 2012 but I never really started seriously learning about web development until 2020.`}
                    </Typography>
                    <Typography variant='body2' sx={{ mb: 3 }}>
                        {` For the most part, I taught myself how to create web apps thru youtube tutorials, and Udemy courses. I've garned numerous certificates and built 10+ projects in the last year. I also recenlty won my first hackathon which was orginized by MongoDB.`}
                    </Typography>
                    <Typography variant='body2' sx={{ mb: 1 }}>
                        {`Herer are some technologies I'm currently learning:`}
                    </Typography>
                    <Stack direction='row' spacing={2} sx={{ pl: 2 }}>
                        <Item>TypeScript</Item>
                        <Item>Redis</Item>
                        <Item>GraphQL</Item>
                        <Item>Docker</Item>
                    </Stack>
                </Fade>
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'block' }, flex: '300px 1 1' }}>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', border: '3px solid', borderColor: 'text.primary', height: '400px', p: 4 }}>
                    <Icon label='Photos' sx={{ mx: 2, flex: '70px 1 1', alignItems: 'center', display: 'flex', flexDirection: 'column' }}><IoIosFolder size='2.5rem' /></Icon>
                    <Icon label='Documents' sx={{ mx: 2, flex: '70px 1 1', alignItems: 'center', display: 'flex', flexDirection: 'column' }}><IoIosFolder size='2.5rem' /></Icon>
                    <Icon label='Others' sx={{ mx: 2, flex: '70px 1 1', alignItems: 'center', display: 'flex', flexDirection: 'column' }}><IoIosFolder size='2.5rem' /></Icon>
                </Box>
            </Box>
        </Box>
    )
}

export default About