import { Box, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const ProblemStatement = () => {
    return (
        <Box id="ProblemStatement"
            sx={{ height: '100vh', width: '100% ', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '8rem', position: 'relative' }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>

                    <Box sx={{
                        padding: '4rem',
                        borderRadius: '25px',
                        background: 'linear-gradient(0deg, #0f172a80, #0f172a80), linear-gradient(180deg, #33415580, #02042080 33.92%)',
                        height: '100%',
                        '&:hover': {
                            background: 'linear-gradient(90deg, #0f172a80, #0f172a80), linear-gradient(0deg, #33415580, #02042080 33.92%)',
                        },
                    }}>
                        <Stack spacing={2}>
                            <Typography sx={{ fontSize: '1.5rem', lineHeight: '2rem', fontWeight: '600px' }}>Problem Statement</Typography>
                            <Typography paragraph sx={{ fontSize: '1.25rem', color: 'rgba(148, 163, 184, 1)' }}> How to effectively measure a student's progress as a teacher ? </Typography>
                            <Typography paragraph sx={{ fontSize: '1.25rem', color: 'rgba(148, 163, 184, 1)' }}>How to comprehend the data generated by student usage ? </Typography>

                        </Stack>

                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box sx={{
                        padding: '4rem',
                        borderRadius: '25px',
                        background: 'linear-gradient(0deg, #0f172a80, #0f172a80), linear-gradient(180deg, #33415580, #02042080 33.92%)',
                        height: '100%',
                        '&:hover': {
                            background: 'linear-gradient(90deg, #0f172a80, #0f172a80), linear-gradient(0deg, #33415580, #02042080 33.92%)',
                        },
                    }}>
                        <Stack spacing={2}>
                            <Typography sx={{ fontSize: '1.5rem', lineHeight: '2rem', fontWeight: '600px' }}>Proposed Solution</Typography>
                            <Typography paragraph sx={{ fontSize: '1.25rem', color: 'rgba(148, 163, 184, 1)' }}>Provide features to enable communication between teachers and students. </Typography>
                            <Typography paragraph sx={{ fontSize: '1.25rem', color: 'rgba(148, 163, 184, 1)' }}>Store and track student's data to measure progress. </Typography>
                        </Stack>
                    </Box>
                </Grid>
            </Grid>

        </Box>
    )
}

export default ProblemStatement