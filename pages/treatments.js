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

const HeaderContainer = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
    height: '70vh',
    backgroundImage: `linear-gradient(
        to right bottom, 
        hsla(0, 0%, 0%, 0.75), 
        hsla(0, 0%, 0%, 0.2)),  
        url("/chelsea-shapouri-r40EYKVyutI-unsplash.jpeg")`,
    backgroundSize: 'cover',
    backgroundPosition: '0 30%',
    // backgroundAttachment: 'fixed',
});

const Header = styled('h1')({
    color: '#f7f3f2',
    fontSize: '75px',
    textAlign: 'center',
    textShadow: '3px 3px 6px #171717',
});


function Treatments() {

    return (
        <div>
            <HeaderContainer>
                <Header>Treatment Details</Header>
            </HeaderContainer>
            <TreatmentContainer>
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