import { Box, Button } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react'
import { AiOutlineHtml5 } from 'react-icons/ai'
import { IoLogoCss3 } from "react-icons/io";
import { DiJavascript1, DiGit, DiHeroku } from "react-icons/di";
import { SiMongodb, SiExpress, SiVisualstudiocode, SiNextdotjs, SiRedux, SiMaterialui, SiVercel } from "react-icons/si";
import { FaReact, FaNodeJs, FaSass } from "react-icons/fa";

let props = { className: 'hero-icon', }
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
    <DiHeroku key='141'{...props} />,
    <SiVercel key='15'{...props} />,


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
    let container2 = useRef()
    let timer = 12000
    const [num, setNum] = useState([1])

    const start = () => {
        container.current.classList.remove('start')
        container.current.classList.remove('init')
        setTimeout(() => {
            container.current.classList.add('start-animate')
        }, 5)
        // container.current.classList.add('start-animate')
        setInterval(() => {
            container.current.classList.toggle('start-animate')
        }, (timer))
        setInterval(() => {
            container.current.classList.toggle('start-animate')
        }, (timer + 5))
    }
    const reset = () =>{
        setTimeout(()=>{

        container2.current.classList.remove('start-animate')
    },1)

        setTimeout(()=>{
            container2.current.classList.add('start-animate')

        },10)

    }
    useEffect(() => {
        // container.current.classList.add('start-animate2-init')

        container.current.classList.add('start')
        // container2.current.classList.remove('init')
        container2.current.classList.add('start-animate')

        setTimeout(() => {
            start()
        }, timer / 2)
        setInterval(() => {
            reset()
            // container2.current.classList.toggle('start-animate')
        }, (timer))
        // setInterval(() => {
        //     container2.current.classList.toggle('start-animate')
        // }, (timer + 10))
    })
    // useEffect(() => {
    //     setTimeout(() => {
    //         console.log(num)
    //         setNum(state => [...state, (state[state.length - 1] + 1)])
    //         let newPos = (num.length - 1) * 300
    //         console.log(newPos)
    //         container.current.style.transform = `translateY(-${String(newPos)}px)`
    //     }, timer)
    // },[num])
    return (
        <>
            {/* <Button onClick={() => {
                console.log(num)
                setNum(state => [...state, (state[state.length - 1] + 1)])
                let newPos = (num.length - 1) * 500
                console.log(newPos)
                container.current.style.transform = `translateY(-${String(newPos)}px)`
            }}>ADD</Button> */}
            <Box className='hero-animation' sx={{
                position: 'relative', flex: '25% 1 1', maxWidth: '300px', height: { xs: '150px', md: '300px' },
                 overflowY: 'hidden'
                // border: '1px solid blue'
            }}>
                <Box className='tiles-container init ' ref={container} sx={{ transition: 'all 0ms linear', position: 'absolute', transform: 'translateY(100%)' }}>
                    {num.map((anum, index) => (
                        <Box key={index} className='tile' sx={{ display: 'flex', flexWrap: 'wrap' }}>
                            {logos.map((component, index) => (
                                <Box key={index} sx={{ p: 2, display: 'flex', flex: '80px 1 1', m: 1 }}>
                                    {component}
                                </Box>
                            ))}
                        </Box>))}
                </Box>
                <Box className='tiles-container ' ref={container2} sx={{ transition: 'all 0ms linear', position: 'absolute', transform: 'translateY(100%)' }}>
                    {num.map((anum, index) => (
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