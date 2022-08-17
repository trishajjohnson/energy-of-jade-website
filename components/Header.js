import React from 'react';

import { Button, styled } from '@mui/material';

const ButtonStyled = styled(Button)({
    // position: 'absolute',
    color: '#EEC373',
    textDecoration: 'none',
    transform: 'translate(23%, -1000%)',
    marginLeft: 'auto',
    marginRight: 'auto',
    border: '1px solid #EEC373',
    '&:hover': {
        color: 'white',
        border: '1px solid white'
    }
});

const HeaderStyled = styled('div')({
    display: 'flex',
    flexDirection: 'column',
});

const HeaderText = styled('div')({
    width: '100vw',
    backgroundColor: 'rgba(191, 217, 210, 0.5)',
    transform: 'translate(0, -100%)',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    boxShadow: '2px 2px 5px #434343',
    borderRadius: '3px',
});

const HeadingTitle = styled('h1')({
    color: 'white',
    marginBottom: '5px',
    textShadow: '2px 2px 5px #434343',
});

const HeadingSecondary = styled('h4')({
    color: 'white',
    fontWeight: 'lighter',
});

const Video = styled('video')({
    height: '85vh',
    width: '100vw',
    objectFit: 'cover',
});

function Header() {
    return (
        
        <HeaderStyled>
            <Video
                autoPlay
                // loop
                muted
                src={require('../public/jade-vid-3.mp4')}
            />
           
            <HeaderText sx={{ width: {xs: '90vw', md: '50vw'}, transform: {xs: 'translate(5%, -220%)', md: 'translate(50%, -125%)'} }}>
                <HeadingTitle sx={{ fontSize: {xs: 50, md: 100}, letterSpacing: {xs: 8, md: 14 } }}>Energy of Jade</HeadingTitle>
                <HeadingSecondary sx={{ fontSize: {xs: 15, md: 25 }, letterSpacing: {xs: 6, md: 14} }}>Rejuvinate.Reivent.Reclaim</HeadingSecondary>
            </HeaderText>

            <div>
                <a href="https://calendly.com/energy-of-jade" target="_blank">
                    <ButtonStyled size='large' sx={{ transform: {xs: 'translate(23%, -1000%)', md: 'translate(200%, -1250%)'} }}>
                        Book Your First Appointment
                    </ButtonStyled>
                </a>
            </div>
        </HeaderStyled>

    );
}

export default Header;
