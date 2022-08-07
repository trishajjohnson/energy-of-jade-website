import React from 'react';

import Link from 'next/link';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core/styles';

import treatmentDetails from '../treatmentDetails';

const useStyles = makeStyles({
    card: {
       position: 'relative',
       maxWidth: 500, 
       height: 250,
       maxHeight: 500,
       margin: 10,
       marginLeft: 'auto',
       marginRight: 'auto',
       '&:hover .hover': {
        display: 'block',
     },
    },
    overlay: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white',
    },
    hover: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%', 
        height: '100%',
        backgroundColor: 'black',
        display: 'none',
    },
    ul: {
        listStyle: 'none',
        color: 'white',
        margin: 0,
        padding: 0,
    },
    learnMore: {
        position:'absolute',
        bottom: 10,
        left: '50%',
        transform: 'translate(-50%)',
        color: 'white',
        opacity: '80%',
        '&:hover': {
            opacity: '100%',
            border: '.5px solid white',
        }
    },
    treatP: {
        margin: 0,
        cursor: 'pointer',
    },
    anchorLink: {
        scrollBehavior: 'smooth',
        opacity: '75%',
        '&:hover': {
            fontSize: '1.1rem',
            // textDecoration: 'underline',
            opacity: '100%',
        }
    }
});

function TreatmentPackage({pkg}) {
    const styles = useStyles();
    console.log("package in card", pkg);
    return (
     
        <Card className={styles.card}>
            <CardMedia
                component="img"
                // height="140"
                image={pkg.img}
                alt={pkg.name}
            />
            <CardContent className={styles.overlay}>
                <Typography gutterBottom variant="h4" component="div">
                    {pkg.name}
                </Typography>
            </CardContent>
            <CardContent className={['hover', styles.hover]}>
                <Typography gutterBottom variant="body1" component="div">
                    <ul className={styles.ul}>
                        {pkg.themes.map(t => {
                            return <li className={styles.anchorLink}>{t}</li>
                        })}
                    </ul>
                </Typography>
                <CardActions>
                    <Link href={`/packages/${pkg.id}`} passHref>
                        <Button className={styles.learnMore} size="small">Learn More</Button>
                    </Link>
                </CardActions>
            </CardContent>
        </Card>
    );
}

export default TreatmentPackage;