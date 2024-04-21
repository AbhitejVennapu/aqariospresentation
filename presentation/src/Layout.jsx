import React from "react"
import Box from "@mui/material/Box"
import Title from "./Title"
import { Grid, Stack } from "@mui/material"
import GettingStarted from "./GettingStarted"
import FeaturesTabs from "./FeaturesTabs"
import QaAndManagement from "./QaAndManagement"
import ConceptsAndMethodologies from "./ConceptsAndMethodologies"
import Footer from "./Footer"

const Layout = () => {
    return (
        <Box
            sx={{
                background: "linear-gradient(180deg, #0f172a, #020420)",
                position: "relative",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Title />
            <GettingStarted />
            <FeaturesTabs />
            <QaAndManagement />
            <ConceptsAndMethodologies />
            <Footer />
        </Box>
    )
}

export default Layout
