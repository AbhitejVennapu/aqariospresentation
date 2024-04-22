import { Stack, Tooltip, Typography } from "@mui/material"
import React from "react"
import { useIconTransition } from "../useIconTransition"

const IconTransition = ({ list, speed = 500 }) => {
    const imageList = useIconTransition(list, speed)
    const labeList = ["React", "MUI", "Jest", "Git", "Redux", "YJs"]
    return (
        <Stack direction="row" spacing={2.5}>
            {imageList.map((image, index) => (
                <Tooltip key={index} title={labeList[index]}>
                    <img
                        height={window.innerWidth < 600 ? 32 : 48}
                        alt="icons"
                        src={image}
                    />
                </Tooltip>
            ))}
        </Stack>
    )
}

export default IconTransition
