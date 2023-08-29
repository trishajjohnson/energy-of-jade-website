import React, { useState } from 'react';

import { styled } from '@mui/material/styles';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const images = ["https://eojassets.s3.us-west-1.amazonaws.com/spa_promo_photo.jpeg", "https://eojassets.s3.us-west-1.amazonaws.com/DSC01288.jpeg", "https://eojassets.s3.us-west-1.amazonaws.com/DSC01363.jpeg", "https://eojassets.s3.us-west-1.amazonaws.com/DSC01382.jpeg", "https://eojassets.s3.us-west-1.amazonaws.com/DSC01418.jpeg"];


const ImageStyled = styled('img')({
    width: '100%',
    marginBottom: {
        xs: 5,
        md: 0
      }
});

const SectionStyled = styled("div")({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});


function Carousel() {
    const [currentImage, setCurrentImage] = useState(images[0]);
    const [currentImageId, setCurrentImageId] = useState(0);

    function handleClick(evt) {
        evt.preventDefault();

        const direction = evt.target.id;
        console.log("direction", direction);
        console.log(`${direction} arrow clicked!`);
        let imgId = currentImageId;

        if(direction === "forward") {
            imgId += 1;
        }
        if(direction === "back") {
            imgId -= 1;
        }

        console.log("imgId after add/subtract", imgId);
        console.log("images.length", images.length);
        if(imgId < 0) {
            imgId = images.length - 1;
        } 
        if(imgId > images.length - 1) {
            imgId = 0;
        }

        setCurrentImageId(imgId);
        setCurrentImage(images[imgId])

        console.log("imgId", imgId);

    }
    return (
        <SectionStyled>
            <ArrowBackIosIcon 
                id="back" 
                onClick={handleClick} 
                cursor="pointer" 
                sx={{
                    color: 'white', 
                    alignSelf: 'center',
                    opacity: 0.5,
                    '&:hover': {
                        opacity: 1
                    }
                }} 
            />
            <ImageStyled 
                src={currentImage}
            />
            <ArrowForwardIosIcon 
                id="forward" 
                onClick={handleClick} 
                cursor="pointer" 
                sx={{
                    color: 'white', 
                    alignSelf: 'center',
                    opacity: 0.5,
                    '&:hover': {
                        opacity: 1
                    }
                }}
            />
        </SectionStyled>
    );
}


export default Carousel;