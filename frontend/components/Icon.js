import React, { useRef } from 'react'
import { RiGithubFill, RiLinkedinBoxFill, RiInstagramLine } from "react-icons/ri";
import { AiFillCodeSandboxCircle } from "react-icons/ai";
import { Box, Typography } from '@mui/material';
import { BsFillChatTextFill } from 'react-icons/bs';


const Icon = ({ site, sx, children, label,link }) => {
    let icon = useRef(null)
    let props = { size: '1rem', className: '' }
    switch (site) {
        case 'github': {
            icon.current = <RiGithubFill {...props} />
            break
        }
        case 'linkedin': {
            icon.current = <RiLinkedinBoxFill {...props} />
            break
        }
        case 'codesandbox': {
            icon.current = <AiFillCodeSandboxCircle {...props} />
            break
        }
        case 'instagram': {
            icon.current = <RiInstagramLine {...props} />
            break
        }
        case 'mail': {
            icon.current = <BsFillChatTextFill {...props} size='1.3rem' />
            break
        }

    }
    return (
        <Box
            sx={[{ ...sx, fontSize:'2rem',cursor: 'pointer', transform: 'translateY(0)', transition: 'all 200ms ease-in-out' },
            (theme) => ({
                '&:hover': {
                    color: theme.palette.primary.main,
                    transform: 'translateY(-5px)',
                },
            })
            ]}
        >
            <a href={link?link:'/'} style={{color:'inherit'}}>
                {children ? children : icon.current}
            </a>
            <Typography fontSize='.85rem' sx={{ textOverflow: 'ellipsis' }}>{label && label}</Typography>
        </Box>
    )
}

export default Icon