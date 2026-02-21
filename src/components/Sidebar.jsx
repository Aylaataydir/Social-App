import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import HomeIcon from '@mui/icons-material/Home';
import { Toolbar, Typography } from '@mui/material';
import { useContext } from 'react';
import SocialContext from '../context/SocialContext';
import PeopleIcon from '@mui/icons-material/People';
import EmailIcon from '@mui/icons-material/Email';
import { Email } from '@mui/icons-material';
import SettingsIcon from '@mui/icons-material/Settings';

export default function Sidebar() {

    const { setOpenSidebar, toggleDrawer, openSidebar } = useContext(SocialContext)


    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation">
            <Typography>
                App Menu
            </Typography>
            <Divider />
            <List>
                {['Home', 'Profile', 'Friends', 'Messages', 'Settings'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon sx={{color:"var(--color-icon)"}}>
                                {index === 0 ? <HomeIcon /> : index === 1 ? <AccountBoxIcon /> : index === 2 ? <PeopleIcon /> : index === 3 ? <EmailIcon /> : <SettingsIcon />   }
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div>
            <div className='lg:hidden'>
                <Drawer sx={{
                    '& .MuiDrawer-paper': {
                        marginTop: '68px',   // istediğin boşluk

                    },
                }}
                    open={openSidebar} onClose={toggleDrawer}>
                    {DrawerList}
                </Drawer>
            </div>
            <div className='hidden lg:block'>
                {DrawerList}
            </div>
        </div>

    );
}
