import React from 'react'

import Header from '../components/Header';
import SubscribeForm from '../components/SubscribeForm';

import { Button } from '@mui/material';
import { styled } from "@mui/material/styles";


const SectionStyled = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const ImageStyled = styled('img')({
});

const PStyled = styled('p')({
  margin: '25px auto',
  width: '60%'
});

const ButtonContainer = styled('div')({
  marginTop: 10,
  marginBottom: 25
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
});

const H1Styled = styled('h1')({
  fontSize: 25,
  fontWeight: 100,
  textAlign: 'center',
  width: '80%'
});

const H2Styled = styled('h2')({
  color: 'white',
  fontWeight: 300
});

const PackageCard = styled('div')({
  border: '1px solid white',
  borderRadius: 3,
  margin: 10
});

const HrStyled = styled('hr')({
  textAlign: 'center',
  margin: '0 auto', 
  color: 'white',
  width: 25
});

const SpanStyled = styled('span')({
  fontSize: 30,
  fontWeight: 600,
})

function Home() {
  return (
    <div>
      <Header />

        {/* <SectionStyled
          sx={{
            backgroundColor: 'white',
            display: 'flex',
            flexDirection: 'column',
            margin: {
              xs: '25px auto',
              md: '100px auto'
            }
          }}
        >
          <H1Styled>
            This is about <SpanStyled>empowerment</SpanStyled>, <SpanStyled>forgiveness</SpanStyled> and <SpanStyled>moving forward</SpanStyled>.  This is very intentional work.  
            These packages are curated especially for you.  Medicinal oils and tonics that are dosha specific and carefully crafted to <SpanStyled>match the vibration of 
            your potential</SpanStyled>.
          </H1Styled>
          <H1Styled>
            <SpanStyled sx={{ fontSize: 35 }}>Now is the time!  You found your way here….you are ready!</SpanStyled>
          </H1Styled>
        </SectionStyled> */}

        <SectionStyled
          sx={{
            backgroundColor: 'black',
            flexDirection: {
              xs: 'column',
              md: 'row'
            },
            margin: {
              xs: '25px auto 0',
              md: '100px'
            },
            padding: {
              xs: 0,
              md: 10
            }
          }}
        >
          <Box
            sx={{
              backgroundColor: 'black',
              textAlign: {
                xs: 'center',
                md: 'left'
              }
            }}
          >
            <H2Styled
              sx={{
                color: '#09db8b',
                fontSize: 18,
                fontWeight: 400 ,
                marginTop: {
                  xs: 5,
                  md: 0
                }               
              }}
            >
              WHAT IS ENERGY OF JADE?
            </H2Styled>
            <H2Styled
              sx={{
                color: 'white',
                fontSize: 28,
                fontWeight: 'bold',
                width: {
                  xs: '100%',
                  md: 600
                }
              }}
            >
              A private wellness space in Santa Barbara.
            </H2Styled>
            <PStyled
              sx={{
                color: 'white',
                fontWeight: 200,
                margin: {
                  xs: '0 auto 25px',
                  md: 0
                },
                width: {
                  xs: '90%',
                  md: '80%'
                }
              }}
            >
              Energy of Jade is a private wellness space located in Victoria Court, downtown Santa Barbara.  We are passionate about healing and transformation.
              Our healing packages are custom made for you.  Our goal is to cultivate belonging by building community.  We offer our space at a reasonable rate to local healing artists to host their own 
              private workshops and events.  
            </PStyled>
          </Box>
          <Box>
          <ImageStyled 
            src="https://eojassets.s3.us-west-1.amazonaws.com/spa_promo_photo.jpeg" 
            sx={{
              height: 500,
              marginBottom: {
                xs: 5,
                md: 0
              }
            }}  
          />
          </Box>
        </SectionStyled>

        <SectionStyled
          sx={{
            backgroundImage: `linear-gradient(
              to right bottom, 
              hsla(0, 0%, 0%, 0.75), 
              hsla(0, 0%, 0%, 0.75)),
              url('https://eojassets.s3.us-west-1.amazonaws.com/AdobeStock_294392274+(1).jpeg')`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
            top: 0,
            left: 0,
            height: {
              md: 800
            },
            flexDirection: 
              { 
                xs: 'column', 
                md: 'row' 
              }
          }}
        >
          <Box>
            <H2Styled
              sx={{
                color: '#09db8b',
                fontSize: 18,
                fontWeight: 400
              }}
            >
              WHY CHOOSE ENERGY OF JADE?
            </H2Styled>
            <H2Styled
              sx={{
                fontSize: 28,
                fontWeight: 'bold',
                margin: '0 auto',
                width: {
                  xs: '90%'
                }

              }}
            >
              Because we're in the business of helping others connect to their highest self.
            </H2Styled>
            <PStyled
              sx={{
                color: 'white',
                fontWeight: 200,
                width: {
                  xs: '80%',
                  md: '60%'
                }
              }}
            >  
              Are you in the midst of a transformation? Do you have a broken heart?  Perhaps you are just thirsty for connection?  
              Whether you desire to raise your vibration for creativity or remove the blocks that are keeping you from manifesting the 
              life of your dreams, Energy of Jade was created for you!  Choose between our half and full day packages. Each service 
              is curated to the client and their needs. Click the button below to learn about the packages we offer.
            </PStyled>
            <Box
              sx={{
                flexDirection: {
                  xs: 'column',
                  md: 'row'
                }
              }}
            >
              <PackageCard
                sx={{
                  height: 350,
                  width: {
                    xs: '80%',
                    md: 300
                  },
                  margin: {
                    xs: '0 auto',
                    md: '0 20px'
                  }
                }}
              >
                <H2Styled
                  sx={{
                    fontWeight: 500
                  }}
                >
                  HALF DAY
                </H2Styled>
                <HrStyled />
                <PStyled
                  sx={{
                    color: 'white',
                    fontWeight: 100,
                    fontSize: 12
                  }}
                >
                  Half day package is approximately 3 hours and includes sacred body work, ayurvedic energy work and shirodhara.
                </PStyled>
              </PackageCard>
              <PackageCard
                sx={{
                  height: 350,
                  width: {
                    xs: '80%',
                    md: 300
                  },
                  margin: {
                    xs: '25px auto',
                    md: '0 20px'
                  }
                }}
              >
                <H2Styled
                  sx={{
                    fontWeight: 500
                  }}
                >
                  FULL DAY
                </H2Styled>
                <HrStyled />
                <PStyled
                  sx={{
                    color: 'white',
                    fontWeight: 100,
                    fontSize: 12
                  }}
                >
                  Full day package is approximately 5 hours and includes sacred body work, ayurvedic energy work, Pinda 
                  Swedana, shower, sound bath, shirodhara and much more.
                </PStyled>
              </PackageCard>
            </Box>
            <ButtonContainer>
              <LightButtonStyled 
                sx={{
                  backgroundColor: 'transparent',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'white'
                  }
                }}
                size='small' 
                href="/packages">
                See Packages
              </LightButtonStyled>
            </ButtonContainer>
          </Box>
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
              height: {
                xs: 300,
                md: 400
              },
              width: {
                xs: 300,
                md: 400
              },
              margin: {
                xs: '50px auto 0',
                md: '100px'
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
                fontWeight: 100,
                width: {
                  xs: '80%',
                  md: '60%'
                }
              }}
            >
              Fill out and submit our contact form and I'll get back to you at my earliest convenience!
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
            <SubscribeForm />
          </Box>
        </SectionStyled>

    </div>
  );
}

export default Home;