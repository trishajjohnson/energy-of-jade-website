import React from 'react'

import Header from '../components/Header';
import SubscribeForm from '../components/SubscribeForm';

import { Button } from '@mui/material';
import { styled } from "@mui/material/styles";


const ContainerStyled = styled('div')({
  // padding: 50
});

const SectionStyled = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const ImageStyled = styled('img')({
  margin: '180px 200px 150px 100px'
});

const PStyled = styled('p')({
  margin: '25px auto',
  width: '60%'
});

const ButtonContainer = styled('div')({
  marginTop: 10,
  marginBottom: 10
});

const DarkButtonStyled = styled(Button)({
  color: 'black',
  backgroundColor: 'white',
  marginTop: 25,
  padding: 10,
  textDecoration: 'none',
  border: '.5px solid black',
  '&:hover': {
      backgroundColor: 'black',
      color: 'white',
      
  }
});

const LightButtonStyled = styled(Button)({
  color: 'white',
  backgroundColor: 'black',
  marginTop: 25,
  padding: 10,
  textDecoration: 'none',
  border: '.5px solid white',
  '&:hover': {
      backgroundColor: 'white',
      color: 'black'
  }
});

const Box = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign: 'center',
  margin: '0 auto'
});

const H2Styled = styled('h2')({
  color: 'white',
  // fontSize: 40,
  fontWeight: 300
});

function Home() {
  return (
    <div>
      <Header />
      <ContainerStyled>
        <SectionStyled
          sx={{
            flexDirection: 
              { 
                xs: 'column', 
                md: 'row' 
              }
          }}
        >
          <Box>
            <PStyled
              sx={{
                // width: {
                //   xs: '75%',
                //   md: 
                // }
              }}
            >
              Sacred bodywork such as massage, full body scrubs and wraps, yoni steaming, chakra cleansing, medicinal oils, healing herbs, 
              sound therapy, along with guided meditation, intentional rituals and oracle readings are some of the modalities that will be 
              used during our time together.  To learn more about the treatments I offer, click the button below.
            </PStyled>
            <ButtonContainer>
              <DarkButtonStyled size='small' href="/treatments">
                Learn More
              </DarkButtonStyled>
            </ButtonContainer>
          </Box>
          <ImageStyled 
            src="https://eojassets.s3.us-west-1.amazonaws.com/dominique-rivas-q3iVNEKJIyo-unsplash.jpeg" 
            sx={{
              boxShadow: {
                xs: '10px -10px 0px 0px rgba(67,84,80,0.80)',
                md: '30px -30px 0px 0px rgba(67,84,80,0.80)'
              },
              height: 300,
              width: 300,
              margin: {
                xs: '25px auto',
                md: '180px 200px 150px 100px'
              }
            }}  
          />
        </SectionStyled>
        <SectionStyled
          sx={{
            backgroundColor: 'black',
            flexDirection: 
              { 
                xs: 'column', 
                md: 'row' 
              }
          }}
        >
          <ImageStyled 
            src="https://eojassets.s3.us-west-1.amazonaws.com/engin-akyurt-ZbzYDboN7fg-unsplash.jpeg"
            sx={{
              boxShadow: {
                xs: '-10px -10px 0px 0px rgba(173,155,140,0.80)',
                md: '-30px -30px 0px 0px rgba(173,155,140,0.80)'
              },
              height: 300,
              width: 300,
              margin: {
                xs: '25px auto',
                md: '180px 200px 150px 100px'
              }
            }}
          />
          <Box>
            <PStyled
              sx={{
                color: 'white',
              }}
            >
              If you are striving to become your highest self, I can help!   
              Are you in the midst of a transformation? Do you have a broken heart?  Perhaps you are just thirsty for connection?  
              Whether you desire to raise your vibration for creativity orremove the blocks that are keeping you from manifesting the 
              life of your dreams, Energy of Jade was created for you!  Click the button below to learn about what packages we offer.
            </PStyled>
            <ButtonContainer>
              <LightButtonStyled size='small' href="/packages">
                See Packages
              </LightButtonStyled>
            </ButtonContainer>
          </Box>
        </SectionStyled>
        <SectionStyled
          sx={{
            flexDirection: 
              { 
                xs: 'column', 
                md: 'row' 
              }
          }}
        >
          <Box>
            <PStyled
              sx={{
            
              }}
            >
              Hello, my name is Jade and I am an Ayurvedic healer.  Since beginning my own practice, I stand in awe of what has 
              transpired in my own story.  Now, I wish to spend my time guiding others on their path to healing.  To learn more 
              about my story and Ayurveda, please click below.
            </PStyled>
            <ButtonContainer>
              <DarkButtonStyled size='small' href="/packages">
                Learn More
              </DarkButtonStyled>
            </ButtonContainer>
          </Box>
          <ImageStyled 
            src="https://eojassets.s3.us-west-1.amazonaws.com/meet_jade_4.jpg" 
            sx={{
              boxShadow: {
                xs: '10px -10px 0px 0px rgba(217,184,73,0.83)',
                md: '30px -30px 0px 0px rgba(217,184,73,0.83)'
              },
              height: 300,
              width: 200,
              margin: {
                xs: '25px auto',
                md: '180px 200px 150px 100px'
              }
            }}
          />
        </SectionStyled>
        <SectionStyled
          sx={{
            backgroundColor: 'black',
            flexDirection: 
              { 
                xs: 'column', 
                md: 'row' 
              }
          }}
        >
          <ImageStyled 
            src="https://eojassets.s3.us-west-1.amazonaws.com/alexander-andrews-JYGnB9gTCls-unsplash.jpeg"
            sx={{
              boxShadow: {
                xs: '-10px -10px 0px 0px rgba(48,43,39,0.83)',
                md: '-30px -30px 0px 0px rgba(48,43,39,0.83)'
              },
              height: 300,
              width: 300,
              margin: {
                xs: '25px auto',
                md: '180px 200px 150px 100px'
              }
            }}
          />
          <Box>
            <H2Styled
              sx={{
                fontSize: {
                  xs: 35,
                  md: 40
                },
                marginBottom: {
                  xs: 0
                }
              }}
            >
              Question or Comment?
            </H2Styled>
            <PStyled
              sx={{
                color: 'white',
              }}
            >
              Fill and submit our contact form and I'll get back to you at my earliest convenience!
            </PStyled>
            <ButtonContainer>
              <LightButtonStyled size='small' href="/contact">
                Contact Jade
              </LightButtonStyled>
            </ButtonContainer>
          </Box>
        </SectionStyled>
        <SectionStyled
          sx={{
            justifyContent: 'center',
            flexDirection: 
              { 
                xs: 'column', 
                md: 'row' 
              }
          }}
        >
          <Box
            sx={{
              textAlign: 'center',
              margin: '100px 0'
            }}
          >
            {/* <SubscribeForm /> */}
          </Box>
        </SectionStyled>
      </ContainerStyled>
    </div>
  );
}

export default Home;