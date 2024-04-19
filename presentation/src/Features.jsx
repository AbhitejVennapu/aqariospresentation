import React from 'react'
import TableOfContents from './components/TableOfContents'
import { Box, Grid, Typography } from '@mui/material'
import FeaturesContent from './components/FeaturesContent'

const Features = () => {
    return (
        <React.Fragment>
            <Typography sx={{
                fontSize: '3rem', lineHeight: '1', background: "linear-gradient(5deg,#f1f5f966 4.65%,#f1f5f9 51.22%,#f1f5f966 93.04%)",
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundSize: '100%',
                textAlign: 'center',
                // paddingBottom: '2rem'
            }}>Features.</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '8rem' }}>
                <Grid container>
                    <Grid item xs={12} md={9}>
                        <FeaturesContent />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <TableOfContents />
                    </Grid>
                </Grid>

            </Box>
        </React.Fragment>
    )
}

export default Features