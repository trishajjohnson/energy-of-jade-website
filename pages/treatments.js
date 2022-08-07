import TreatmentCard from '../components/treatmentCard';

import Container from "@mui/system/Container";
import { makeStyles } from '@material-ui/core/styles';

import treatments from '../treatmentDetails';

const useStyles = makeStyles({
    card: {
        textAlign: 'center',
        top: 0,
        left: '50%',
        margin: '5px',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '600px',
    },
    cardContainer: {
        textAlign: 'center',
    },
    heading: {
        fontSize: '75px',
    },
    title: {
        marginTop: '100px',
        paddingTop: '50px',
        fontSize: '40px',
    },
    treatments: {
        // color: 'white',
    },
    treatmentContainer: {
        textAlign: 'center',
    } 
});


export default function Treatments() {
    const styles = useStyles();

    return (
        <div>
            <div className={styles.treatmentContainer}>
                <h1 className={styles.heading}>Treatment Details</h1>
                <Container className={[styles.cardContainer, styles.treatments]}>
                    {treatments.map(t => {
                        return <TreatmentCard treatment={t} />
                    })}
                </Container>
            </div>
        </div>
    );
}