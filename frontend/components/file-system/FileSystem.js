import { Box } from '@mui/material'
import React, { useState } from 'react'

const FileSystem = ({ children }) => {
    const [path, setPath] = useState('/')
    return (
        <Box sx={{display:'flex',flexWrap:'wrap'}}>
            {children}
        </Box>
    )
}

export default FileSystem