// import React from 'react'
// import TableOfContents from './components/TableOfContents'
// import { Box, Grid, Tab, Tabs, Typography } from '@mui/material'
// import FeaturesContent from './components/FeaturesContent'

// const Features = () => {
//     function a11yProps(index: number) {
//         return {
//             id: `vertical-tab-${index}`,
//             'aria-controls': `vertical-tabpanel-${index}`,
//         };
//     }
//     return (
//         <React.Fragment>
//             <Typography sx={{
//                 fontSize: '3rem', lineHeight: '1', background: "linear-gradient(5deg,#f1f5f966 4.65%,#f1f5f9 51.22%,#f1f5f966 93.04%)",
//                 WebkitBackgroundClip: 'text',
//                 WebkitTextFillColor: 'transparent',
//                 backgroundSize: '100%',
//                 textAlign: 'center',
//                 // paddingBottom: '2rem'
//             }}>Features.</Typography>
//             <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '8rem' }}>
//                 <Grid container>
//                     <Grid item xs={12} md={9}>
//                         <FeaturesContent />
//                     </Grid>
//                     <Grid item xs={12} md={3}>
//                         {/* <TableOfContents /> */}
//                         <Tabs
//                             orientation="vertical"
//                             variant="scrollable"
//                             value={value}
//                             onChange={handleChange}
//                             aria-label="Vertical tabs example"
//                             sx={{ borderRight: 1, borderColor: 'divider' }}
//                         >
//                             <Tab label="Item One" {...a11yProps(0)} />
//                             <Tab label="Item Two" {...a11yProps(1)} />
//                             <Tab label="Item Three" {...a11yProps(2)} />
//                             <Tab label="Item Four" {...a11yProps(3)} />
//                             <Tab label="Item Five" {...a11yProps(4)} />
//                             <Tab label="Item Six" {...a11yProps(5)} />
//                             <Tab label="Item Seven" {...a11yProps(6)} />
//                         </Tabs>
//                     </Grid>
//                 </Grid>

//             </Box>
//         </React.Fragment>
//     )
// }

// export default Features