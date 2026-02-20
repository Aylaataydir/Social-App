
import { Avatar, Box, Typography } from '@mui/material'
import { messages } from "../helper/data"

const RecentMessages = () => {




    return (
        <Box>
            <Typography>
                Recent Messages
            </Typography>
            <Box>
                {messages.map((p, index) => (
                    <Box key={index}>
                        <Avatar src={p.avatar} alt="" />
                        <Box>
                            <Typography>
                                {p.name}
                            </Typography>
                            <Typography>
                                {p.message}-{messages.timeAgo}
                            </Typography>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}

export default RecentMessages