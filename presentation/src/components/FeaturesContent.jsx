import { Box } from '@mui/material'
import React from 'react'
import CommonFeatureCard from './CommonFeatureCard'
import { useState } from 'react'


const FeaturesContent = () => {
    return (
        <Box
            sx={{
                background: 'linear-gradient(0deg, #0f172a80, #0f172a80), linear-gradient(180deg, #33415580, #02042080 33.92%)',
                borderRadius: '15px',
                height: '70vh',
                overflow: 'hidden',
            }}
        //onWheel={() => document.getElementById("comment").scrollIntoView({ behavior: "smooth", block: "end", inline: "start" })}
        >
            <Box
                sx={{
                    overflowY: 'scroll',
                    marginRight: '-15px',
                    paddingRight: '15px',
                    height: '100%',
                }}
            >
                <CommonFeatureCard id='comment' />
                <CommonFeatureCard id='flags' />
                <CommonFeatureCard id='progress tracker' />
            </Box>
        </Box>
    )
}

export default FeaturesContent