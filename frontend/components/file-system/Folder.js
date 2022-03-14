import React from 'react'
import Icon from '../Icon'
import { IoIosFolder } from 'react-icons/io'
import { Box, Button, Typography } from '@mui/material'

const Folder = ({ name, setPath, path, children }) => {
    const handleClick = () => {
        setPath(name)
    }
    const handleBack = () => {
        let len = name.lastIndexOf('/')
        if (len < 1) {
            setPath('/')
        } else {
            setPath(path.slice(0, len))
        }
    }
    // DO THIS IF NAME OF PATH OF FOLDER IS IN CURRENT PATH
    if (name === path || name === path.slice(0, name.length)) return (
        <>
            {name === path.slice(0, name.length + 1) ? <>
                <Button onClick={handleBack}>Back</Button>
                {/* <Typography variant='body1'>{path}</Typography> */}
                <Box sx={{ display: 'flex',alignItems:"flex-start", p:1 }}>
                    {children}
                </Box>

            </> :
                <>
                        {children}
                </>
            }
        </>
    )
    // DO THIS IF NAME OF PATH OF FOLDER IS IN CURRENT PATH
    else if (path === name.slice(0, path.length) || path === '/') return (
        <Box  onClick={handleClick} display='flex' sx={[{ cursor:'pointer',flexDirection: 'column', flex: '80px 0 0', alignItems: 'center' },{
            '&:hover':{color:'primary.main'}
        }]}>
            <IoIosFolder size='2.5rem' />
            <Typography variant='body1'>{name.slice(name.lastIndexOf('/') + 1)}</Typography>
        </Box>
    )
    else return (
        <></>
    )

}

export default Folder