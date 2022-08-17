import React from 'react';

import ContactForm from '../components/ContactForm';

import { styled } from '@mui/material';

const HeaderContainer = styled('div')({
    display: 'flex',
});

const ImgContainer = styled('div')({
    height: '85vh',
});

const Img = styled('img')({
    width: '100%',
    height: '100%', 
    objectFit: 'cover',
});

const FormContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
});

const Form = styled('div')({
    height: '85vh',
});


function Contact() {

    return (
        <div >
            <HeaderContainer sx={{ flexDirection: {xs: 'column', md: 'row'} }}>
                <ImgContainer sx={{ width: {xs: '100%', md: '50%'} }}>
                    <Img src='/uby-yanes-ntTxsvPCbpU-unsplash.jpeg' alt='contact header image' />
                </ImgContainer>
                <FormContainer sx={{ width: {xs: '100%', md: '50%'} }}>
                    <Form>
                        <ContactForm />
                    </Form>
                </FormContainer>
            </HeaderContainer>
        </div>
    );
}


export default Contact;