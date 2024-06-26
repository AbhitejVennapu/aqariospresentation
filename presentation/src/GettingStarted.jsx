import { Box, Grid, Stack, Typography } from "@mui/material"
import React from "react"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"
import SectionHeader from "./components/SectionHeader"
import GettingStartedComponent from "./components/GettingStartedComponent"

const GettingStarted = () => {
    const gettingStartedList = [
        {
            title: "Problem Statement",
            content: [
                "How to effectively measure a student's progress as a teacher ?",
                "How to comprehend the data generated by student usage ?",
            ],
        },
        {
            title: "Proposed Solution",
            content: [
                "Provide features to enable communication between teachers and students.",
                "Store and track student's data to measure progress.",
            ],
        },
    ]
    return (
        <Box
            id="ProblemStatement"
            sx={{
                height: "100vh",
                width: "100% ",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: { md: "8rem", xs: "2rem" },
                //position: "absolute",
                flexDirection: "column",
            }}
        >
            <SectionHeader title="Getting Started." />
            <Grid container spacing={2}>
                {gettingStartedList.map((item, index) => (
                    <Grid item xs={12} md={6} sx={{ marginBottom: "4rem" }}>
                        <GettingStartedComponent
                            title={gettingStartedList[index].title}
                            content={gettingStartedList[index].content}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default GettingStarted
