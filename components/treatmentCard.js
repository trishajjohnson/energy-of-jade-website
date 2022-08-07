import React from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    card: {
        // color: 'white',
        // backgroundColor: 'black',
        borderBottom: '.5px solid black',
        borderRadius: 0,        
    },
    descr: {
        maxWidth: '75%',
        margin: '0 auto',
    },
})
export default function TreatmentCard({treatment}) {
    const styles = useStyles();
    console.log("treatment", treatment);
    return (
        <Card className={styles.card} id={treatment.targetId} sx={{ minWidth: 275 }}>
            <CardContent>
                {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Word of the Day
                </Typography> */}
                <Typography variant="h5" component="div">
                    {treatment.name}
                </Typography>
                {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    adjective
                </Typography> */}
                <Typography className={styles.descr} variant="body2">
                    {treatment.descr}
                </Typography>
            </CardContent>
            {/* <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions> */}
        </Card>
    );
}