import React from "react"
import { Box, Typography, Stack, Paper } from "@mui/material"

const ProjectTitle = () => {

    return (
        <React.Fragment>
            <Box id="ProjectTitle" sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: '100vh',
                position: 'relative'
            }}
            >
                <Stack spacing={25}>
                    <Stack spacing={2} sx={{
                        letterSpacing: '-0.75px',
                    }
                    } >
                        <Typography
                            variant="h2"
                            sx={{
                                fontSize: "96px",

                                fontWeight: '600',
                                background: "linear-gradient(90deg,#f1f5f966 4.65%,#f1f5f9 51.22%,#f1f5f966 93.04%)",
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundSize: '100%',
                                backgroundPositionX: 'var(--d0ea3056)',


                            }}
                        >
                            Welcome to the presentation.
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                fontSize: "18px",
                                width: '70%',
                                textAlign: 'center'
                            }}
                        >
                            A collaborative digital learning platform developed in collaboration with BASF SE and RPTU
                        </Typography>
                    </Stack>
                    <Paper variant="outlined"
                        sx={{
                            height: '275px',
                            width: '725px',
                            background: 'linear-gradient(0deg, #0f172a80, #0f172a80), linear-gradient(180deg, #33415580, #02042080 33.92%)',
                            borderRadius: '10px',
                            alignItems: 'center',
                            justifyContent: 'center',
                            display: 'flex'
                        }}><Typography>Hello</Typography></Paper>
                </Stack >
            </Box>



        </React.Fragment >
    )
}

export default ProjectTitle