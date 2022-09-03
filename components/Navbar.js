import React, { useState } from 'react';

import Link from 'next/link';
import Image from 'next/image'
import { useRouter } from 'next/router';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

// import JadeLogo from '../public/logo_tweak.png'

import { styled } from '@mui/material'

const pages = [{name: 'Home', path: ''}, {name: 'Packages', path: 'packages'}, {name: 'Treatments', path: 'treatments'}, {name: 'Meet Jade', path: 'meet-jade'}, {name: 'Contact', path: 'contact'}];

const AppBarStyled = styled(AppBar)({
  backgroundColor: 'black',
  boxShadow: 'none',
  // position: 'fixed'
});

const MenuStyled = styled(Menu)({
  backgroundColor: 'none',
  '& ul': {
    backgroundColor: 'black',
    color: 'white',
  },
});


function Navbar() {
    const router = useRouter();

    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const handleRespMenuItemClick = (path) => {
      router.push(`/${path}`);
      handleCloseNavMenu();
    }

    return (
      <AppBarStyled position="static">
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
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              <IconButton>
                <Image 
                  src="s3://eojassets/logo_tweak.png" 
                  // src={JadeLogo} 
                  alt="Energy of Jade logo" 
                  width={50} 
                  height={50} 
                />
              </IconButton>
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
              <MenuStyled
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
                {pages.map((page) => (
                  <MenuItem key={page.name} onClick={() => handleRespMenuItemClick(page.path)}>
                    <Typography textAlign="center">{page.name}</Typography>
                  </MenuItem>
                ))}
              </MenuStyled>
            </Box>
                
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              <IconButton>
                <Image 
                  src={JadeLogo} 
                  alt="Energy of Jade logo" 
                  width={50} 
                  height={50} 
                />
              </IconButton>
            </Typography>

            <Box 
              sx={{ 
                flexGrow: 1, 
                display: { 
                  xs: 'none', 
                  md: 'flex' 
                }, 
                justifyContent: 'flex-end', 
              }}
            >
              {pages.map((page) => (
                <Link key={page.name} href={`/${page.path}`}>
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ 
                      my: 2, 
                      color: 'white', 
                      display: 'block' 
                    }}
                  >
                    {page.name}
                  </Button>
                </Link>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBarStyled>
    )
}


export default Navbar;