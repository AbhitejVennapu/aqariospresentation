import { Box, Typography } from '@mui/material'
import React from 'react'

const CommonFeatureCard = ({ id }) => {
    return (
        <React.Fragment>
            <Box id={id} sx={{ height: '100%' }}>
                <Typography variant='h5'>Comments</Typography>
            </Box>
        </React.Fragment>
    )
}

export default CommonFeatureCard