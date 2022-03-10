import { Box, Typography, Paper, Stack } from '@mui/material'
import React from 'react'
import Fade from '../Fade'
import Icon from '../Icon'
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#eeeee',
  // ...theme.typography.body2,
  fontSize: '.85rem',
  textAlign: 'center',
  // color: 'red',
  // padding: '6px'
}));
const Projects = ({ projects }) => {
  return (
    <Box id='projects'>
      <Fade>
        <Typography variant='h5' sx={{ mt: '10vh', mb: 2 }}>Project Highlights</Typography>
      </Fade>
      {projects.slice(0, 3).map((project, index) => (
          <Fade key={index} sx={{ display:'grid',gridTemplateColumns: 'repeat(12,1fr)', position: 'relative', mb: 2 }}>

            {/* PROJECT IMAGE HERE */}
            <Box sx={{ gridArea: '1/1/-1/7', bgcolor: 'text.disabled' }}>
              <Box sx={{ minHeight: '350px' }}>
              </Box>
            </Box>

            {/* PROJECT DESCRIPTION HERE */}
            <Box sx={{ p: 2, gridArea: '1/6/-1/-1', display: 'flex', flexDirection: 'column', textAlign: 'right', justifyContent: 'center' }}>
              <Typography variant='h6'>{project.title}</Typography>
              <Typography variant='body1' sx={{ bgcolor: 'text.primary', color: 'background.paper', p: 3, mb: 1 }}>{project.description}</Typography>
              <Stack direction='row' spacing={2} sx={{ color: 'blue', justifyContent: 'right', mb: 1 }}>
                {project.stack.map((tool, index) => {
                  return (
                    <Box key={index} sx={{ color: 'red' }}>
                      <Item elevation={0}>{tool}</Item>
                    </Box>
                  )
                })}
              </Stack>
              <Icon site={'github'} />
            </Box>

          </Fade>
      ))}


      <Fade >
        <Typography variant='h5' sx={{ mt: '10vh', mb: 4 }}>Other Projects</Typography>
      </Fade>
      <Box display='flex' sx={{ flexWrap: 'wrap', gap: 2, mb: 4, minHeight: '10px' }}>
        {projects.slice(3, 9).map((project, index) => (
          <Fade key={index} sx={{ flex: '30% 1 1', minWidth: '150px' }}>
            <Box sx={{ p: 1, bgcolor: 'text.primary', color: 'background.paper' }}>
              <Typography variant='h6'>{project.title}</Typography>
              <Typography variant='body1'>{project.description}</Typography>

              <Icon site={'github'} />

            </Box>
          </Fade>
        ))}
      </Box>

    </Box>
  )
}

export default Projects