import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { 
    Box,
    Button,
    Drawer,
    List,
    Stack,
    ListItemButton,
    ListItemIcon,
    useMediaQuery,
    ListSubheader,
    Typography
} from '@mui/material';

import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import LocalSeeIcon from '@mui/icons-material/LocalSee';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';

import { Link } from 'react-router-dom';

export default function Sidebar({open, handleDrawerClose}) {
    const theme = useTheme();
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));
    const [user, setUser] = React.useState(1);

    const [navOpen, setOpen] = React.useState(true);

    const handleClick = () => {
      setOpen(!navOpen);
    };

    const handleUser = (user) => {
        setUser(user)
    }
  
    const list = () => (
        <Box
            role="presentation"
            onClick={() => handleDrawerClose()}
            onKeyDown={() => handleDrawerClose()}
        >
            
                <ListSubheader component="div" id="nested-list-subheader" sx={{pl: 0, pb: 2}}>
                    <Link to="/project" style={{ textDecoration: 'none' }}>
                        <Stack flexDirection="row" alignItems="center" gap={2}
                            >
                            <AssignmentOutlinedIcon
                                sx={{
                                    color: '#BB86FC'
                                }} 
                            />
                            <Typography variant="h6" sx={{ color: theme.palette.text.primary, textDecoration: 'none' }}>Projects</Typography>
                        </Stack>
                    </Link>
                </ListSubheader>
                <List
                    sx={{ width: '100%', bgcolor: '#F1F4F9', borderRadius: 2  }}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    // subheader={
                    // }
                >
                    {tabs.map((tab, index) => 
                        <Link to={tab.href} style={{ textDecoration: 'none', color: 'inherit' }} key={index}>
                            <ListItemButton key={index} sx={{ py: 1.5, borderTopLeftRadius: index == 0? 8 : 0, borderTopRightRadius: index == 0? 8: 0 }}>
                                <ListItemIcon sx={{ minWidth: 48}}>
                                    {<tab.icon sx={{ color: index == 0 ? '#BB86FC' : 'inherit'}} />}
                                </ListItemIcon>
                                <Typography variant="h6" sx={{ color: index == 0 ? '#BB86FC' : 'inherit'}}>{tab.title}</Typography>
                            </ListItemButton>
                        </Link>
                    )}
                </List>
                
                <ListSubheader component="div" id="nested-list-subheader" 
                    sx={{pl: 0, pb: 2, pt: 4 }}>
                    <Stack flexDirection="row" alignItems="center" gap={2}
                        >
                        <LocalSeeIcon />
                        <Typography variant="h6" sx={{ color: theme.palette.text.secondary }}>Snapshots</Typography>
                    </Stack>
                </ListSubheader>
                
                <ListSubheader component="div" id="nested-list-subheader" sx={{pl: 0, pb: 2, pt: 8}}>
                    <Stack flexDirection="row" alignItems="center" gap={2}
                        >
                        <Typography variant="h6" sx={{ color: theme.palette.text.secondary, textTransform: 'uppercase' }}>Support</Typography>
                    </Stack>
                </ListSubheader>
                <ListSubheader component="div" id="nested-list-subheader" sx={{pl: 0, pb: 6}}>
                    <Stack flexDirection="row" alignItems="center" gap={2}
                        >
                        <TextSnippetIcon
                        />
                        <Typography variant="h6" sx={{ color: theme.palette.text.secondary, fontWeight: 500 }}>Documentation</Typography>
                    </Stack>
                </ListSubheader>
        </Box>
    );
  return (
    <div>
        <Drawer
            anchor="left"
            // variant="persistent"
            variant={matchUpMd ? "persistent" : "temporary"}
            open={matchUpMd ? true : open}
            onClose={() => handleDrawerClose()}
            sx={{
                '& .MuiPaper-root': {
                    width: 280
                }
            }}
        >
            <Stack sx={{ pt: 6, pl: 4, pb: 5 }}>
                <Box component="img" src="/images/logo.png" sx={{ maxWidth: 160 }} />
            </Stack>
            <Stack alignItems="center" justifyContent="center">
                <Stack flexDirection="row"
                    sx={{
                        background: '#E2E8F0',
                        borderRadius: 3,
                        p: .5
                    }}
                >
                    <Button sx={{ 
                        flex: 1, 
                        borderRadius: 3, 
                        px: 2, 
                        bgcolor: user == 1 ? '#BB86FC' : 'transparent', 
                        color: user == 1 ? theme.palette.background.paper : '#64748B' 
                    }} onClick={() => handleUser(1)}>Collector</Button>
                    <Button sx={{ 
                        flex: 1, 
                        borderRadius: 3, 
                        px: 2, 
                        bgcolor: user == 2 ? '#BB86FC' : 'tranparent', 
                        color: user == 2 ? theme.palette.background.paper : '#64748B' 
                    }} onClick={() => handleUser(2)}>Creator</Button>
                </Stack>
            </Stack>
            <Box sx={{ pt: 12, px: 2 }}>
                {list("anchor")}
            </Box>
        </Drawer>
    </div>
  );
}
const tabs = [
    // {
    //     title: 'Projects',
    //     icon: <AssignmentOutlinedIcon />,
    //     child: 
    //     [
            {
                title: 'Dashboard',
                href: '/',
                icon: DashboardOutlinedIcon
            },{
                title: 'Entry List',
                href: '/entry',
                icon: FormatListBulletedIcon
            },{
                title: 'Collabs',
                href: '/collab',
                icon: AutoAwesomeIcon
            },{
                title: 'Raffle',
                href: '/raffle',
                icon: DashboardOutlinedIcon
            },{
                title: 'Settings',
                href: '/setting',
                icon: SettingsOutlinedIcon
            },{
                title: 'Public Page',
                icon: OpenInNewIcon
            },
    //     ]
    // },
    // {
    //     title: 'Snapshots',
    //     icon: <AssignmentOutlinedIcon />,
    // }
]