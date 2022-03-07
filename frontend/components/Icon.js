import React, { useRef } from 'react'
import { RiGithubFill, RiLinkedinBoxFill } from "react-icons/ri";
import { AiFillCodeSandboxCircle } from "react-icons/ai";
import { Box } from '@mui/material';

const Icon = ({site}) => {
    let icon=useRef(null)
    let props={size:'1.5rem',className:'fade show'}
    switch(site){
        case 'github':{icon.current=<RiGithubFill {...props}/> 
        break}
        case 'linkedin':{icon.current=<RiLinkedinBoxFill{...props}/>
        break}
        case 'codesandbox':{icon.current=<AiFillCodeSandboxCircle{...props}/>
        break}
    }
    return(
        <Box sx={{}}>
            {icon.current}
        </Box>
    )
}

export default Icon