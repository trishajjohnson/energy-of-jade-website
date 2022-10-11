import { useRouter } from 'next/router';

import pkgs from '../../packageDetails';

import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const disclaimer = `All healing packages will be customized to the client,
                    their constitution, needs and goals.  This is not a religious
                    practice, it is a spiritual one.  We honor the individual,
                    their thoughts, emotions and their personal experience.
                    Our goal is to connect spiritually, channel our highest self,
                    cleanse energetically, receive clarity and be renewed.
                    Sometimes in life you need a shift in perspective and it
                    might take practicing radical acceptance.  Letting go is not
                    easy and takes a repeated conscious effort but it will
                    happen.  This act of will comes with much more ease when
                    your channels are cleansed.   Ancient Ayurvedic wisdom used
                    to design energetic healing treatments and rituals for the
                    mind, body and soul.  Sacred bodywork such as massage, full
                    body scrubs and wraps, yoni steaming, chakra cleansing,
                    medicinal oils, herbs, sound therapy, along with guided
                    meditation and oracle readings are some of the modalities
                    that will be used during our time together.  Shirodhara
                    will be included in all packages in order to awaken and
                    cleanse your third eye to enhance your intuition in your
                    pursuit to move forward.  Healthy catered lunch is included
                    as well as dosha specific herbal teas and organic fresh
                    juice.`;

const Header = styled('div')({
    backgroundColor: 'black',
    position: 'relative',
    width: '100vw',
    height: '65vh',
    textAlign: 'center',
});

const HeaderImg = styled('img')({
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 300,
    filter: 'opacity(90%)',
});

const HeadingTitle = styled('h1')({
    color: 'white',
    position: 'absolute',
    left: '50%',
    transform: 'translate(-50%, -100%)',
    letterSpacing: '14px',
    marginBottom: '5px',
    textShadow: '2px 2px 5px rgba(245, 245, 245, 0.29)',
});


const Description = styled('div')({
    margin: '50px auto',
    width: '50%',
});

const ButtonStyled = styled(Button)({
    color: 'white',
    border: '1px solid black',
    borderRadius: 2,
    backgroundColor: 'black',
    '&:hover': {
        color: 'white',
        border: '1px solid black',
        backgroundColor: 'black',
        boxShadow: '2px 2px 5px #434343',
    }
});

const ButtonContainer = styled('div')({
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10
});

const Disclaimer = styled('div')({
    width: '50%',
    margin: '0 auto 50px'
});


function PackageDetails() {
    const router = useRouter();
    const packageId = router.query.packageid;
    const pkg = pkgs.filter(p => p.id === packageId)[0];
    
    if(!pkg) {
        return <p>Unable to locate package!</p>
    }

    return (
        <div>
            
            <Header>
                <HeaderImg src={pkg.img} alt={pkg.name} />
                <HeadingTitle sx={{ fontSize: {xs: 40, md: 52}, top: {xs: '85%', md: '80%'} }}>{pkg.name}</HeadingTitle>
            </Header>

            <Description>
                {pkg.quote && (
                    <p>{pkg.quote}</p>
                )}
                <p>{pkg.descr}</p>
                    
            </Description>
            <Disclaimer>
                {disclaimer}
            </Disclaimer>
            
            <ButtonContainer>
                <ButtonStyled
                    size='large'
                    href="https://calendly.com/energy-of-jade" 
                    target="_blank"
                >
                    Book Appointment
                </ButtonStyled>
            </ButtonContainer>
        </div>
       
    )
}

export default PackageDetails;