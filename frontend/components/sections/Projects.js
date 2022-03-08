import { Box, Typography } from '@mui/material'
import React from 'react'
import Fade from '../Fade'
import Icon from '../Icon'
const Projects = ({ projects }) => {
  return (
    <Box  id='projects'>
      <Fade>
        <Typography variant='h6'>Project Highlights</Typography>

      </Fade>
      {projects.slice(0, 3).map((project, index) => (
        <Box key={index} display='grid' className='fade' sx={{ gridTemplateColumns: 'repeat(12,1fr)', position: 'relative', mb: 4 }}>

          {/* IMAGE HERE */}
          <Box sx={{ gridArea: '1/1/-1/7', bgcolor: 'text.secondary' }}>
            <Box sx={{}}>
            </Box>
          </Box>

          {/* TEXT HERE */}
          <Box sx={{ p:2,gridArea: '1/6/-1/-1', bgcolor: 'text.primary', color:'background.paper' }}>
            <Typography variant='body1'>{project.title}</Typography>
            <Typography variant='body1'>{project.description}</Typography>
            {/* <Typography variant='body1'>Project Summary {index + 1}</Typography> */}
            <Icon site={'github'} />
          </Box>
        </Box>
      ))}
      <Fade>
        <Typography variant='h6'>Other Projects</Typography>
      </Fade>

      <Box display='flex' sx={{ flexWrap: 'wrap', gap: 2, mb: 4, minHeight: '10px' }}>
        {projects.slice(3.7).map((project, index) => (
          <Fade key={index} sx={{ flex: '30% 1 1', minWidth: '150px' }}>
            <Box sx={{ p: 1, bgcolor: 'text.primary', color:'background.paper' }}>
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