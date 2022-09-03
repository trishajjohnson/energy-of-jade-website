import React from 'react';

import ContactForm from '../components/ContactForm';

import { styled } from '@mui/material/styles';

const ContainerStyled = styled('div')({
    // display: 'flex',
    // flexDirection: 'column',
    marginBottom: 50, 
    alignItems: 'center'
});

const HeaderContainer = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '70vh',
    backgroundImage: `linear-gradient(
        to right bottom, 
        hsla(0, 0%, 0%, 0.75), 
        hsla(0, 0%, 0%, 0.2)),  
        url("/uby-yanes-ntTxsvPCbpU-unsplash.jpeg")`,
    backgroundSize: 'cover',
    backgroundPosition: '0 70%',
    // backgroundAttachment: 'fixed',
});

const Header = styled('h1')({
    color: '#f7f3f2',
    fontSize: '75px',
    textAlign: 'center',
    textShadow: '3px 3px 6px #171717',
});

const FormContainer = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    margin: '0 auto'
});


function Contact() {

    return (
        <ContainerStyled>

            <HeaderContainer>
                <Header>Contact</Header>
            </HeaderContainer>

            <FormContainer sx={{ width: {xs: '100%', md: '50%'} }}>   
                <ContactForm />
            </FormContainer>

        </ContainerStyled>
        
    );
}


export default Contact;