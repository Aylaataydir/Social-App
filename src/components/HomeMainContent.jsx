
import React from 'react'
import { data } from "../helper/data"
import HomeMainContentCard from './HomeMainContentCard'
import { faker } from '@faker-js/faker';
import { Box } from '@mui/material';
import { Fullscreen } from '@mui/icons-material';

const HomeMainContent = () => {
    return (
        <Box sx={{width:1, }}>
            {data.map( p => (
                <div key={p.id}>
                    <HomeMainContentCard person={p} />
                </div>
            ))}
        </Box>
    )
}

export default HomeMainContent