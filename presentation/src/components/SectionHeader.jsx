import { Typography } from "@mui/material"
import React from "react"

const SectionHeader = ({ title }) => {
    return (
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
            {title}
        </Typography>
    )
}

export default SectionHeader
