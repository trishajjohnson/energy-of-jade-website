import React, { useState } from 'react';
import axios from 'axios';

import Grid from "@material-ui/core/Grid";
import InputBase from '@mui/material/InputBase';
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    button: {
        border: '.5px solid black',
        borderRadius: 3,
        '&:hover': {
            backgroundColor: 'black',
            color: 'white',
        }
    },
    buttonBox: {
        width: 25,
        marginLeft: 5,
        marginTop: 10,
    },
    inputLabel: {
        color: 'white',
    },
    inputLabelDiff: {
        color: 'black',
    },

    input: {
        border: '.5px solid black',
        borderRadius: 3,
        paddingLeft: 5,
        lineHeight: 2,
        '&:focus': {
            border: '1px solid black'
        }
    },
    form: {
        width: '75%',
        margin: '0 auto',
    },
    textField: {
        marginTop: 10,
        borderRadius: 3,
        paddingLeft: 5
    },
    p: {
        fontSize: 20,
        marginTop: 10
    },
    question: {
        fontSize: 50,
        marginBottom: 0
    },
    questionBox: {
        margin: '100px 0 50px',
        textAlign: 'center'
    },
    submitted: {
        textAlign: 'center',
        marginTop: 250
    }
});

export default function ContactForm() {
    const styles = useStyles();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
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
        // call the email API to send the info
        try {
            const response = await axios.post("http://localhost:3000/api/sendMail", formData);
            console.log("response", response);
            setFormData({
                name: formData.name,
                email: "",
                message: "",
            });
            setIsSubmitted(true);
        } catch(error) {
            console.log("error", error);
        }
    }


    return (
        <div>
            {isSubmitted ? (
                <div className={styles.submitted}>
                    <h1>Message Sent!</h1>
                    <p className={styles.p}>Thanks for reaching out, {formData.name}!  We'll get back to you as soon as possible.</p>
                </div>
            ) : (
                <div>
                    <div className={styles.questionBox}>
                        <h1 className={styles.question}>Have a question?</h1>
                        <p className={styles.p}>Let's connect!</p>
                    </div>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <Grid container justifyContent="center" direction="column">
                            <Grid item>
                                <InputBase  
                                    id="name-input"
                                    name="name"
                                    placeholder="Name"
                                    type="text"
                                    value={formData.name}
                                    className={styles.textField} 
                                    fullWidth
                                    size="small"
                                    onChange={handleChange}
                                    inputProps={{className: styles.input}}
                                />
                            </Grid>
                            <Grid item>
                                <InputBase  
                                    id="email-input"
                                    name="email"
                                    placeholder="Email"
                                    type="email"
                                    value={formData.email}
                                    className={styles.textField} 
                                    fullWidth 
                                    size="small"
                                    onChange={handleChange}
                                    inputProps={{className: styles.input}}
                                />
                            </Grid>
                            <Grid item>
                                <InputBase  
                                    id="message-input"
                                    name="message"
                                    placeholder="Message"
                                    type="text"
                                    variant="outlined"
                                    value={formData.message}
                                    className={styles.textField} 
                                    fullWidth 
                                    multiline
                                    rows={5}
                                    size="small"
                                    onChange={handleChange}
                                    inputProps={{className: styles.input}}
                                />
                            </Grid>
                            <div className={styles.buttonBox}>
                                <Button className={styles.button} variant="outlined" type="submit">
                                    Submit
                                </Button>
                            </div>
                        </Grid>
                    </form>
                </div>
            )}
        </div>
    );
}