import { Box, Button } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react'
import { GrHtml5 } from 'react-icons/gr'
import { IoLogoCss3 } from "react-icons/io";
import { DiJavascript1 } from "react-icons/di";
import { SiMongodb,SiExpress,SiVisualstudiocode,SiNextdotjs,SiRedux,SiMaterialui } from "react-icons/si";
import { FaReact,FaNodeJs,FaSass } from "react-icons/fa";

let props = { className: 'hero-icon' }
let logos = [
    <IoLogoCss3 key='1'{...props} />,
    <GrHtml5 key='2'{...props} />,
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
    

]

const HeroAnimation = () => {
    // useEffect(() => {
    //     const container = document.querySelector('.hero-animation')

    //     const LastTileObserver = new IntersectionObserver(entries => {
    //         const lastCard = entries[0]
    //         if (!lastCard.isIntersecting) return
    //         else {
    //             console.log("LOAD NEW TILE")
    //             let newTile = document.querySelector('.tile:last-child')
    //             // console.log(newTile)
    //             console.log(container)
    //             container.append(newTile)
    //             LastTileObserver.unobserve(lastCard.target)
    //             LastTileObserver.observe(document.querySelector('.tile:last-child'))
    //         }
    //     }, {
    //         root: container,
    //         rootMargin: '0px'
    //     }
    //     )
    //     LastTileObserver.observe(document.querySelector('.tile:last-child'))


    //     // let container = document.querySelector('.hero-animation')
    //     // console.log(container)
    //     // container.scroll({
    //     //     top: 1000,
    //     //     behavior: 'smooth'
    //     // });
    // }, [])
    let container = useRef()
    const [num, setNum] = useState([1])
    useEffect(() => {
        setTimeout(() => {
            console.log(num)
            setNum(state => [...state, (state[state.length - 1] + 1)])
            let newPos = (num.length - 1) * 400
            console.log(newPos)
            container.current.style.transform = `translateY(-${String(newPos)}px)`
        }, 5000)
    },[num])
    return (
        <>
            {/* <Button onClick={() => {
                console.log(num)
                setNum(state => [...state, (state[state.length - 1] + 1)])
                let newPos = (num.length - 1) * 500
                console.log(newPos)
                container.current.style.transform = `translateY(-${String(newPos)}px)`
            }}>ADD</Button> */}
            <Box className='hero-animation' sx={{ position: 'relative', flex: '25% 1 1',maxWidth:'300px', height: {xs:'150px',md:'500px'}, overflowY: 'hidden' }}>
                <Box className='tiles-container' ref={container} sx={{ transition: 'all 5000ms linear', position: 'relative', transform: 'translateY(00px)' }}>
                    {num.map((anum,index) => (
                    <Box key={index} className='tile' sx={{ display: 'flex', flexWrap: 'wrap' }}>
                        {logos.map((component, index) => (
                            <Box key={index} sx={{ p: 2, display: 'flex', flex: '80px 1 1', m: 1 }}>
                                {component}
                            </Box>
                        ))}
                    </Box>))}
                </Box>
            </Box>
        </>

    )
}

export default HeroAnimation