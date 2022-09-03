import React from 'react';

import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';


const ButtonStyled = styled(Button)({
    color: 'black',
    marginTop: 25,
    width: '300px',
    textDecoration: 'none',
    border: '1px solid black',
    '&:hover': {
        backgroundColor: 'black',
        color: 'white'
    }
});

const HeaderStyled = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '70vh',
    textAlign: 'center',
    backgroundImage: `linear-gradient(
        to right bottom, 
        hsla(0, 0%, 0%, 0.75), 
        hsla(0, 0%, 0%, 0.2)),  
        url("s3://eojassets/AdobeStock_232833514_resize.png")`,
        // url("/AdobeStock_232833514_resize.png")`,
    backgroundSize: 'cover',
    // backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
});

const HeaderText = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    marginTop: 150
});

const HeadingTitle = styled('h1')({
    color: '#f7f3f2',
    marginBottom: 0,
    // marginTop: 100,
    textShadow: '3px 3px 6px #171717',
});

const HeadingSecondary = styled('h4')({
    color: 'white',
    fontWeight: 'lighter',
    textShadow: '2px 2px 5px #229969, 3px 3px 6px #171717',
    textAlign: 'center',
    marginTop: 5
});


function Header() {
    
    return (
        
        <HeaderStyled>
            
            <HeaderText sx={{  }}>
                <HeadingTitle sx={{ fontSize: {xs: 50, md: 90}, letterSpacing: {xs: 8, md: 14 } }}>Energy of Jade</HeadingTitle>
                <HeadingSecondary sx={{ fontSize: {xs: 15, md: 25 }, letterSpacing: {xs: 6, md: 14} }}>Rejuvinate.Reivent.Reclaim</HeadingSecondary>
                {/* <div>
                    <ButtonStyled size='large' href="https://calendly.com/energy-of-jade" target="_blank">
                        Book Your First Appointment
                    </ButtonStyled>
                </div> */}
            </HeaderText>

              
           
        </HeaderStyled>

    );
}

export default Header;
