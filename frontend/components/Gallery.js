import React from 'react'
import { Box } from '@mui/material'
import { IKContext, IKImage } from 'imagekitio-react'

const images = [
  'candelebra',
  'candelebra',
  'candelebra',
  'candelebra',
  'candelebra',
]
const Gallery = () => {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      {images.map((image, index) => (
        <Box
          key={index}
          sx={{ p: 1, width: { xs: '100%', sm: '50%', md: '33.32%' }, filter: { xs: 'blur(1px)', md: 'unset' } }}
        >
          <IKContext urlEndpoint='https://ik.imagekit.io/oqrgl5cil3a'>
            <IKImage
              path={`/${image}.png`}
              className='proj-image'
              transformation={[{ quality: 50 }]}
            />
          </IKContext>
        </Box>
      ))}
    </Box>
  )
}

export default Gallery
