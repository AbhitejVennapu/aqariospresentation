import { Box, Stack, Typography } from "@mui/material"
import React from "react"

const GettingStartedComponent = ({ title, content }) => {
    return (
        <Box
            sx={{
                padding: { md: "4rem", xs: "1.5rem" },

                borderRadius: "25px",
                background:
                    "linear-gradient(0deg, #0f172a80, #0f172a80), linear-gradient(180deg, #33415580, #02042080 33.92%)",
                height: "100%",
                "&:hover": {
                    background:
                        "linear-gradient(90deg, #0f172a80, #0f172a80), linear-gradient(0deg, #33415580, #02042080 33.92%)",
                },
            }}
        >
            <Stack spacing={2}>
                <Typography
                    sx={{
                        fontSize: "1.5rem",
                        lineHeight: "2rem",
                        fontWeight: "600px",
                    }}
                >
                    {title}
                </Typography>
                {content.map((item, index) => (
                    <Typography
                        key={index}
                        paragraph
                        sx={{
                            fontSize: "1.25rem",
                            color: "rgba(148, 163, 184, 1)",
                        }}
                    >
                        {item}
                    </Typography>
                ))}
            </Stack>
        </Box>
    )
}

export default GettingStartedComponent
