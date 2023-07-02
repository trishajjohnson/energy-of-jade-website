import React from 'react';

import { styled } from '@mui/material/styles';
import { IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import CopyrightIcon from '@mui/icons-material/Copyright';


const pages = [{name: 'Home', path: ''}, {name: 'Packages', path: 'packages'}, {name: 'Services', path: 'services'}, {name: 'Meet Jade', path: 'meet-jade'}, {name: 'Contact', path: 'contact'}];

const FooterStyled = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'black',
    color: 'white',
    textAlign: 'center',
});

const TopFooterContainer = styled('div')({
    display: 'flex',
    paddingTop: 50
});

const BottomFooterContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 25
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
    justifyContent: 'center'
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
            <TopFooterContainer 
                sx={{ 
                    flexDirection: { 
                        xs: 'column', 
                        md: 'row' 
                    },
                    justifyContent: {
                        xs: 'center',
                        md: 'space-evenly'
                    },
                    margin: {
                        xs: '0 auto 30px',
                        md: 0
                    }
                }}
            >
                <NavLinks>
                    <UlStyled
                        sx={{
                            margin: {
                                xs: '0 auto 20px'
                            }
                        }}
                    >
                        {pages.map((page) => {
                            return (
                                <LiStyled 
                                    sx={{
                                        textAlign: {
                                            xs: 'center',
                                            md: 'left'
                                        }
                                    }}
                                    key={page.name}>
                                    <LinkStyled href={`/${page.path}`}>{page.name}</LinkStyled>
                                </LiStyled>
                            );
                        })}
                    </UlStyled>
                </NavLinks>
                <BusinessDetailsContainer
                    sx={{
                        marginBottom: {
                            xs: 5
                        },
                        flexDirection: {
                            xs: 'column',
                            md: 'row'
                        }
                    }}
                >
                    <BusinessLogo>
                        <IconButtonStyled>
                            <img 
                            src="https://eojassets.s3.us-west-1.amazonaws.com/logo_tweak.png"
                            alt="Energy of Jade logo" 
                            width={50} 
                            height={50} 
                            />
                        </IconButtonStyled>
                    </BusinessLogo>
                    <BusinessDetails>
                        <BusinessName
                            sx={{
                                marginTop: {
                                    xs: 0,
                                    md: 2.5
                                }
                            }}
                        >
                            Energy of Jade
                        </BusinessName>
                        {/* <BusinessAddress>
                            1234 Main Street
                        </BusinessAddress> */}
                        <BusinessAddress>
                            Santa Barbara, CA 93109
                        </BusinessAddress>
                        <BusinessAddress>
                            (805) 668-4411
                        </BusinessAddress>
                        
                    </BusinessDetails>
                </BusinessDetailsContainer>
                
                <SociaMediaContainer>
                        <SocialHeader>
                            FOLLOW US
                        </SocialHeader>
                        <SocialIcons>
                            <a href="https://www.instagram.com/"><InstagramIcon sx={{color: '#F9F9F9', marginRight: 1}} fontSize='medium' /></a>
                            <a href="https://www.facebook.com/"><FacebookIcon sx={{color: '#F9F9F9', marginLeft: 1}} fontSize='medium' /></a>
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