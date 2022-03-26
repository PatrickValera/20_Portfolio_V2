import { Box, Button } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react'
import { AiOutlineHtml5 } from 'react-icons/ai'
import { IoLogoCss3 } from "react-icons/io";
import { DiJavascript1, DiGit, DiHeroku } from "react-icons/di";
import {SiDocker,SiTypescript,SiPython,SiTailwindcss,SiMongodb, SiExpress, SiVisualstudiocode, SiNextdotjs, SiRedux, SiMaterialui, SiVercel,SiSocketdotio } from "react-icons/si";
import { FaReact, FaNodeJs, FaSass } from "react-icons/fa";

let props = { className: 'hero-icon' }
let logos = [
    <IoLogoCss3 key='1'{...props} />,
    <AiOutlineHtml5 key='2'{...props} />,
    <DiJavascript1 key='3'{...props} />,
    <SiMongodb key='4'{...props} />,
    <SiExpress key='5'{...props} />,
    <FaReact key='6'{...props} />,
    <FaNodeJs key='7'{...props} />,
    <SiVisualstudiocode key='8'{...props} />,
    <SiNextdotjs key='9'{...props} />,
    <SiRedux key='10'{...props} />,
    <FaSass key='11'{...props} />,
    <SiMaterialui key='12'{...props} />,
    <DiGit key='13'{...props} />,
    <DiHeroku key='14'{...props} />,
    <SiVercel key='15'{...props} />,
    <SiSocketdotio key='16' {...props}/>,
    <SiTailwindcss key='17' {...props}/>,
    <SiPython key='18' {...props}/>,
    <SiTypescript key='19' {...props}/>,
    <SiDocker key='20' {...props}/>
    
]

const HeroAnimation = () => {
    let container = useRef()
    let container2 = useRef()
    let timer = 15000
    let timer1 = useRef()
    let timer2 = useRef()
    let timer3 = useRef()
    let timer4 = useRef()

    const startFirst = () => {
        container.current.classList.remove('start')
        container.current.classList.remove('init')
        container.current.style.transition = ' all 0ms linear';
        container.current.style.transform = ' translateY(100%) ';
        setTimeout(() => {
            // container.current.classList.add('start-animate')
            container.current.style.transition = ' all 15000ms linear';
            container.current.style.transform = ' translateY(-110%) ';

        }, 5)

        timer1.current = setInterval(() => {
            // container.current.classList.toggle('start-animate')
            container.current.style.transition = ' all 0ms linear';
            container.current.style.transform = ' translateY(100%) ';
        }, (timer))
        timer2.current = setInterval(() => {
            // container.current.classList.toggle('start-animate')
            container.current.style.transition = ' all 15000ms linear';
            container.current.style.transform = ' translateY(-110%) ';
        }, (timer + 5))
    }

    const startSecond = () => {
        container2.current.classList.remove('start2')
        container2.current.style.transition = ' all 0ms linear';
        container2.current.style.transform = ' translateY(100%) ';
        setTimeout(() => {
            // container2.current.classList.add('start-animate')
            container2.current.style.transition = ' all 15000ms linear';
            container2.current.style.transform = ' translateY(-110%) ';
        }, 5)
        timer3.current = setInterval(() => {
            // container2.current.classList.toggle('start-animate')
            container2.current.style.transition = ' all 0ms linear';
            container2.current.style.transform = ' translateY(100%) ';
        }, (timer))
        timer4.current = setInterval(() => {
            // container2.current.classList.toggle('start-animate')
            container2.current.style.transition = ' all 15000ms linear';
            container2.current.style.transform = ' translateY(-110%) ';
        }, (timer + 5))
    }
    useEffect(() => {
        console.log('start')
        if (container.current) {
            container.current.classList.add('start')
            container2.current.classList.add('start2')

            setTimeout(() => {
                if (container.current) startFirst()
            }, timer / 2)
            setTimeout(() => {
                if (container.current) startSecond()
            }, timer)
        }
        return (() => {
            console.log('hello')
            if (container.current) {
                container.current.classList = 'tiles-container init '
                container2.current.classList = 'tiles-container'
                container.current.style.transform = ' translateY(100%) ';
                container2.current.style.transform = ' translateY(100%) ';

            }
            clearInterval(timer1.current)
            clearInterval(timer2.current)
            clearInterval(timer3.current)
            clearInterval(timer4.current)
            container.current = false
            container2.current = false
        })

    })

    return (
        <>
            <Box className='hero-animation' sx={{
                position: 'relative',
                width: '100%',
                maxWidth: '350px',
                height: { xs: '170px', md: '250px' },
                overflowY: 'hidden',
                // border: '1px solid blue'
            }}>
                <Box className='tiles-container init ' ref={container} sx={{ transition: 'all 0ms linear', position: 'absolute', transform: 'translateY(100%)' }}>

                    <Box className='tile' sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', gap: 2}}>
                        {logos.map((component, index) => (
                            <Box key={index} sx={[{ px: '12px', pb: { xs: 2, md: 2 }, display: 'flex', width: { xs: '15%', md: '15%' } },
                            { '&:hover': { transform: 'scale(1.15)' } }]}>
                                {component}
                            </Box>
                        ))}
                    </Box>
                </Box>
                <Box className='tiles-container ' ref={container2} sx={{ transition: 'all 0ms linear', position: 'absolute', transform: 'translateY(100%)' }}>
                    <Box className='tile' sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                        {logos.map((component, index) => (
                            <Box key={index} sx={[{ px: '12px', pb: { xs: 2, md: 2 }, display: 'flex', width: { xs: '15%', md: '15%' } },
                            { '&:hover': { transform: 'scale(1.15)' } }]}>
                                {component}
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>
        </>

    )
}

export default HeroAnimation