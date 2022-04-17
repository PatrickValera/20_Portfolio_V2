import { Box, Typography, Paper, Stack, Button, Link } from '@mui/material'
import React from 'react'
import Fade from '../Fade'
import { styled } from '@mui/material/styles';
import { IKImage, IKContext } from 'imagekitio-react';
import { FiExternalLink} from 'react-icons/fi'
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
    <Box id='projects' sx={{px:{xs:0,md:'50px'}}}>
       {/* PROJ SECTION HEADER HERE */}
      <Fade>
        <Box display='flex' sx={{  mb: 3, alignItems: 'center' }}>
          <Typography variant='h5' sx={{}}>Project Highlights</Typography>
        </Box>
      </Fade>

      {/* HIGHLIGHT PROJECTS START HERE */}
      {projects.slice(0, 3).map((project, index) => (
        <Fade key={index} sx={{ display: 'grid', gridTemplateColumns: 'repeat(12,1fr)', position: 'relative', mb: 3 }}>
          {/* HIGHLIGHT PROJECT IMAGE HERE */}
          <Box sx={{ gridArea: { xs: '1/1/-1/13', md: '1/1/-1/8' }}}>
            <Box sx={{ height:'100%',borderColor:'text.primary',display:'flex',alignItems:'stretch',filter:{xs:'blur(1px)',md:'unset'}}}>
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
          <Box sx={{ p: 2, gridArea: { xs: '1/1/-1/13', md: '1/6/-1/-1' }, display: 'flex', flexDirection: 'column', pointerEvents:'none',textAlign: {xs:'left',md:'right'},alignItems:{xs:'center',md:'flex-end'}, justifyContent: 'center',bgcolor:{xs:'rgba(255,255,255,.8)',md:'unset'},zIndex:'5' }}>
            <Typography variant='h6'sx={{color:{xs:'#111',md:'text.primary'}}} >
              {project.title}
              </Typography>
            <Typography variant='body1' sx={{ bgcolor: 'text.primary', color: 'background.paper', p: {xs:1,md:3}, mb: 1, border:'2px solid',pointerEvents:'all',borderColor:'paper.primary',maxWidth:{xs:'350px',md:'700px'} }}>
              {project.description}
            </Typography>
            <Stack direction='row' spacing={{ xs: 1, md: 2 }} sx={{ flexWrap: 'wrap', color: 'blue', justifyContent: 'center', mb: 1 }}>
              {project.stack.map((tool, index) => {
                return (
                  <Box key={index} sx={{ color: 'red' }}>
                    <Item elevation={0} sx={{ fontSize:'.68rem',mb:'.35rem',inlineSize: 'max-content',px:1 }}>{tool}</Item>
                  </Box>
                )
              })}
            </Stack>
            <Link color='primary.dark' href={project.link}>
            <FiExternalLink/>
            </Link>
            
            {/* <Icon site={'github'} ===============================/> */}
          </Box>
        </Fade>
      ))}

      <Fade >
        <Typography variant='h5' textAlign='center' sx={{ mt: '10vh', mb: 4 }}>Other Projects</Typography>
      </Fade>
      {/* OTHER PROJECT START HERE */}
      <Box display='flex' sx={{ flexWrap: 'wrap', gap: 2, mb: 3,px:{xs:1,md:3} }}>
        {projects.slice(3, 9).map((project, index) => (
          < Fade key={index} sx={{ flex: '30% 1 1', minWidth: '200px', minHeight: {xs:'150px',md:'200px'} }}>
            <Box sx={[{ p: 2, display: 'flex', flexDirection: 'column', bgcolor: 'text.primary', color: 'background.paper', height: '100%', cursor: 'pointer', transition: 'all 200ms ease-out' }, theme => ({
              '&:hover': {
                transform: 'translateY(-5px)',
                '.proj-title': {
                  color: theme.palette.primary.dark
                }
              }
            })]}>
              <Typography className='proj-title' variant='h6'gutterBottom>{project.title}</Typography>
              <Typography variant='body1' sx={{ flexGrow: '1', mt: 2 }}>{project.description}</Typography>
              {/* <Icon site={'github'} sx={{ alignSelf: 'flex-end' }} />======================= */}
            </Box>
          </Fade>
        ))}
      </Box>

    </Box >
  )
}

export default Projects