import { Box, Grid, List, ListItem, Typography } from "@mui/material"
import React from "react"
// @ts-ignore
import CommentImage from "../assets/Comments.png"
// @ts-ignore
import FlagImage from "../assets/Flags.png"
// @ts-ignore
import ProgressTrackerImage from "../assets/Progress Tracker.png"
// @ts-ignore
import DashboardImage from "../assets/Dashboard.png"

const CommonFeatureCard = ({ index }) => {
    const featuresList = [
        {
            title: "Comments",
            imageLink: CommentImage,
            content: [
                "Communication between teachers and students.",
                "Two type of comments : Board-level and Component-level.",
                "Application supports add, edit and delete operations. ",
                "Comments threads support replies and its corresponding add, edit and delete operations.",
            ],
            height: "232",
            width: "221",
        },
        {
            title: "Flags",
            imageLink: FlagImage,
            content: [
                "Two flags: Attention Required and Resolved.",
                "These flags are tracked in the teacher dashboard.",
                "Information about the flags is maintained including total number of flags created and active flags.",
            ],
            height: "232",
            width: "221",
        },
        {
            title: "Progress Tracker",
            imageLink: ProgressTrackerImage,
            content: [
                "A combination of tasks and subtasks needs to be configured by teacher.",
                "Students can copy these components from script board to their private boards.",
                "Based on every item student checks and unchecks, the total progress percentage is updated in real-time.",
            ],
            height: "232",
            width: "221",
        },
        {
            title: "Dashboard",
            imageLink: DashboardImage,
            content: [
                "A new view is provided to the teachers with details about flags and progress of each student.",
                "The view consists of student tiles with UI elements to highlight the students with active flags.",
                "Analytics consists of a visualization describing the total number of flags and active flags for each student.",
            ],
            height: "210",
            width: "338",
        },
    ]
    return (
        <React.Fragment>
            <Box
                sx={{
                    height: { md: "100%" },
                    padding: { md: "4rem", xs: "1.5rem" },
                }}
            >
                <Typography variant="h5" sx={{ paddingBottom: "2rem" }}>
                    {featuresList[index].title}
                </Typography>
                <Grid container spacing={2}>
                    <Grid
                        item
                        xs={12}
                        md={index === 3 ? 6 : 8}
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <List sx={{ padding: "0rem" }}>
                            {featuresList[index].content?.map(
                                (entry, index) => (
                                    <React.Fragment key={index}>
                                        <ListItem
                                            key={index}
                                            sx={{
                                                fontSize: "1rem",
                                                color: "rgba(148, 163, 184, 1)",
                                                paddingX: 0,
                                            }}
                                        >
                                            {entry}
                                        </ListItem>
                                    </React.Fragment>
                                )
                            )}
                        </List>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={index === 3 ? 6 : 4}
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <img
                            src={featuresList[index].imageLink}
                            alt="featureImage"
                            height={featuresList[index].height}
                            width={
                                featuresList[index].width
                                    ? featuresList[index].width
                                    : "100%"
                            }
                        ></img>
                    </Grid>
                </Grid>
            </Box>
        </React.Fragment>
    )
}

export default CommonFeatureCard
