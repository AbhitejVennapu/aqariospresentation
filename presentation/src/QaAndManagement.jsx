import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import QaAndManagementComponent from "./components/QaAndManagementComponent";

const QaAndManagement = () => {
    const qaManagementItemsLength = 3;
    return (
        <React.Fragment>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingY: "4rem",
                    paddingX: "8rem",
                }}
            >
                <Stack spacing={4}>
                    <Typography
                        sx={{
                            fontSize: "3rem",
                            lineHeight: "1",
                            background:
                                "linear-gradient(135deg,#f1f5f966 4.65%,#f1f5f9 51.22%,#f1f5f966 93.04%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundSize: "100%",
                            textAlign: "center",
                            paddingBottom: "4rem",
                        }}
                    >
                        Project Management & QA.
                    </Typography>
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
                            padding: "4rem",
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
    );
};

export default QaAndManagement;
