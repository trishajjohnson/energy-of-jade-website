import React, { useState } from 'react';
import axios from 'axios';

import { Grid, Button, InputBase } from "@mui/material";
import { styled } from '@mui/material/styles';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const ContainerStyled = styled('div')({

});

const MessageContainer = styled('div')({
    textAlign: 'center',
    marginTop: 25
});

const Paragraph = styled('p')({
    fontSize: 20,
    fontWeight: 100,
    marginTop: 10,
    width: {
        md: 700
    }
});

const InputBaseStyled = styled(InputBase)({
    marginTop: 10,
    borderRadius: 3,
    paddingLeft: 5
});

const StyledInput = styled(InputBaseStyled)({
    border: '.5px solid black',
    borderRadius: 3,
    paddingLeft: 5,
    lineHeight: 2,
    '&:focus': {
        border: '1px solid black'
    }
});

const FormStyled = styled('form')({
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
    margin: '10px auto',
    textAlign: 'center'
});

const ButtonContainer = styled('div')({
    marginTop: 10, 
    color: 'white',
});

const ButtonStyled = styled(Button)({
    border: '1px solid black',
    borderRadius: 3,
    color: 'white',
    backgroundColor: 'black',
    '&:hover': {
        backgroundColor: 'black',
        color: 'white',
        boxShadow: '2px 2px 5px 0px rgba(0,0,0,0.5)',
        border: '1px solid black'
    }
});

const ErrorStyled = styled('div')({
    backgroundColor: '#f7a4a1',
});

const H2Styled = styled('h2')({
    color: 'white',
    fontSize: 40,
    fontWeight: 300,
    marginTop: 0
});


function SubscribeForm() {

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errors, setErrors] = useState([]);
    const [formData, setFormData] = useState({
        email: ""
    });

    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }

    async function handleSubmit(evt) {
        evt.preventDefault();
        console.log("You just subscribed!");
        // call the email API to add email to subscribe contact list.
        try {
            const response = await axios.post(`${BASE_URL}/api/addContact`, formData);
            console.log("response in frontend", response);
            if(response.data.status === "subscribed") {
                setFormData({
                    email: ""
                });
                setIsSubmitted(true);
            } else {
                setErrors([response.data.detail]);
            }
        } catch(error) {
            console.log("error", error);
        }
    }

    return (
        <ContainerStyled
            sx={{
                margin: '0 25px'
            }}
        >
            {isSubmitted ? (
                <MessageContainer>
                    <h1>Thanks for Subscribing!</h1>
                    <Paragraph>
                        Thank you for subscribing to Energy of Jade!  Now we can keep you informed on what's new.  Also, keep an eye 
                        out for special offers and promotions.  We appreciate you and your support!
                    </Paragraph>
                </MessageContainer>
            ) : (
                <div>
                    <H2Styled
                        sx={{
                            color: 'black'
                        }}  
                    >
                        Let's Stay Connected!
                    </H2Styled>
                    <Paragraph>
                        Keep up to date on what's new at Energy of Jade, specials, new packages and services, giveaways and much more.
                    </Paragraph>
                    {errors.map(error => {
                        return <ErrorStyled>{error}</ErrorStyled>
                        
                    })}
                    <FormStyled onSubmit={handleSubmit}>
                        <Grid container justifyContent="center" direction="column">
                            <Grid item>
                                <StyledInput  
                                    id="email-input"
                                    name="email"
                                    placeholder="Email"
                                    type="email"
                                    value={formData.email} 
                                    fullWidth 
                                    size="small"
                                    onChange={handleChange}
                                />
                            </Grid>
                            
                            <ButtonContainer>
                                <ButtonStyled variant="outlined" type="submit">
                                    Subscribe
                                </ButtonStyled>
                            </ButtonContainer>
                        </Grid>
                    </FormStyled>
                </div>
            )}
        </ContainerStyled>
    )
};

export default SubscribeForm;