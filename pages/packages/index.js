import React, { useState } from 'react';

import TreatmentPackage from '../../components/TreatmentPackage';
import pkgs from '../../packageDetails';

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { styled } from '@mui/material'

const Card = styled(Grid)({
    textAlign: 'center',
    top: 0,
    left: '50%',
    margin: '5px',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '600px',
});

const CardContainer = styled(Container)({
    textAlign: 'center',
});

const Heading = styled('h1')({
    fontSize: '75px',
});


export default function Packages() {
    const [packages, setPackages] = useState(pkgs);

    return (
        <div>
            <CardContainer>
                <Heading>Packages</Heading>
                <Grid container alignItems="center" justify="center" spacing={2}>
                    {packages.map((p, i) => {
                        return (
                            <Card item key={i} xs={12} md={6}>
                                <TreatmentPackage sx={{mx: "auto"}} pkg={p} />
                            </Card>
                        );
                    })}
                </Grid>
            </CardContainer>
        </div>
    );
}