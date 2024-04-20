import React from "react"
import Box from "@mui/material/Box"
import Title from "./Title"
import { Stack } from "@mui/material"
import ProblemStatement from "./ProblemStatement"
// import Features from "./Features"
import FeaturesTabs from "./FeaturesTabs"

const Layout = () => {
    return (
        <Box sx={{
            background: "linear-gradient(180deg, #0f172a, #020420)"
        }}>
            <Stack spacing={0}>
                <Title />
                <ProblemStatement />
                {/* <Features /> */}
                <FeaturesTabs />
            </Stack>

        </Box>
    )
}

export default Layout
