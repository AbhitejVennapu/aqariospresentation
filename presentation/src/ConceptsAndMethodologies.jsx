import { Box, Grid, Stack, Typography } from "@mui/material"
import React from "react"
import Chip from "@mui/material/Chip"
import SectionHeader from "./components/SectionHeader"

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

                    padding: { md: "8rem", xs: "2rem" },
                }}
            >
                <Stack spacing={0}>
                    <SectionHeader title="Concepts & Methodologies." />
                    {/* <Stack
                        direction="row"
                        spacing={2}
                        sx={{ flexWrap: "wrap" }}
                    >
                        {conceptsAndMethodologiesList.map((concept, index) => (
                            <Chip
                                key={index}
                                label={concept}
                                sx={{
                                    fontSize: "16px",
                                    marginBottom: { xs: "1rem", md: "0rem" },
                                    "&:hover": {
                                        background:
                                            "linear-gradient(90deg, #0f172a80, #0f172a80), linear-gradient(0deg, #33415580, #02042080 33.92%)",
                                        fontSize: "16px",
                                    },
                                }}
                            ></Chip>
                        ))}
                    </Stack> */}
                    <Grid container spacing={1}>
                        {conceptsAndMethodologiesList.map((concept, index) => (
                            <Grid item key={index}>
                                <Chip
                                    key={index}
                                    label={concept}
                                    sx={{
                                        fontSize: "16px",
                                        marginBottom: {
                                            xs: "1rem",
                                            md: "0rem",
                                        },
                                        "&:hover": {
                                            background:
                                                "linear-gradient(90deg, #0f172a80, #0f172a80), linear-gradient(0deg, #33415580, #02042080 33.92%)",
                                            fontSize: "16px",
                                        },
                                    }}
                                ></Chip>
                            </Grid>
                        ))}
                    </Grid>
                    {/* </Box> */}
                </Stack>
            </Box>
        </React.Fragment>
    )
}

export default ConceptsAndMethodologies
