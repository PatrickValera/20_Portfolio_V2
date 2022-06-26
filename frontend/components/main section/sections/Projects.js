import { Box, Typography, Paper, Stack, Button } from '@mui/material'
import React, { useState } from 'react'
import Fade from '../../utils/components/Fade'

import { styled } from '@mui/material/styles'
import { IKImage, IKContext } from 'imagekitio-react'
import { FiExternalLink } from 'react-icons/fi'
import { AiOutlineFolder, AiTwotoneFolderOpen } from 'react-icons/ai'
import Link from 'next/link'

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
            border: { xs: '1px solid black', md: 'unset' },
            // pointerEvents:'none',
            zIndex: 4
          }}
        >
          {/* HIGHLIGHT PROJECT IMAGE HERE */}
          <Box sx={{ gridArea: { xs: '1/1/-1/13', md: `${index % 2 == 0 ? '1/1/-1/8' : '1/6/-1/-1'}`, } }}>
            <Box
              className=''
              sx={{
                display: 'flex',
                position: 'relative',
                height: '100%',
                border: { xs: 'unset', md: '3px solid #232323' },
                alignItems: 'stretch',
                filter: { xs: 'blur(1px)', md: 'unset' },
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
              p: 2,
              gridArea: { xs: '1/1/-1/13', md: `${index % 2 == 0 ? '1/6/-1/-1' : '1/1/-1/8'}` },
              display: 'flex',
              flexDirection: 'column',
              pointerEvents: 'none',
              textAlign: { xs: 'left', md: `${index % 2 == 0 ? 'right' : 'left'}` },
              alignItems: { xs: 'center', md: `${index % 2 == 0 ? 'flex-end' : 'flex-start'}` },
              justifyContent: 'center',
              bgcolor: { xs: 'rgba(100,110,120,.77)', md: 'unset' },
              zIndex: 5
            }}
          >
            <Typography
              variant='h5'
              sx={{ color: { xs: 'white', md: 'text.primary' } }}
            >
              {project.title}
            </Typography>
            <Typography
              variant='body1'
              sx={{
                bgcolor: 'background.paper',
                color: 'background.paperContrast',
                p: { xs: 1, md: 3 },
                mb: 1,
                border: '2px solid',
                pointerEvents: 'all',
                borderColor: 'background.paperContrast',
                maxWidth: { xs: '350px', md: '700px' },
              }}
            >
              {project.description}
            </Typography>
            <Stack
              direction='row'
              spacing={{ xs: 1, md: 2 }}
              sx={{
                flexWrap: 'wrap',
                color: 'blue',
                justifyContent: 'center',
                mb: 1,
              }}
            >
              {project.stack.map((tool, index) => {
                return (
                  <Box key={index} sx={{ color: 'red' }}>
                    <Item
                      elevation={0}
                      sx={{
                        fontSize: '.68rem',
                        mb: '.35rem',
                        inlineSize: 'max-content',
                        px: 1,
                      }}
                    >
                      {tool}
                    </Item>
                  </Box>
                )
              })}
            </Stack>
            <Button variant='contained' color='primary' href={project.link} sx={{ pointerEvents: 'all', gap: 1 }}>
              Live<FiExternalLink />
            </Button>

            {/* <Icon site={'github'} ===============================/> */}
          </Box>
        </Fade>
      ))}

      {/* OTHER PROJECT HEADER START HERE */}
      <Fade sx={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
        <Typography variant='h5' sx={{ mt: '10vh', mb: 1 }}>
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
