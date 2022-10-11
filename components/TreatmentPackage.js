import React from 'react';

import Link from 'next/link';

import { 
    Card, 
    CardContent, 
    CardMedia, 
    Typography,
    styled
} from '@mui/material';

const CardStyled = styled(Card)({
    backgroundColor: 'black',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    marginBottom: 10,
    '&:hover': {
        cursor: 'pointer'
    },
});

const CardContentStyled = styled(CardContent)({
    transform: 'translate(0, -150%)',
    color: 'white',
});

const UlStyled = styled('ul')({
    listStyle: 'none',
    color: 'white',
    margin: 0,
    padding: 0,
});

const CardMediaStyled = styled(CardMedia)({
    height: '90%',
    objectFit: 'scale-down',
    transform: 'translate(0, 20%)'
});

const CardContentHover = styled(CardContent)({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%', 
    height: '100%',
    backgroundColor: 'black',
    display: 'none'
});


function TreatmentPackage({pkg}) {

    return (
        
        <Link href={`/packages/${pkg.id}`} passHref>
            <CardStyled sx={{ width: {xs: '100%', md: 600}, height: {xs: 250, md: 300} }}>
                <CardMediaStyled
                    component="img"
                    image={pkg.img}
                    alt={pkg.name}
                    sx={{
                        transform: {
                            xs: 'translate(0, 20%)',
                            md: 'translate(0, 15%)'
                        }
                    }}
                />
                <CardContentStyled sx={{ transform: {xs: 'translate(0, -120%)', md: 'translate(0, -150%)' } }}>
                    <Typography gutterBottom variant="h4" component="div">
                        {pkg.name}
                    </Typography>
                </CardContentStyled>
                <CardContentHover>
                    <Typography gutterBottom variant="body1" component="div">
                        <UlStyled>
                            {pkg.themes.map(t => {
                                return <li>{t}</li>
                            })}
                        </UlStyled>
                    </Typography>
                </CardContentHover>
            </CardStyled>
        </Link>
    );
}

export default TreatmentPackage;