import { Box, Stack, Typography } from "@mui/material"
import React from "react"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import EmailIcon from "@mui/icons-material/Email"
import GitHubIcon from "@mui/icons-material/GitHub"
import CopyrightIcon from "@mui/icons-material/Copyright"

const Footer = () => {
    return (
        <React.Fragment>
            <Box sx={{ padding: "8rem", paddingBottom: "4rem" }}>
                <Stack spacing={1}>
                    <Stack direction="row" spacing={2}>
                        <a href="mailto:abhi.tej98@gmail.com" target="blank">
                            <EmailIcon
                                sx={{
                                    fontSize: "24px",
                                    color: "#FFF",
                                }}
                            ></EmailIcon>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/abhitej-vennapu/"
                            target="blank"
                        >
                            <LinkedInIcon
                                sx={{
                                    fontSize: "24px",
                                    color: "#FFF",
                                }}
                            ></LinkedInIcon>
                        </a>
                        <a
                            href="https://github.com/AbhitejVennapu"
                            target="blank"
                        >
                            <GitHubIcon
                                sx={{
                                    fontSize: "24px",
                                    color: "#FFF",
                                }}
                            ></GitHubIcon>
                        </a>
                    </Stack>
                    <Stack direction="row" spacing={1}>
                        <CopyrightIcon
                            sx={{
                                fontSize: "16px",
                                height: "1.5em",
                            }}
                        >
                            {" "}
                        </CopyrightIcon>
                        <Typography
                            sx={{
                                fontSize: "16px",
                            }}
                        >
                            {" "}
                            Abhitej Vennapu | Frontend Developer | 2024{" "}
                        </Typography>
                    </Stack>
                </Stack>
            </Box>
        </React.Fragment>
    )
}

export default Footer
