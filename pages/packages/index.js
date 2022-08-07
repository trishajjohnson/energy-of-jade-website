import React, { useState } from 'react';

import TreatmentPackage from '../../components/TreatmentPackage';

import pkgs from '../../packageDetails';

import Container from "@mui/system/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';

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
});


export default function Packages() {
    const [packages, setPackages] = useState(pkgs);
    const styles = useStyles();

    return (
        <div>
            <Container className={styles.cardContainer}>
                <h1 className={styles.heading}>Packages</h1>
                <Grid container alignItems="center" justify="center" spacing={2}>
                    {packages.map((p, i) => {
                        return (
                            <Grid  className={styles.card} item key={i} xs={12} md={6}>
                                <TreatmentPackage sx={{mx: "auto"}} pkg={p} />
                            </Grid>
                        );
                    })}
                </Grid>
            </Container>
        </div>
    );
}