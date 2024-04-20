import React from "react"
import Box from "@mui/material/Box"
import Title from "./Title"
import { Stack } from "@mui/material"
import ProblemStatement from "./ProblemStatement"
// import Features from "./Features"
import FeaturesTabs from "./FeaturesTabs"
import QaAndManagement from "./QaAndManagement"
import ConceptsAndMethodologies from "./ConceptsAndMethodologies"
import Footer from "./Footer"

const Layout = () => {
    return (
        <Box
            sx={{
                background: "linear-gradient(180deg, #0f172a, #020420)",
            }}
        >
            <Stack spacing={0}>
                <Title />
                <ProblemStatement />
                {/* <Features /> */}
                <FeaturesTabs />
                <QaAndManagement />
                <ConceptsAndMethodologies />
                <Footer />
            </Stack>
        </Box>
    )
}

export default Layout
