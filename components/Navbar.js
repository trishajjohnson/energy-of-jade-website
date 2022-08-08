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
import {
  usePopupState,
  bindTrigger,
  bindMenu,
} from 'material-ui-popup-state/hooks';

import JadeLogo from '../public/logo_tweak.png'

import { styled } from '@mui/material'

const packages = ['the Warrior Goddess', 'the Rumi', 'the Storm', 'the Right of Path', 'the Tower', 'the Phoenix', 'the Muse']
const pages = [{name: 'Home', path: ''}, {name: 'Packages', path: 'packages'}, {name: 'Treatments', path: 'treatments'}, {name: 'Meet Jade', path: 'meet-jade'}, {name: 'Contact', path: 'contact'}];

const AppBarStyled = styled(AppBar)({
  backgroundColor: 'black',
  borderBottom: '.5px solid white',
});

export default function Navbar() {
    const router = useRouter();

    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenNavMenu = (event) => {
      console.log("You are hovering over packages tab in navbar");
      console.log("event", event);
        setAnchorElNav(event.currentTarget);
    };
  
    const handleCloseNavMenu = (event) => {
      console.log("target", event.currentTarget);
      setAnchorElNav(null);
    };
  
    const handleRespMenuItemClick = (path) => {
      console.log("path", path);
      router.push(`/${path}`);
      setAnchorElNav(null);
    }

    const makeNavLink = (idx, page) => {
      if(page.name === "Packages") {
        const popupState = usePopupState({ variant: 'popover', popupId: 'demoMenu' })
        return (
          <div>
            {/* <MenuItem 
              key={page} 
              onClick={handleCloseNavMenu}
              onMouseOver={handleMouseOver}
              {...bindTrigger(popupState)}
              aria-owns={anchorElNav ? "simple-menu" : undefined}
              aria-haspopup="true"
            >
              <Typography textAlign="center">{page}</Typography>
            </MenuItem> */}
            <Button 
              variant="contained" 
              {...bindTrigger(popupState)}
              aria-owns={anchorElNav ? "simple-menu" : undefined}
              aria-haspopup="true"
              onClick={handleCloseNavMenu}
              onMouseOver={handleOpenNavMenu}
            >
              {page.name + 'hello'}
            </Button>
            <Menu 
              {...bindMenu(popupState)}
              // id="simple-menu"
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              MenuListProps={{ onMouseLeave: handleCloseNavMenu }}
            >
              {packages.map((idx, pkg) => {
                <MenuItem key={idx} onClick={popupState.close}>{pkg}</MenuItem>
              })}
            </Menu>
          </div>
        );
      } else {
        return (
          <MenuItem key={idx} onClick={handleCloseNavMenu}>
            <Typography textAlign="center">{page.name}</Typography>
          </MenuItem>
        );
      }
    };

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
                      src={JadeLogo} 
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
                    {pages.map((page) => (
                      <MenuItem key={page.name} onClick={() => handleRespMenuItemClick(page.path)}>
                        <Typography textAlign="center">{page.name}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
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