import { Box, Stack, Typography } from "@mui/material"
import React from "react"
import Chip from "@mui/material/Chip"

const ConceptsAndMethodologies = () => {
    const conceptsAndMethodologiesList = [
        "State Management",
        "Responsive Design",
        "Stateful and Stateless Components",
        "Component Based Architecture",
        "Virtual DOM",
        "React Router",
    ]
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
                        Concepts and Methodologies
                    </Typography>
                    <Stack direction="row" spacing={1}>
                        {conceptsAndMethodologiesList.map((concept, index) => (
                            <Chip
                                key={index}
                                label={concept}
                                sx={{
                                    fontSize: "16px",
                                    "&:hover": {
                                        background:
                                            "linear-gradient(90deg, #0f172a80, #0f172a80), linear-gradient(0deg, #33415580, #02042080 33.92%)",
                                        fontSize: "16px",
                                    },
                                }}
                            ></Chip>
                        ))}
                    </Stack>
                </Stack>
            </Box>
        </React.Fragment>
    )
}

export default ConceptsAndMethodologies
