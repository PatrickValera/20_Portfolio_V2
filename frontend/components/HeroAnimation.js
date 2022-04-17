import { Box, Button } from '@mui/material'
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

let props = { className: 'hero-icon' }
let logos = [
  <IoLogoCss3 key='1' {...props} />,
  <AiOutlineHtml5 key='2' {...props} />,
  <DiJavascript1 key='3' {...props} />,
  <SiMongodb key='4' {...props} />,
  <SiExpress key='5' {...props} />,
  <FaReact key='6' {...props} />,
  <FaNodeJs key='7' {...props} />,
  <SiVisualstudiocode key='8' {...props} />,
  <SiNextdotjs key='9' {...props} />,
  <SiRedux key='10' {...props} />,
  <FaSass key='11' {...props} />,
  <SiMaterialui key='12' {...props} />,
  <DiGit key='13' {...props} />,
  <DiHeroku key='14' {...props} />,
  <SiVercel key='15' {...props} />,
  <SiSocketdotio key='16' {...props} />,
  <SiTailwindcss key='17' {...props} />,
  <SiPython key='18' {...props} />,
  <SiTypescript key='19' {...props} />,
  <SiDocker key='20' {...props} />,
]

const HeroAnimation = () => {
  return (
    <>
      <Box
        sx={{
            px:2,
            margin:'auto',
            width:'100%',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          maxWidth: '350px',
          height: 'min-content',
          overflowY: 'hidden',
          gap:2,
        //   border: '1px solid blue',
        }}
      >
        {logos.map((component, index) => (
          <Box
            key={index}
            sx={[
              { px: '12px', display: 'flex', width: '15%' },
              { '&:hover': { color: 'primary.main' } },
            ]}
          >
            {component}
          </Box>
        ))}
    
      </Box>
    </>
  )
}

export default HeroAnimation
