import * as React from 'react';
import { useHistory } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Login', 'Pricing'];

const ResponsiveAppBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const history = useHistory();
    const loginbtn = () => {
        history.push("/login")
    }

    return (
        <AppBar style={{ background: 'black' }} position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'Rajdhani',
                            fontWeight: 300,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        islavo Prime
                    </Typography>


                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >


                            <div style={{ width: 100, textAlign: 'center' }}>
                                <Link style={{ textDecoration: 'none', color: 'black', fontFamily: 'Rajdhani' }} >Home</Link> <br />
                                <Link style={{ textDecoration: 'none', color: 'black', fontFamily: 'Rajdhani' }} >Free</Link> <br />
                                <Link style={{ textDecoration: 'none', color: 'black', fontFamily: 'Rajdhani' }} >Premium</Link> <br />
                                <Link style={{ textDecoration: 'none', color: 'black', fontFamily: 'Rajdhani' }} >Pricing</Link> <br />
                            </div>


                        </Menu>
                    </Box>
                    <Typography
                        variant="h20"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'Rajdhani',
                            fontWeight: 300,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        islavo prime
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

                        <div>
                            <Link style={{ textDecoration: 'none', color: 'white', fontFamily: 'Rajdhani', marginLeft: 10, }}>Free</Link>
                            <Link style={{ textDecoration: 'none', color: 'white', marginLeft: 10, fontFamily: 'Rajdhani' }} onClick={loginbtn}>Premium</Link>
                            <Link style={{ textDecoration: 'none', color: 'white', fontFamily: 'Rajdhani', marginLeft: 10, }} >Pricing</Link> <br />
                            <Link style={{ textDecoration: 'none', color: 'white', fontFamily: 'Rajdhani', marginLeft: 10, }} >Pricing</Link> <br />
                        </div>

                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" style={{ background: 'none' }} />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >

                            <div style={{ width: 100, textAlign: 'center' }}>
                                <Link style={{ textDecoration: 'none', color: 'black', fontFamily: 'Rajdhani' }} onClick={loginbtn}>Login</Link> <br />
                            </div>

                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default ResponsiveAppBar;
