

import React, { useContext } from 'react'
import Sidebar from '../components/Sidebar'
import SocialContext from '../context/SocialContext'
import { Box, Drawer, Grid } from '@mui/material'
import HomeMainContent from '../components/HomeMainContent'
import OnlineFriends from '../components/OnlineFriends'
import RecentMessages from '../components/RecentMessages'
import LatestPost from '../components/LatestPost'

const Home = () => {

    const { OpenSidebar } = useContext(SocialContext)

    return (
        <Grid container spacing={2} sx={{ mx: 2, height: "100vh" }} >
            <Grid size="grow" sx={{ height: "100vh" }} >
                <Sidebar />
            </Grid>
            <Grid size={{ sm: 12, lg: 6 }} sx={{ height: "100vh", overflowY: "auto" }}>
                <HomeMainContent />
            </Grid>
            <Grid sx={{ display: { xs: "none", lg: "block", height: "100vh" } }} size="grow">
                <Box>
                    <OnlineFriends />
                    <RecentMessages />
                    <LatestPost/>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Home