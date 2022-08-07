import React from 'react';

import ContactForm from '../components/ContactForm';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    headingContainer: {
        display: 'flex',
        // backgroundColor: 'black',
    },
    form: {
        width: '50vw',
        height: '85vh',
    },
    formContainer: {
        display: 'flex',
        flexDirection: 'column',
    },
    item: {

    },
    img: {
        width: '100%',
        height: '100%', 
        objectFit: 'cover',
    },
    imgBox: {
        width: '50vw',
        height: '85vh',
    },
    questionBox: {
        textAlign: 'center',
        // color: 'white'
    }
});

export default function Contact() {
    const styles = useStyles();

    return (
        <div>
            <div className={styles.headingContainer}>
                <div className={styles.imgBox}>
                    <img className={styles.img} src='/uby-yanes-ntTxsvPCbpU-unsplash.jpeg' alt='contact header image' />
                </div>
                <div className={styles.formContainer}>
                    <div className={styles.form}>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
}