import TreatmentCard from '../components/treatmentCard';

import { Container } from '@mui/system';
import { styled } from '@mui/material';

import treatments from '../treatmentDetails';

const TreatmentContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    marginBottom: 50
});

const Header = styled('h1')({
    fontSize: '75px',
    textAlign: 'center',
    marginBottom: 0,
    marginTop: 25,
});


function Treatments() {

    return (
        <div>
            <TreatmentContainer>
                <Header>Treatment Details</Header>
                <Container sx={{ width: {xs: 'none', md: '50%' }}}>
                    {treatments.map(t => {
                        return <TreatmentCard treatment={t} />
                    })}
                </Container>
            </TreatmentContainer>
        </div>
    );
}

export default Treatments;