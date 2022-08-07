
import { Button } from "@mui/material";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    button: {
       position: 'absolute',
       top: '85%',
       left: '50%',
       color: '#EEC373',
       transform: 'translate(-50%, -50%)',
       marginLeft: 'auto',
       marginRight: 'auto',
       border: '1px solid #EEC373',
       '&:hover': {
           color: 'white',
           border: '1px solid white'
       }  
    },
    header: {
        width: '100vw',
        height: '100vh',
    },
    video: {
        height: '85vh',
        width: '100%',
        objectFit: 'cover',
    },
    headerText: {
        position: 'absolute',
        width: '60%',
        height: '55%',
        backgroundColor: 'rgba(191, 217, 210, 0.5)',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        boxShadow: '2px 2px 5px #434343',
        borderRadius: '3px',
    },
    headingTitle: {
        color: 'white',
        letterSpacing: '14px',
        fontSize: '100px',
        marginBottom: '5px',
        textShadow: '2px 2px 5px #434343',
    }, 
    headingSecondary: {
        color: 'white',
        fontSize: '25px',
        fontWeight: 'lighter',
        letterSpacing: '19px',
    }
});

function Header() {
    const styles = useStyles();

    return (
        
        <div className={styles.header}>
         
            <video
                autoPlay
                className={styles.video}
                // loop
                muted
                src={require('../public/jade-vid-3.mp4')}
            />
           
            <div className={styles.headerText}>
                <h1 className={styles.headingTitle}>Energy of Jade</h1>
                <h4 className={styles.headingSecondary}>Rejuvinate.Reivent.Reclaim</h4>
            </div>

            <div className="">
                <a href="https://calendly.com/energy-of-jade" target="_blank">
                    <Button
                        size='large'
                        className={styles.button}
                    >
                        Book Your First Appointment
                    </Button>
                </a>
            </div>
        </div>

    );
}

export default Header;
