import { useState } from "react";
import Box from '@mui/material/Box';
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import ArrowRight from '@mui/icons-material/ArrowRight';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import Home from '@mui/icons-material/Home';
import Settings from '@mui/icons-material/Settings';
// Otros imports de iconos
import TableRestaurantIcon from '@mui/icons-material/TableRestaurant';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import FavoriteIcon from '@mui/icons-material/Favorite';
import GroupsIcon from '@mui/icons-material/Groups';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LogoutIcon from '@mui/icons-material/Logout';
import RoomPreferencesIcon from '@mui/icons-material/RoomPreferences';

interface MyNavbarProps {
    onSelect: (selectedComponent: string) => void;
}

export default function HomeNavbar({ onSelect }: MyNavbarProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openReserves, setOpenReserves] = useState(true);
    const [openReviews, setOpenReviews] = useState(true);
    const [openSettings, setOpenSettings] = useState(true);

    const reserves = [
        { icon: <TableRestaurantIcon />, label: 'Make a Reserve!', component: "Reserve" },
        { icon: <RestaurantMenuIcon />, label: 'My Reserves', component: "MyReserves" },
        { icon: <FavoriteIcon />, label: 'My Favorite Restaurants', component: "Favorites" },
    ];

    const reviews = [
        { icon: <GroupsIcon />, label: 'Reddit', component: "Reviews" },
    ];

    const settings = [
        { icon: <HelpOutlineIcon />, label: 'About Us', component: "AboutUs" },
        { icon: <LogoutIcon />, label: 'Log out', component: "Logout" },
        { icon: <RoomPreferencesIcon />, label: 'Preferences', component: "Preferences" },
    ];

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const FireNav = styled(List)<{ component?: React.ElementType }>({
        '& .MuiListItemButton-root': {
          paddingLeft: 24,
          paddingRight: 24,
        },
        '& .MuiListItemIcon-root': {
          minWidth: 0,
          marginRight: 16,
        },
        '& .MuiSvgIcon-root': {
          fontSize: 20,
        },
    });

    return (
        <Box sx={{ display: 'flex' }}>
            <ThemeProvider
                theme={createTheme({
                    components: {
                        MuiListItemButton: {
                            defaultProps: {
                                disableTouchRipple: true,
                            },
                        },
                    },
                    palette: {
                        mode: 'dark',
                        primary: { main: 'rgb(89, 99, 118)' },
                        background: { paper: 'rgb(111, 120, 137)' },
                    },
                })}
            >
                <Paper elevation={0} sx={{ maxWidth: 256 }}>
                    <FireNav component="nav" disablePadding>
                        <ListItemButton component="a" href="#customized-list">
                            <ListItemIcon sx={{ fontSize: 20 }}>🍽️</ListItemIcon>
                            <ListItemText
                                sx={{ my: 0 }}
                                primary="Platvif"
                                primaryTypographyProps={{
                                    fontSize: 20,
                                    fontWeight: 'medium',
                                    letterSpacing: 0,
                                    fontFamily: 'system-ui'
                                }}
                            />
                        </ListItemButton>
                        <Divider />
                        <ListItem component="div" disablePadding>
                            <ListItemButton sx={{ height: 56 }} onClick={() => onSelect("Home")}>
                                <ListItemIcon>
                                    <Home color="primary" />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Marcos Bottino"
                                    primaryTypographyProps={{
                                        color: 'white',
                                        fontWeight: 'medium',
                                        variant: 'body2',
                                        fontFamily: 'system-ui'
                                    }}
                                />
                            </ListItemButton>
                            <Tooltip title="User Settings">
                                <IconButton
                                    size="large"
                                    sx={{
                                        '& svg': {
                                            color: 'rgba(255,255,255,0.8)',
                                            transition: '0.2s',
                                            transform: 'translateX(0) rotate(0)',
                                        },
                                        '&:hover, &:focus': {
                                            bgcolor: 'unset',
                                            '& svg:first-of-type': {
                                                transform: 'translateX(-4px) rotate(-20deg)',
                                            },
                                            '& svg:last-of-type': {
                                                right: 0,
                                                opacity: 1,
                                            },
                                        },
                                        '&::after': {
                                            content: '""',
                                            position: 'absolute',
                                            height: '80%',
                                            display: 'block',
                                            left: 0,
                                            width: '1px',
                                            bgcolor: 'divider',
                                        },
                                    }}
                                >
                                    <Settings />
                                    <ArrowRight sx={{ position: 'absolute', right: 4, opacity: 0 }} />
                                </IconButton>
                            </Tooltip>
                        </ListItem>
                        <Divider />
                        {/* Box Reserves */}
                        <Box
                            sx={{
                                bgcolor: openReserves ? 'rgba(71, 98, 130, 0.2)' : null,
                                pb: openReserves ? 2 : 0,
                            }}
                        >
                            <ListItemButton
                                alignItems="flex-start"
                                onClick={() => setOpenReserves(!openReserves)}
                                sx={{
                                    px: 3,
                                    pt: 2.5,
                                    pb: openReserves ? 0 : 2.5,
                                    '&:hover, &:focus': { '& svg': { opacity: openReserves ? 1 : 0 } },
                                }}
                            >
                                <ListItemText
                                    primary="Reserves"
                                    primaryTypographyProps={{
                                        fontSize: 15,
                                        fontWeight: 'medium',
                                        lineHeight: '20px',
                                        mb: '2px',
                                        fontFamily: 'system-ui'
                                    }}
                                    secondary="Make a Reserve!, My Reserves & My Favorite Restaurants"
                                    secondaryTypographyProps={{
                                        noWrap: true,
                                        fontSize: 12,
                                        lineHeight: '16px',
                                        color: openReserves ? 'rgba(0,0,0,0)' : 'rgba(255,255,255,0.5)',
                                        fontFamily: 'system-ui'
                                    }}
                                    sx={{ my: 0 }}
                                />
                                <KeyboardArrowDown
                                    sx={{
                                        mr: -1,
                                        opacity: 0,
                                        transform: openReserves ? 'rotate(-180deg)' : 'rotate(0)',
                                        transition: '0.2s',
                                    }}
                                />
                            </ListItemButton>
                            {openReserves &&
                                reserves.map((item) => (
                                    <ListItemButton
                                        key={item.label}
                                        sx={{ py: 0, minHeight: 32, color: 'rgba(255,255,255,.8)' }}
                                        onClick={() => onSelect(item.component)}
                                    >
                                        <ListItemIcon sx={{ color: 'inherit' }}>
                                            {item.icon}
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={item.label}
                                            primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium', fontFamily: 'system-ui' }}
                                        />
                                    </ListItemButton>
                                ))}
                        </Box>
                        {/* Box Reviews */}
                        <Box
                            sx={{
                                bgcolor: openReviews ? 'rgba(71, 98, 130, 0.2)' : null,
                                pb: openReviews ? 2 : 0,
                            }}
                        >
                            <ListItemButton
                                alignItems="flex-start"
                                onClick={() => setOpenReviews(!openReviews)}
                                sx={{
                                    px: 3,
                                    pt: 2.5,
                                    pb: openReviews ? 0 : 2.5,
                                    '&:hover, &:focus': { '& svg': { opacity: openReviews ? 1 : 0 } },
                                }}
                            >
                                <ListItemText
                                    primary="Reviews"
                                    primaryTypographyProps={{
                                        fontSize: 15,
                                        fontWeight: 'medium',
                                        lineHeight: '20px',
                                        mb: '2px',
                                        fontFamily: 'system-ui'
                                    }}
                                    secondary="Reddit"
                                    secondaryTypographyProps={{
                                        noWrap: true,
                                        fontSize: 12,
                                        lineHeight: '16px',
                                        color: openReviews ? 'rgba(0,0,0,0)' : 'rgba(255,255,255,0.5)',
                                        fontFamily: 'system-ui'
                                    }}
                                    sx={{ my: 0 }}
                                />
                                <KeyboardArrowDown
                                    sx={{
                                        mr: -1,
                                        opacity: 0,
                                        transform: openReviews ? 'rotate(-180deg)' : 'rotate(0)',
                                        transition: '0.2s',
                                    }}
                                />
                            </ListItemButton>
                            {openReviews &&
                                reviews.map((item) => (
                                    <ListItemButton
                                        key={item.label}
                                        sx={{ py: 0, minHeight: 32, color: 'rgba(255,255,255,.8)' }}
                                        onClick={() => onSelect(item.component)}
                                    >
                                        <ListItemIcon sx={{ color: 'inherit' }}>
                                            {item.icon}
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={item.label}
                                            primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium', fontFamily: 'system-ui' }}
                                        />
                                    </ListItemButton>
                                ))}
                        </Box>
                        {/* Box Settings */}
                        <Box
                            sx={{
                                bgcolor: openSettings ? 'rgba(71, 98, 130, 0.2)' : null,
                                pb: openSettings ? 2 : 0,
                            }}
                        >
                            <ListItemButton
                                alignItems="flex-start"
                                onClick={() => setOpenSettings(!openSettings)}
                                sx={{
                                    px: 3,
                                    pt: 2.5,
                                    pb: openSettings ? 0 : 2.5,
                                    '&:hover, &:focus': { '& svg': { opacity: openSettings ? 1 : 0 } },
                                }}
                            >
                                <ListItemText
                                    primary="Settings"
                                    primaryTypographyProps={{
                                        fontSize: 15,
                                        fontWeight: 'medium',
                                        lineHeight: '20px',
                                        mb: '2px',
                                        fontFamily: 'system-ui'
                                    }}
                                    secondary="About Us, Logout & Preferences"
                                    secondaryTypographyProps={{
                                        noWrap: true,
                                        fontSize: 12,
                                        lineHeight: '16px',
                                        color: openSettings ? 'rgba(0,0,0,0)' : 'rgba(255,255,255,0.5)',
                                        fontFamily: 'system-ui'
                                    }}
                                    sx={{ my: 0 }}
                                />
                                <KeyboardArrowDown
                                    sx={{
                                        mr: -1,
                                        opacity: 0,
                                        transform: openSettings ? 'rotate(-180deg)' : 'rotate(0)',
                                        transition: '0.2s',
                                    }}
                                />
                            </ListItemButton>
                            {openSettings &&
                                settings.map((item) => (
                                    <ListItemButton
                                        key={item.label}
                                        sx={{ py: 0, minHeight: 32, color: 'rgba(255,255,255,.8)' }}
                                        onClick={() => onSelect(item.component)}
                                    >
                                        <ListItemIcon sx={{ color: 'inherit' }}>
                                            {item.icon}
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={item.label}
                                            primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium', fontFamily: 'system-ui' }}
                                        />
                                    </ListItemButton>
                                ))}
                        </Box>
                    </FireNav>
                </Paper>
            </ThemeProvider>
        </Box>
    );
}
