import * as React from "react"
import PropTypes from "prop-types"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import { Grid } from "@mui/material"
import CommonFeatureCard from "./components/CommonFeatureCard"

function TabPanel(props) {
    const { children, value, index, ...other } = props

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    )
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
}

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        "aria-controls": `vertical-tabpanel-${index}`,
    }
}

export default function FeaturesTabs() {
    const [value, setValue] = React.useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    const setMargin = (top) => {
        const newMargin = top + 10 + "px"
        return newMargin
    }

    return (
        <React.Fragment>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "8rem",
                    flexDirection: "column",
                }}
            >
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
                        paddingBottom: "8rem",
                    }}
                >
                    Features.
                </Typography>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={9}>
                        <Box
                            sx={{
                                background:
                                    "linear-gradient(0deg, #0f172a80, #0f172a80), linear-gradient(180deg, #33415580, #02042080 33.92%)",
                                borderRadius: "15px",
                                height: "70vh",
                                //overflow: 'hidden',
                                "&:hover": {
                                    background:
                                        "linear-gradient(90deg, #0f172a80, #0f172a80), linear-gradient(0deg, #33415580, #02042080 33.92%)",
                                },
                            }}
                        >
                            <TabPanel value={value} index={0}>
                                <CommonFeatureCard index={0} />
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                <CommonFeatureCard index={1} />
                            </TabPanel>
                            <TabPanel value={value} index={2}>
                                <CommonFeatureCard index={2} />
                            </TabPanel>
                            <TabPanel value={value} index={3}>
                                <CommonFeatureCard index={3} />
                            </TabPanel>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Box
                            sx={{
                                height: "225px",
                                width: "225px",
                                background:
                                    "linear-gradient(0deg, #0f172a80, #0f172a80), linear-gradient(180deg, #33415580, #02042080 33.92%)",
                                borderRadius: "15px",
                                display: "flex",

                                "&:hover": {
                                    background:
                                        "linear-gradient(90deg, #0f172a80, #0f172a80), linear-gradient(0deg, #33415580, #02042080 33.92%)",
                                },
                            }}
                        >
                            <Tabs
                                orientation="vertical"
                                variant="scrollable"
                                value={value}
                                onChange={handleChange}
                                aria-label="Vertical tabs example"
                                sx={{
                                    height: "100%",
                                    marginTop: "15px",
                                    "& .MuiTabs-indicator": {
                                        //left: '7px !important',
                                        height: "0 !important",
                                        right: "0px",
                                    },
                                }}
                            >
                                <Tab
                                    label="Comments"
                                    {...a11yProps(0)}
                                    sx={{
                                        textTransform: "none",
                                        fontSize: "1rem",
                                        color: "rgba(148, 163, 184, 1)",
                                        alignItems: "start",
                                    }}
                                />
                                <Tab
                                    label="Flags"
                                    {...a11yProps(1)}
                                    sx={{
                                        textTransform: "none",
                                        fontSize: "1rem",
                                        color: "rgba(148, 163, 184, 1)",
                                        alignItems: "start",
                                    }}
                                />
                                <Tab
                                    label="Progress Tracker"
                                    {...a11yProps(2)}
                                    sx={{
                                        textTransform: "none",
                                        fontSize: "1rem",
                                        color: "rgba(148, 163, 184, 1)",
                                        alignItems: "start",
                                    }}
                                />
                                <Tab
                                    label="Dashboard"
                                    {...a11yProps(3)}
                                    sx={{
                                        textTransform: "none",
                                        fontSize: "1rem",
                                        color: "rgba(148, 163, 184, 1)",
                                        alignItems: "start",
                                    }}
                                />
                            </Tabs>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </React.Fragment>
    )
}
