import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
// import Web3Context from '../../contexts/Web3Context';
import MuiAppBar from '@mui/material/AppBar';
import { 
    Box, 
    IconButton, 
    Toolbar, 
    Typography,
    Stack, 
    useMediaQuery 
} from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import SyncAltIcon from '@mui/icons-material/SyncAlt';

const drawerWidth = 280;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.background.default,
        backgroundImage: 'none',
        boxShadow: 'none',
        borderBottom: `1px ${theme.palette.divider} solid`,
        transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        // width: `calc(100% - ${drawerWidth}px)`,
        // marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

export default function Header ({open, handleDrawerOpen, handleDrawerClose}) {

    const theme = useTheme();
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <AppBar position="fixed" open={true}>
            <Toolbar>
                <Stack 
                    flex={1}
                    flexDirection="row" 
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <Typography variant="h3">NFT Fetcher POC</Typography>
                </Stack>
            </Toolbar>
        </AppBar>
    );
}