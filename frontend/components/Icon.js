import React, { useRef } from 'react'
import { RiGithubFill, RiLinkedinBoxFill, RiInstagramLine } from "react-icons/ri";
import { AiFillCodeSandboxCircle } from "react-icons/ai";
import { Box } from '@mui/material';
import { BsFillChatTextFill } from 'react-icons/bs';

const Icon = ({ site,sx }) => {
    let icon = useRef(null)
    let props = { size: '1.5rem', className: '' }
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
        <Box sx={{ ...sx,cursor: 'pointer'}} className='icon'>
            {icon.current}
        </Box>
    )
}

export default Icon