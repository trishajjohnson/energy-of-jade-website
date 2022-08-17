import React from 'react';

import { Card, CardContent, Typography, styled } from '@mui/material';

const CardStyled = styled(Card)({
    borderRadius: 0,
    boxShadow: 'none',
    '&:hover': {
        borderBottom: '1px solid black',
        borderTop: '1px solid black',
    }
});

const Description = styled(Typography)({
    borderRadius: 0,
});


function TreatmentCard({treatment}) {

    return (
        <CardStyled id={treatment.targetId}>
            <CardContent>
                
                <Typography variant="h5" component="div">
                    {treatment.name}
                </Typography>

                <Description variant="body2">
                    {treatment.descr}
                </Description>

            </CardContent>
        </CardStyled>
    );
}

export default TreatmentCard; 