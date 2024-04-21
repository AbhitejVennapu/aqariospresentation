import { Typography } from "@mui/material"
import { useTypewriter } from "../useTypeWriter"
import React from "react"

const Typewriter = ({ text, speed = 300 }) => {
    const displayText = useTypewriter(text, speed)
    console.log("display text", displayText)
    return (
        <Typography
            sx={{
                fontWeight: "600",
                fontSize: "20px",
            }}
        >
            {displayText}
        </Typography>
    )
}

export default Typewriter
