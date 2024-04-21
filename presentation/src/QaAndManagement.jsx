import { Box, Grid, Stack, Typography } from "@mui/material"
import React from "react"
import QaAndManagementComponent from "./components/QaAndManagementComponent"
import SectionHeader from "./components/SectionHeader"

const QaAndManagement = () => {
    const qaManagementItemsLength = 3
    return (
        <React.Fragment>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    // paddingY: "4rem",
                    // paddingX: "8rem",
                    padding: { md: "8rem", xs: "2rem" },
                }}
            >
                <Stack spacing={0}>
                    <SectionHeader title="Project Management & QA." />

                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            background:
                                "linear-gradient(0deg, #0f172a80, #0f172a80), linear-gradient(180deg, #33415580, #02042080 33.92%)",
                            borderRadius: "15px",
                            // height: '70vh',
                            //overflow: 'hidden',
                            width: "100%",
                            padding: { md: "4rem", xs: "2rem" },
                            "&:hover": {
                                background:
                                    "linear-gradient(90deg, #0f172a80, #0f172a80), linear-gradient(0deg, #33415580, #02042080 33.92%)",
                            },
                        }}
                    >
                        <Grid container spacing={6}>
                            <Grid item md={4}>
                                <QaAndManagementComponent index={0} />
                            </Grid>
                            <Grid item md={4}>
                                <QaAndManagementComponent index={1} />
                            </Grid>
                            <Grid item md={4}>
                                <QaAndManagementComponent index={2} />
                            </Grid>
                        </Grid>
                    </Box>
                </Stack>
            </Box>
        </React.Fragment>
    )
}

export default QaAndManagement
