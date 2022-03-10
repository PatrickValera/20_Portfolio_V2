import { Box, Typography, Paper, Stack } from '@mui/material'
import React from 'react'
import Fade from '../Fade'
import Icon from '../Icon'
import { styled } from '@mui/material/styles';
import { IKImage, IKContext } from 'imagekitio-react';
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
        <Box display='flex' sx={{ mt: '10vh', mb: 2, alignItems: 'center' }}>
          <Typography variant='h5' sx={{}}>Project Highlights</Typography>
        </Box>
      </Fade>

      {/* HIGHLIGHT PROJECTS START HERE */}
      {projects.slice(0, 3).map((project, index) => (
        <Fade key={index} sx={{ display: 'grid', gridTemplateColumns: 'repeat(12,1fr)', position: 'relative', mb: '10vh' }}>
          {/* HIGHLIGHT PROJECT IMAGE HERE */}
          <Box sx={{ gridArea: { xs: '1/1/-1/13', md: '1/1/-1/8' }, bgcolor: 'text.disabled' }}>
            <Box sx={{ }}>
              <IKContext urlEndpoint="https://ik.imagekit.io/oqrgl5cil3a">
                <IKImage
                  path={`/${project.title.toLowerCase()}.png`}
                  className='proj-image'
                  transformation={[{ quality: 50 }]}
                />
              </IKContext>
            </Box>
          </Box>
          {/* HIGHLIGHT PROJECT DESCRIPTION HERE */}
          <Box sx={{ p: 2, zIndex:'5',gridArea: { xs: '1/1/-1/13', md: '1/6/-1/-1' }, display: 'flex', flexDirection: 'column', textAlign: 'right', justifyContent: 'center' }}>
            <Typography variant='h6'>{project.title}</Typography>
            <Typography variant='body1' sx={{ bgcolor: 'text.primary', color: 'background.paper', p: 3, mb: 1 }}>{project.description}</Typography>
            <Stack direction='row' spacing={{ xs: 1, md: 2 }} sx={{ flexWrap: 'wrap', color: 'blue', justifyContent: 'right', mb: 1 }}>
              {project.stack.map((tool, index) => {
                return (
                  <Box key={index} sx={{ color: 'red' }}>
                    <Item elevation={0} xs={{ inlineSize: 'max-content' }}>{tool}</Item>
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
      {/* OTHER PROJECT START HERE */}
      <Box display='flex' sx={{ flexWrap: 'wrap', gap: 2, mb: 4, minHeight: '10px' }}>
        {projects.slice(3, 9).map((project, index) => (
          < Fade key={index} sx={{ flex: '30% 1 1', minWidth: '150px', minHeight: '300px' }}>
            <Box sx={[{ p: 2, display: 'flex', flexDirection: 'column', bgcolor: 'text.primary', color: 'background.paper', height: '100%', cursor: 'pointer', transition: 'all 200ms ease-out' }, theme => ({
              '&:hover': {
                transform: 'translateY(-5px)',
                '.proj-title': {
                  color: theme.palette.primary.dark
                }
              }
            })]}>
              <Typography className='proj-title' variant='h6' gutterBottom>{project.title}</Typography>
              <Typography variant='body1' sx={{ flexGrow: '1', mt: 2 }}>{project.description}</Typography>
              <Icon site={'github'} sx={{ alignSelf: 'flex-end' }} />
            </Box>
          </Fade>
        ))}
      </Box>

    </Box >
  )
}

export default Projects