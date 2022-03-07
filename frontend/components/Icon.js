import React from 'react'
import { RiGithubFill, RiLinkedinBoxFill } from "react-icons/ri";

const Icon = ({site}) => {
    switch(site){
        case 'github':return(<RiGithubFill/>)
        case 'linkedin':return(<RiLinkedinBoxFill/>)
    }

}

export default Icon