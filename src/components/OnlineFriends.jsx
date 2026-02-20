
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { data } from "../helper/data"
import { Box, Typography } from '@mui/material';


const OnlineFriends = () => {

    const { image } = data

    return (
        <Box>
            <Typography>
                Online Friends
            </Typography>
            <AvatarGroup total={10} sx={{display:"flex", justifyContent:"center"}}>
                {data.slice(0, 4).map(p => (
                    <Avatar alt="Remy Sharp" src={p.image} />
                ))}

            </AvatarGroup>
             <Typography textAlign="center">
                10 friends currently online
            </Typography>
        </Box>

    )
}

export default OnlineFriends