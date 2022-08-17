import React from 'react';

import TreatmentPackage from '../../components/TreatmentPackage';
import pkgs from '../../packageDetails';

import { Container, Grid, styled } from "@mui/material";

const Card = styled(Grid)({
    textAlign: 'center',
    top: 0,
    left: '50%',
    margin: '5px',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '600px',
});

const ContainerStyled = styled(Container)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    marginBottom: 50
});

const CardContainer = styled(Container)({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
});

const Heading = styled('h1')({
    fontSize: '75px',
    marginBottom: 0,
    marginTop: 25
});


function Packages() {

    return (
        <div>
            <ContainerStyled>
                <Heading>Packages</Heading>
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
        </div>
    );
}


export default Packages;