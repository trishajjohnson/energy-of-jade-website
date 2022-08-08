
import { Button } from "@mui/material";
import { styled } from '@mui/material'

const ButtonStyled = styled(Button)({
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
});

const HeaderStyled = styled('div')({
    width: '100vw',
    height: '100vh',
});

const HeaderText = styled('div')({
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
});

const HeadingTitle = styled('h1')({
    color: 'white',
    letterSpacing: '14px',
    fontSize: '100px',
    marginBottom: '5px',
    textShadow: '2px 2px 5px #434343',
});

const HeadingSecondary = styled('h4')({
    color: 'white',
    fontSize: '25px',
    fontWeight: 'lighter',
    letterSpacing: '19px',
});

const Video = styled('video')({
    height: '85vh',
    width: '100%',
    objectFit: 'cover',
});

function Header() {
    return (
        
        <HeaderStyled>
            <Video
                autoPlay
                // loop
                muted
                src={require('../public/jade-vid-3.mp4')}
            />
           
            <HeaderText>
                <HeadingTitle>Energy of Jade</HeadingTitle>
                <HeadingSecondary>Rejuvinate.Reivent.Reclaim</HeadingSecondary>
            </HeaderText>

            <div>
                <a href="https://calendly.com/energy-of-jade" target="_blank">
                    <ButtonStyled size='large'>
                        Book Your First Appointment
                    </ButtonStyled>
                </a>
            </div>
        </HeaderStyled>

    );
}

export default Header;
