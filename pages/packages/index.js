import React from 'react';

import TreatmentPackage from '../../components/TreatmentPackage';
import pkgs from '../../packageDetails';

import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

const Card = styled(Grid)({
    textAlign: 'center',
    top: 0,
    left: '50%',
    margin: '5px',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '600px',
});

const ContainerStyled = styled('div')({
    // margin: 50
});

const CardContainer = styled('div')({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin: 50
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
        url("https://eojassets.s3.us-west-1.amazonaws.com/christin-hume-0MoF-Fe0w0A-unsplash.jpeg")`,
    backgroundSize: 'cover',
    // backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
});

const Header = styled('h1')({
    color: '#f7f3f2',
    fontSize: '75px',
    textAlign: 'center',
    textShadow: '3px 3px 6px #171717',
});
 

function Packages() {

    return (
            <ContainerStyled>
                <HeaderContainer>
                    <Header>Packages</Header>
                </HeaderContainer>
                {/* <Grid container alignItems="center" justify="center" spacing={2}> */}
                <CardContainer>
                    {pkgs.map((p, i) => {
                        return (
                            <Card item key={i} xs={12} md={6}>
                                <TreatmentPackage sx={{mx: "auto"}} pkg={p} />
                            </Card>
                        );
                    })}
                </CardContainer>
                {/* </Grid> */}
            </ContainerStyled>
    );
}


export default Packages;