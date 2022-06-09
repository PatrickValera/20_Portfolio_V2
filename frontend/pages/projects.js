import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Paper, Box, Button } from '@mui/material'
import React, { useState } from 'react'
import Profile from '../public/patrick.json'
import { IKContext, IKImage } from 'imagekitio-react'
const Projects = () => {
    const { projects } = Profile
    const [focusedProj, setFocusedProj] = useState(projects[0])
    return (
        <Container component='main' maxWidth='xl' sx={{ py: { xs: 2, sm: 3, md: '65px' } }}>
            <Typography variant='h4'>PROJECTS</Typography>
            <Box display='flex' sx={{ gap: 2, alignItems: 'flex-start', justifyContent: 'center', flexWrap: 'wrap' }}>

                <TableContainer component={Paper} sx={{ flex: '400px 1 1', order: { xs: 1, md: 0 } }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Date</TableCell>
                                <TableCell>Techs</TableCell>
                                <TableCell>Live</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {projects.map((project) => (
                                <TableRow key={project.title} sx={[{ cursor: 'pointer', color: 'text.primary' }, { '&:hover': { color: 'primary.main' } }]} onClick={() => setFocusedProj(project)}>
                                    <TableCell sx={{ color: 'inherit' }}>{project.title}</TableCell>
                                    <TableCell>{project.date}</TableCell>
                                    <TableCell>{project.stack[0]}</TableCell>
                                    <TableCell><Button href={project.link}>Live</Button></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>

                    </Table>
                </TableContainer>
                <Paper sx={{ flex: { xs: '1 1 auto', md: '0 1 300px' }, p: 2, order: { xs: 0, md: 1 } }}>
                    {focusedProj.title}-
                    {focusedProj.date}

                    <Box
                        sx={{
                            height: '100%',
                            border: { xs: 'unset', md: '1px solid #232323' },
                            display: 'flex',
                            alignItems: 'stretch',
                            aspectRatio: '16/9'
                            // filter: { xs: 'blur(1px)', md: 'unset' },
                        }}
                    >
                        <IKContext urlEndpoint='https://ik.imagekit.io/oqrgl5cil3a'>
                            {focusedProj.title && <IKImage
                                path={`/${focusedProj.title.toLowerCase()}.png`}
                                // className='proj-image'
                                transformation={[{ quality: 10 }]}
                            />}
                        </IKContext>
                    </Box>

                    <Button size='small' variant='contained' sx={{ mb: 1 }} href={focusedProj.link} fullWidth>LIVE</Button>
                    <Button size='small' variant='outlined' fullWidth>SOURCE</Button>
                </Paper>
            </Box>

        </Container>
    )
}

export default Projects