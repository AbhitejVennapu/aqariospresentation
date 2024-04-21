import { Stack, Typography } from "@mui/material"
import React from "react"
import { useIconTransition } from "../useIconTransition"

const IconTransition = ({ list, speed = 500 }) => {
    const imageList = useIconTransition(list, speed)

    return (
        <Stack direction="row" spacing={2.5}>
            {imageList.map((image, index) => (
                <img
                    key={index}
                    height={window.innerWidth < 600 ? 32 : 48}
                    alt="icons"
                    src={image}
                />
            ))}
        </Stack>
    )
}

export default IconTransition
