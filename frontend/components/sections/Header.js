import { Box, Button, Typography } from '@mui/material'
import React from 'react'

const Header = ({ setTheme }) => {
    return (
        <Box component='header' sx={{  position: 'sticky',top:'0',   }}>
            <Box sx={{ px:2,position: 'absolute',bgcolor: 'secondary.main',display: 'flex', alignItems: 'center', width: '100%', }}>
                <Typography variant='h6' sx={{ flexGrow: '1' }}>PV</Typography>
                <nav>

                </nav>
                <Button onClick={() => { setTheme(state => !state) }}>
                    Theme
                </Button>
            </Box>
        </Box>
    )
}

export default Header