import React from "react"
import Box from "@mui/material/Box"
import Title from "./Title"
import { Stack } from "@mui/material"
import ProblemStatement from "./ProblemStatement"
import Features from "./Features"

const Layout = () => {
    return (
        <Box sx={{
            background: "linear-gradient(180deg, #0f172a, #020420)"
        }}>
            <Stack spacing={0}>
                <Title />
                <ProblemStatement />
                <Features />
            </Stack>

        </Box>
    )
}

export default Layout
