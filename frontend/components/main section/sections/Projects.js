import { Box, Typography, Paper, Stack, Button } from '@mui/material'
import React, { useState } from 'react'
import Fade from '../../utils/components/Fade'

import { styled } from '@mui/material/styles'
import { IKImage, IKContext } from 'imagekitio-react'
import { FiExternalLink } from 'react-icons/fi'
import { AiOutlineFolder, AiTwotoneFolderOpen } from 'react-icons/ai'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#eeeee',
  fontSize: '.85rem',
  textAlign: 'center',
}))
const Projects = ({ projects }) => {
  return (
    <Box id='projects' sx={{ px: { xs: 0, md: '50px' } }}>
      {/* HIGHLIGHT PROJECT HEADER START HERE */}
      <Fade>
        <Box display='flex' sx={{ mb: 3, alignItems: 'flex-end' }}>
          <Typography variant='h5' sx={{ mr: 1 }}>
            Project Highlights
          </Typography>
          <Button href='/projects' variant='text' size='medium'>View All</Button>
        </Box>
      </Fade>
      {/* HIGHLIGHT PROJECTS START HERE */}
      {projects.slice(0, 3).map((project, index) => (
        <Fade
          key={index}
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12,1fr)',
            position: 'relative',
            mb: 4,
            zIndex: 4
          }}
        >
          {/* HIGHLIGHT PROJECT IMAGE HERE */}
          <Box sx={{ gridArea: { xs: '1/1/2/13', md: `${index % 2 == 0 ? '1/1/-1/8' : '1/6/-1/-1'}`, }, opacity: '.9' }}>
            <Box
              sx={{
                display: 'flex',
                position: 'relative',
                height: '100%',
                border: ' solid #232323',
                borderWidth: { xs: '1px 0', md: '1px' },
                alignItems: 'stretch',
              }}
            >
              <IKContext urlEndpoint='https://ik.imagekit.io/oqrgl5cil3a'>
                <IKImage
                  path={`/${project.title.toLowerCase()}.png`}
                  className='proj-image'
                  transformation={[{ quality: 50 }]}
                />
              </IKContext>
            </Box>
          </Box>
          {/* HIGHLIGHT PROJECT DESCRIPTION HERE */}
          <Box
            sx={{
              p: 1,
              gridArea: { xs: '2/1/3/13', md: `${index % 2 == 0 ? '1/7/-1/13' : '1/1/-1/7'}` },
              display: 'flex',
              flexDirection: 'column',
              pointerEvents: 'none',
              textAlign: { xs: 'left', md: `${index % 2 == 0 ? 'right' : 'left'}` },
              alignItems: { xs: 'flex-start', md: `${index % 2 == 0 ? 'flex-end' : 'flex-start'}` },
              justifyContent: 'center',
              position: 'relative'
            }}
          >
            <Typography
              variant='h5'
              fontWeight='500'
              sx={{ order: 1, color: 'text.primary', mb: 1 }}
            >
              <Typography component='span' color='primary.main' fontSize='.85rem' fontWeight='600' sx={{ mr: '5px' }}>0{index + 1}</Typography>
              {project.title}
            </Typography>
            <Paper
              elevation='3'
              sx={{
                order: 2,
                p: { xs: 1, md: 3 },
                mb: 2,
                maxWidth: { xs: '370px', md: '700px' },
                pointerEvents: 'all',
              }}
            >
              <Typography
                variant='body1'
              >
                {project.description}
              </Typography>
            </Paper>
            <Stack
              direction='row'
              spacing={{ xs: 1, md: 2 }}
              sx={{
                order: 3,
                justifyContent: 'left',
                mb: 1,
              }}
            >
              {project.stack.map((tool, index) => (
                <Box key={index} sx={{ color: 'red' }}>
                  <Item
                    elevation={0}
                    sx={{
                      fontSize: '.67rem',
                      mb: '.35rem',
                      inlineSize: 'max-content',
                      p: '.25rem',
                    }}
                  >
                    {tool}
                  </Item>
                </Box>)
              )
              }
              <Button size='large' variant='text' color='primary' href={project.link} sx={{ pointerEvents: 'all', minWidth: 'unset' }}>
                <FiExternalLink />
              </Button>
            </Stack>


          </Box>
        </Fade>
      ))}

      {/* OTHER PROJECT HEADER START HERE */}
      <Fade sx={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
        <Typography variant='h4' sx={{ mt: '10vh', mb: 1 }}>
          Other Projects
        </Typography>
        <Button variant='text' size='small' href='/projects' sx={{ ml: 1, mb: 2, py: 0, textDecoration: 'underline' }}>View All</Button>
      </Fade>
      {/* OTHER PROJECT START HERE */}
      <Box
        display='flex'
        sx={{ flexWrap: 'wrap', gap: 2, mb: 3, px: { xs: 1, md: 3 } }}
      >
        {projects.slice(3, 9).map((project, index) => {
          let num = index
          while (num > 2) {
            num -= 3
          }
          return (
            <Fade
              key={index}
              sx={{
                transitionDelay: `${num * 150}ms !important`,
                flex: '30% 1 1',
                minWidth: '160px',
                minHeight: { xs: '150px', md: '200px' },
              }}
            >
              <Box
                sx={[
                  {
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    bgcolor: 'text.primary',
                    color: 'background.paperContrast',
                    bgcolor: 'background.paper',
                    height: '100%',
                    cursor: 'pointer',
                    transition: 'all 200ms ease-out',
                  },
                  (theme) => ({
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      '.proj-title,.folder-close,.folder-open': {
                        color: theme.palette.primary.light,
                      },
                      '.folder-close': {
                        display: 'none',
                      },
                      '.folder-open': {
                        display: 'block',
                      },
                    },
                  }),
                ]}
              >
                <Box display='flex'>
                  <Typography
                    className='proj-title'
                    variant='h6'
                    sx={{ flex: 'min-content 1 1', whiteSpace: 'wrap', inlineSize: '100%' }}
                    gutterBottom
                  >
                    {project.title}
                  </Typography>
                  <Box
                    className='folder-open'
                    sx={{
                      flex: 'auto 0 1',
                      bgcolor: 'red',
                      height: '0',
                      display: 'none',
                      color: 'primary.main'
                    }}
                  >
                    <AiTwotoneFolderOpen style={{ fontSize: '1.8rem' }} />
                  </Box>
                  <Box
                    className='folder-close'
                    sx={{
                      float: 'right',
                      bgcolor: 'red',
                      height: '0',
                      display: 'block',
                      color: 'primary.main'

                    }}
                  >
                    <AiOutlineFolder style={{ fontSize: '1.8rem' }} />
                  </Box>
                </Box>
                <Typography variant='body1' sx={{ flexGrow: '1', mt: 2, mb: 2 }}>
                  {project.description}
                </Typography>
                <Button variant='outlined' color='primary' href={project.link} sx={[{ pointerEvents: 'all', gap: 1 }, { '&:hover': { bgcolor: 'primary.main', color: 'primary.contrastText' } }]}>
                  Live<FiExternalLink />
                </Button>
                {/* <Icon site={'github'} sx={{ alignSelf: 'flex-end' }} />======================= */}
              </Box>
            </Fade>
          )
        })}
      </Box>
    </Box >
  )
}



export default Projects
