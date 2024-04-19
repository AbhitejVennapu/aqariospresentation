import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const TableOfContents = () => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'flex-end', flexDirection: 'row-reverse' }}>
            <Box sx={{
                height: '325px', width: '275px',
                background: 'linear-gradient(0deg, #0f172a80, #0f172a80), linear-gradient(180deg, #33415580, #02042080 33.92%)',
                borderRadius: '15px',

            }}>
                <Stack spacing={3} sx={{ padding: '4rem' }}>
                    <Typography sx={{ borderLeft: '1px solid white', paddingLeft: '1.5rem' }}>Comments</Typography>
                    <Typography sx={{ color: 'grey' }}>Flags</Typography>
                    <Typography>Progress Tracker</Typography>
                    <Typography>Dashboard</Typography>
                </Stack>

            </Box>
        </Box>
    )
}

export default TableOfContents