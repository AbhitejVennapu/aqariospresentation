import React from "react"
import { Box, Typography, Stack, Button } from "@mui/material"
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const Title = () => {
    var element = document.getElementById("ProjectTitle");
    return (
        <Box
            id="title"
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "flex-start",
                height: '100vh',
                padding: '2rem',
            }}
        >

            <Typography
                sx={{
                    fontWeight: '600',
                    fontSize: '20px',
                }}
            >
                Abhitej Vennapu.
            </Typography>


            <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                <Stack spacing={2} sx={{
                    textAlign: "center",
                    letterSpacing: '-0.75px',
                }}>
                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: "96px",
                            fontWeight: '600',
                            background: "linear-gradient(90deg,#f1f5f966 4.65%,#f1f5f9 51.22%,#f1f5f966 93.04%)",
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundSize: '100%'
                        }}
                    >
                        LabBook
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: "18px"
                        }}
                    >
                        A collaborative digital learning platform developed in collaboration with BASF SE and RPTU
                    </Typography>
                </Stack>
            </Box>

            <ExpandMoreIcon fontSize="large"
                sx={{ alignSelf: 'center' }}
                // @ts-ignore
                onClick={() => document.getElementById("ProblemStatement").scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })}
            />

        </Box>

    )
}

export default Title
