import { Box, Typography } from '@mui/material'
import React from 'react'

const Projects = ({ projects }) => {
  return (
    <>
      <Typography variant='h6'>Projects I've Built</Typography>
      {projects.slice(0, 3).map((project, index) => (
        <Box display='grid' className='fade' sx={{ gridTemplateColumns: 'repeat(12,1fr)', position: 'relative', bgcolor: 'red', mb: 4 }}>

          {/* IMAGE HERE */}
          <Box sx={{ gridArea: '1/1/-1/7', bgcolor: 'pink' }}>
            <Box sx={{ bgcolor: 'pink' }}>
            </Box>
          </Box>

          {/* TEXT HERE */}
          <Box sx={{ gridArea: '1/6/-1/-1', bgcolor: 'green' }}>
            <Typography variant='body1'>{project.title}</Typography>
            {/* <Typography variant='body1'>{project.description}</Typography> */}
            <Typography variant='body1'>Project Summary {index +1}</Typography>
          </Box>
        </Box>
      ))}

      <Typography variant='h6'>Other Projects</Typography>
      <Box display='flex'sx={{flexWrap:'wrap',gap:2}}>
        {projects.slice(3).map((project, index) => (
          <Box className='fade' sx={{ p: 0, flex: '100px 1 1',minWidth:'33%', bgcolor:'primary.main' }}>
            <Typography variant='body1'>{project.title}</Typography>
            {/* <Typography variant='body1'>{project.description}</Typography> */}
            <Typography variant='body1'>Project Summary {index +4}</Typography>
          </Box>
        ))}
      </Box>

    </>
  )
}

export default Projects