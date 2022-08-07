import { useRouter } from 'next/router';

import pkgs from '../../packageDetails';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@mui/material/Button';
import { withThemeCreator } from '@material-ui/styles';

const disclaimer = "All healing packages will be customized to the client, \
                    their constitution, needs and goals  This is not a religious \
                    practice, it is a spiritual one.  We honor the individual, \
                    their thoughts, emotions and their personal experience. \
                    Our goal is to connect spiritually, channel our highest self, \
                    cleanse energetically, receive clarity and be renewed.  \
                    Sometimes in life you need a shift in perspective and it \
                    might take practicing radical acceptance.  Letting go is not \
                    easy and takes a repeated conscious effort but it will \
                    happen.  This act of will comes with much more ease when \
                    your channels are cleansed.   Ancient Ayurvedic wisdom used \
                    to design energetic healing treatments and rituals for the \
                    mind, body and soul.  Sacred bodywork such as massage, full \
                    body scrubs and wraps, yoni steaming, chakra cleansing, \
                    medicinal oils, herbs, sound therapy, along with guided \
                    meditation and oracle readings are some of the modalities \
                    that will be used during our time together.  Shirodhara \
                    will be included in all packages in order to awaken and \
                    cleanse your third eye to enhance your intuition in your \
                    pursuit to move forward.  Healthy catered lunch is included \
                    as well as dosha specific herbal teas and organic fresh \
                    juice.";

const useStyles = makeStyles({
    header: {
        // display: 'block',
        backgroundColor: 'black',
        position: 'relative',
        width: '100vw',
        height: '65vh',
        textAlign: 'center',
    },
    headerImg: {
        // display: 'flex',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        height: 300,
        filter: 'opacity(90%)',
    },
    headingTitle: {
        color: 'white',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -100%)',
        letterSpacing: '14px',
        fontSize: '90px',
        marginBottom: '5px',
        textShadow: '2px 2px 5px rgba(245, 245, 245, 0.29)',
    }, 
    button: {
        color: 'black',
        border: '1px solid black',
        borderRadius: 2,
        backgroundColor: 'white',
        '&:hover': {
            color: 'white',
            border: '1px solid black',
            backgroundColor: 'black',
            boxShadow: '2px 2px 5px #434343',
        }
    },
    descr: {
        margin: '50px auto',
        width: '75%',
        textAlign: 'center',
    },
    hr: {
        border:'.5px solid white',
        padding: 0,
        margin: 0,
    },
    span: {
        fontSize: 60,
        fontFamily: 'Cedarville Cursive, cursive',
        color: '#27c47e',
    }
});


export default function PackageDetails() {
    const router = useRouter();
    const packageId = router.query.packageid;
    const pkg = pkgs.filter(p => p.id === packageId)[0];
    
    const styles = useStyles();

    if(!pkg) {
        return <p>Unable to locate package!</p>
    }

    return (
        <div>
            {/* <hr className={styles.hr} /> */}
            <div className={styles.header}>
                <img src={pkg.img} alt={pkg.name} className={styles.headerImg} />
                <h1 className={styles.headingTitle}><span className={styles.span}>the</span>{pkg.name}</h1>
            </div>

            <div className={styles.descr}>
                {pkg.quote && (
                    <p>{pkg.quote}</p>
                )}
                <p>{pkg.descr}</p>
                <a href="https://calendly.com/energy-of-jade" target="_blank">
                    <Button
                        size='large'
                        className={styles.button}
                        >
                        Book Appointment
                    </Button>
                </a>
            </div>

        </div>
       
    )
}