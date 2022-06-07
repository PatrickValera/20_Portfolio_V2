import { Button, Link, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import { BiRightArrowAlt } from 'react-icons/bi'
import { AiOutlineHtml5 } from 'react-icons/ai'
import { IoLogoCss3 } from 'react-icons/io'
import { DiJavascript1, DiGit, DiHeroku } from 'react-icons/di'
import {
  SiDocker,
  SiTypescript,
  SiPython,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiVisualstudiocode,
  SiNextdotjs,
  SiRedux,
  SiMaterialui,
  SiVercel,
  SiSocketdotio,
} from 'react-icons/si'
import { FaReact, FaNodeJs, FaSass } from 'react-icons/fa'

let props = { style: { fontSize: '1.5rem' } }
let cards = [
  {
    logo: <DiJavascript1 key='19' {...props} />,
    name: 'TypeScript'
  }, {
    logo: <FaReact key='6' {...props} />,
    name: 'React'
  },
  {
    logo: <SiMongodb key='4' {...props} />,
    name: 'MongoDB'
  },
  {
    logo: <SiExpress key='5' {...props} />,
    name: 'Express'
  },

  {
    logo: <SiNextdotjs key='9' {...props} />,
    name: 'Next'
  },
  {
    logo: <SiRedux key='10' {...props} />,
    name: 'Redux'
  },
  {
    logo: <FaSass key='11' {...props} />,
    name: 'Sass'
  },
  {
    logo: <SiTailwindcss key='17' {...props} />,
    name: 'TailWind'
  },

]

const Introduction = () => {

  const [fadeClass, setFadeClass] = useState('intro-fade')
  useEffect(() => {
    setFadeClass('intro-fade-done')
  }, [])
  return (
    <Box
      display='flex'
      className={fadeClass}
      style={{ transitionDelay: `900ms` }}
      sx={{
        flexWrap: { xs: 'wrap', md: 'nowrap' },
        height: '100vh',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
      }}
    >
      {/* SUMMARY ABOUT ME HERE========== */}
      <Box
        className='fade'
        sx={{
          flex: '0 2 600px',
          textAlign: { xs: 'center', md: 'left' },
          mb: 4
        }}
      >
        <Typography
          variant='h1'
          fontSize='2rem'
          color='text.primary'
          sx={{
            my:1,
            lineHeight:'1',
            fontSize: { xs: '1rem', sm: '1.5rem'},
          }}
        >
          Hey there,
        </Typography>
        <Typography
          variant='h1'
          color='primary.main'
          fontWeight='600'
          sx={{
            lineHeight:'1',
            fontSize: { xs: '2rem', sm: '2.7rem', md: '3.7rem', lg: '4.5rem' },
          }}
        >
          {`I'm Patrick`}
        </Typography>
        <Typography
        variant='h1'
        color='text.primary'
        sx={{
          my:1,
          fontSize: { xs: '1rem', sm: '1.5rem', md: '1.7rem' },
          }}>
          {`Software & Fullstack Engineer`}
        </Typography>
        {/* <Typography
          variant='body1'
          fontSize='.75rem'
          color='text.primary'
          gutterBottom
        >
          {`I aim to deepen my understanding of various technologies and build exceptional products.`}
        </Typography> */}
        <Button
          href='/#projects'
          variant='contained'
          size='small'
          sx={{ mr: 1,textTransform:'none' }}
        >
          Projects
        </Button>
        <Button
          href='/ResumePatrickValera.pdf'
          variant='outlined'
          size='small'
        >
          Resume
        </Button>
      </Box>
      {/* CARD HERE ===================== */}
      <Box
        display='flex'
        sx={{
          flex: '0 1 500px',
          flexWrap: 'wrap',
        }}
      >
        {cards.map(card => (
          <Card key={card.name} card={card} />
        ))}
      </Box>
    </Box>
  )
}
const Card = ({ card }) => (

  <Paper elevation={0} sx={{ display: 'flex', flex: '1 1 21%', m: '1%', aspectRatio: '1/1', justifyContent: 'center', alignItems: 'center', }}>
    <Box sx={{ textAlign: 'center' }} >
      {card.logo}
      <Typography variant='body1'>{card.name}</Typography>
    </Box>
  </Paper>
)
export default Introduction
