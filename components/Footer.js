import React from 'react';
import Image from 'next/image'

import { styled } from '@mui/material/styles';
import { IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/Youtube';
import FacebookIcon from '@mui/icons-material/Facebook';
import CopyrightIcon from '@mui/icons-material/Copyright';

import JadeLogo from '../public/logo_tweak.png'

const pages = [{name: 'Home', path: ''}, {name: 'Packages', path: 'packages'}, {name: 'Treatments', path: 'treatments'}, {name: 'Meet Jade', path: 'meet-jade'}, {name: 'Contact', path: 'contact'}];

const FooterStyled = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'black',
    color: 'white',
    height: 350,
    textAlign: 'center',
});

const TopFooterContainer = styled('div')({
    display: 'flex',
    justifyContent: 'space-evenly',
    paddingTop: 50
});

const BottomFooterContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
});

const NavLinks = styled('div')({

});

const UlStyled = styled('ul')({
    listStyle: 'none',
    paddingLeft: 0,
    width: 85
});

const LiStyled = styled('li')({
    marginBottom: 15,
    textAlign: 'left',
    '&:hover': {
        fontWeight: 'bold'
    }
});

const LinkStyled = styled('a')({
    color: 'white',
    textDecoration: 'none'
});

const BusinessDetailsContainer = styled('div')({
    display: 'flex',
    width: 250,
    justifyContent: 'space-between'
});

const BusinessLogo = styled('div')({
    marginTop: 18
});

const BusinessDetails = styled('div')({
    display: 'flex',
    flexDirection: 'column',
});

const BusinessName = styled('h1')({
    fontSize: 25,
    marginBottom: 5,
});

const BusinessAddress = styled('p')({
    fontSize: 14,
    margin: 0,
});

const Copyright = styled('div')({
    display: 'flex',
    justifyContent: 'center',
});

const IconButtonStyled = styled(IconButton)({
    cursor: 'auto'
});

const SociaMediaContainer = styled('div')({
    dispay: 'flex',
    flexDirection: 'column'
});

const SocialHeader = styled('h1')({
    fontSize: 20,
    color: 'white'
});

const SocialIcons = styled('div')({
    display: 'flex',
    justifyContent: 'space-between'
});

const CopyrightIconStyled = styled(CopyrightIcon)({
    fontSize: 12
});

const PStyled = styled('p')({
    margin: 0,
    paddingLeft: 2.5,
    paddingRight: 5.5,
    fontSize: 12
});


function Footer() {
    
    return (
        <FooterStyled>
            <TopFooterContainer>
                <NavLinks>
                    <UlStyled>
                        {pages.map((page) => {
                            return (
                                <LiStyled key={page.name}>
                                    <LinkStyled href={`/${page.path}`}>{page.name}</LinkStyled>
                                </LiStyled>
                            );
                        })}
                    </UlStyled>
                </NavLinks>
                <BusinessDetailsContainer>
                    <BusinessLogo>
                        <IconButtonStyled>
                            <Image 
                            src={JadeLogo} 
                            alt="Energy of Jade logo" 
                            width={50} 
                            height={50} 
                            />
                        </IconButtonStyled>
                    </BusinessLogo>
                    <BusinessDetails>
                        <BusinessName>
                            Energy of Jade
                        </BusinessName>
                        <BusinessAddress>
                            1234 Main Street
                        </BusinessAddress>
                        <BusinessAddress>
                            Santa Barbara, CA 93109
                        </BusinessAddress>
                        <BusinessAddress>
                            (123) 456-7890
                        </BusinessAddress>
                        
                    </BusinessDetails>
                </BusinessDetailsContainer>
                
                <SociaMediaContainer>
                        <SocialHeader>
                            FOLLOW US
                        </SocialHeader>
                        <SocialIcons>
                            <a href="https://www.instagram.com/"><InstagramIcon sx={{color: '#F9F9F9'}} fontSize='medium' /></a>
                            <a href="https://www.youtube.com/"><YouTubeIcon sx={{color: '#F9F9F9'}} fontSize='medium' /></a>
                            <a href="https://www.facebook.com/"><FacebookIcon sx={{color: '#F9F9F9'}} fontSize='medium' /></a>
                        </SocialIcons>
                </SociaMediaContainer>
            </TopFooterContainer>
            <BottomFooterContainer>
            <Copyright>
                <PStyled>Copyright</PStyled>
                <PStyled><CopyrightIconStyled fontSize='small' /></PStyled>
                <PStyled>2022 Energy of Jade</PStyled>
            </Copyright>
            </BottomFooterContainer>
        </FooterStyled>
    );
}


export default Footer;