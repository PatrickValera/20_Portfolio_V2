import { Box, Typography } from '@mui/material'
import React from 'react'
import Fade from '../Fade'
const Projects = ({ projects }) => {
  return (
    <>
      <Fade>
        <Typography variant='h6'>Project Highlights</Typography>

      </Fade>
      {projects.slice(0, 3).map((project, index) => (
        <Box key={index} display='grid' className='fade' sx={{ gridTemplateColumns: 'repeat(12,1fr)', position: 'relative', bgcolor: 'red', mb: 4 }}>

          {/* IMAGE HERE */}
          <Box sx={{ gridArea: '1/1/-1/7', bgcolor: 'pink' }}>
            <Box sx={{ bgcolor: 'pink' }}>
            </Box>
          </Box>

          {/* TEXT HERE */}
          <Box sx={{ gridArea: '1/6/-1/-1', bgcolor: 'green' }}>
            <Typography variant='body1'>{project.title}</Typography>
            {/* <Typography variant='body1'>{project.description}</Typography> */}
            <Typography variant='body1'>Project Summary {index + 1}</Typography>
          </Box>
        </Box>
      ))}
      <Fade>
        <Typography variant='h6'>Other Projects</Typography>
      </Fade>

      <Box display='flex' sx={{ flexWrap: 'wrap', gap: 2, mb: 4, minHeight: '10px' }}>
        {projects.slice(3.7).map((project, index) => (
          <Fade  key={index} sx={{ flex: '30% 1 1', minWidth: '150px' }}>
            <Box sx={{ p: 0, bgcolor: 'primary.main' }}>
              <Typography variant='body1'>{project.title}</Typography>
              {/* <Typography variant='body1'>{project.description}</Typography> */}
              <Typography variant='body1'>Project Summary {index + 4}</Typography>
            </Box>
          </Fade>
        ))}
      </Box>

    </>
  )
}

export default Projects