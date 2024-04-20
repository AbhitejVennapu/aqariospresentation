import { Stack, Typography } from '@mui/material'
import React from 'react'
// @ts-ignore
import VersionControl from '../assets/versioncontrol.png';
// @ts-ignore
import QualityAssurance from '../assets/qualityassurance.png'
// @ts-ignore
import Evaluation from '../assets/evaluation.png'

const QaAndManagementComponent = ({ index }) => {
    const qaAndManagementList = [
        {
            title: 'Version Control',
            image: VersionControl,
            content: 'Implemented version control for our project using Git, leveraging GitLab as our repository management platform.'
        }, {
            title: 'Quality Assurance',
            image: QualityAssurance,
            content: 'Ensured code quality through Jest, employing unit and integration testing.'
        },
        {
            title: 'Evaluation',
            image: Evaluation,
            content: 'Assessed user satisfaction using the System Usability Scale (SUS), yielding a score of 88.714%.'
        }
    ]
    return (
        <React.Fragment>
            <Stack spacing={2} sx={{ alignItems: 'center', textAlign: 'center' }}>
                <img src={qaAndManagementList[index].image} alt='version control' height={36} width={36}></img>
                <Typography sx={{ fontSize: '1.5rem', lineHeight: '2rem', fontWeight: '600px' }} >{qaAndManagementList[index].title}</Typography>
                <Typography sx={{ fontSize: '1rem', color: 'rgba(148, 163, 184, 1)' }}>{qaAndManagementList[index].content} </Typography>
            </Stack>
        </React.Fragment>
    )
}

export default QaAndManagementComponent