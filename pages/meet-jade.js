import React from 'react';

import { styled } from "@mui/material/styles";


const HeaderContainer = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#269e78',
    backgroundImage: `linear-gradient(
        to right, 
        hsla(0, 0%, 0%, 0.9), 
        hsla(0, 0%, 0%, 0.55))`,
});

const HeaderBox = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    alignContent: 'center',
    textAlign: 'center'
});

const Header = styled('h1')({
    color: '#f7f3f2',
    fontSize: 200,
    margin: 0,
    letterSpacing: 5,
    textAlign: 'center',
    textShadow: '3px 3px 6px #171717',
});


const SubHeader = styled('h3')({
    color: '#f7f3f2',
    fontWeight: 100,
    textAlign: 'center',
    margin: 0,
    paddingLeft: 15,
    textShadow: '3px 3px 6px #171717',
});


const ImageStyled = styled('img')({
    // height: '80vh'
    // margin: '25px auto'
});

const BodyStyled = styled('div')({
    display: 'flex',
    flexDirection: 'column'
});

const SectionStyled = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
    marginTop: 25
    
});

const BlackHeaderDivider = styled('div')({
    backgroundColor: 'black',
    display: 'flex',
    alignItems: 'center',
    marginBottom: {
        xs: 0,
        md: 50
    },
    marginTop: {
        xs: 0,
        md: 50
    }
});

const PStyled = styled('p')({
    margin: '0 25px',
    textAlign: 'center',
    // justifyContent: 'center'
});

const BreakBox = styled('div')({
    margin: '0 auto'
});

const HrStyled = styled('hr')({
    width: 250
});

const H2Styled = styled('h2')({
    fontSize: 35,
    fontWeight: 100,
    margin: '0 auto',
    textAlign: 'center'
});

 
function About() {

    return (
        <div>
            <HeaderContainer
                sx={{
                    flexDirection: {
                        xs: 'column',
                        md: 'row'
                    }
                }}
            >
        
                <HeaderBox
                    sx={{
                        margin: {
                            xs: '10px auto',
                        }
                    }}
                >
                    {/* <SubHeader
                        sx={{
                            fontSize: {
                                xs: 18,
                                md: 24
                            },
                            letterSpacing: {
                                xs: 8,
                                md: 18
                            }
                        }}
                    >Hi, my name is</SubHeader>
                    <Header
                        sx={{
                            fontSize: {
                                xs: 100,
                                md: 200
                            }
                        }}
                    >
                        Jade
                    </Header> */}
                </HeaderBox>
               
                
                <ImageStyled 
                    sx={{
                        width: '25%'
                    }}
                    src='https://eojassets.s3.us-west-1.amazonaws.com/DSC01464.jpeg'
                    // sx={{
                    //     borderRadius: 50,
                    //     height: {
                    //         xs: 300,
                    //         md: 500
                    //     }
                    // }}
                /> 
                <ImageStyled
                    sx={{
                        width: '50%'
                    }} 
                    src='https://eojassets.s3.us-west-1.amazonaws.com/DSC01427.jpeg'
                    // sx={{
                    //     borderRadius: 50,
                    //     height: {
                    //         xs: 300,
                    //         md: 500
                    //     }
                    // }}
                /> 
                <ImageStyled 
                    src='https://eojassets.s3.us-west-1.amazonaws.com/jen_studio_hs_2.jpeg'
                    sx={{
                        width: '25%'
                        // borderRadius: 50,
                        // height: {
                        //     xs: 300,
                        //     md: 500
                        // }
                    }}
                /> 
            </HeaderContainer>
            <BodyStyled>
                <SectionStyled
                    sx={{
                        flexDirection: 'column'
                    }}
                >
                    {/* <H2Styled
                        sx={{
                            fontStyle: 'italic'
                        }}
                    >
                        If you are striving to become your highest self, I can help! 
                    </H2Styled>
                    <BreakBox
                        sx={{
                            margin: '50px auto'
                        }}
                    >
                        <HrStyled/>
                    </BreakBox> */}
                    <PStyled
                        sx={{
                            width: {
                                md: '60%'
                            }
                        }}
                    >
                        My name is Jennifer Westbrook and some know me as Jade.
                        Like all of you, I am no stranger to life’s challenges.  
                        I consider myself to be a Phoenix.  I have overcome extreme 
                        clinical depression, addiction, negative core beliefs and toxic 
                        relationships. Because of that, I know my strength and I have a 
                        burning desire to help others transform their lives the way that 
                        I have.


                    </PStyled>
                </SectionStyled>

                {/* <BlackHeaderDivider>
                    <H2Styled
                        sx={{
                            color: 'white',
                            fontStyle: 'italic',
                            marginTop: 20,
                            marginBottom: 20
                        }}
                    >
                        ENERGY OF JADE WAS CREATED FOR YOU!  
                    </H2Styled>
                </BlackHeaderDivider> */}
                
                <SectionStyled
                    sx={{
                        flexDirection: 'column'
                    }}
                >
                    {/* <ImageStyled 
                        src='https://eojassets.s3.us-west-1.amazonaws.com/wc9.jpeg' 
                        sx={{ 
                            filter: 'brightness(90%)',
                            width: {
                                xs: '100%',
                                md: 500
                            },
                            marginTop: {
                                xs: 0,
                                md: '25px'
                            },
                            marginLeft: {
                                xs: 0,
                                md: '50px'
                            }
                        }} 
                    /> */}
                    <PStyled
                        sx={{
                            width: {
                                md: '60%'
                            }
                        }}
                    >
                        I have been a healing artist for 20 years.  I studied massage and 
                        Reiki and have worked in wellness centers all over California. 
                        There came a time when I knew I wanted to change everything.  I 
                        wanted to reinvent myself and thrive.  I wanted to be happy.  I 
                        wanted to be the best version of myself.  I learned more about energy 
                        healing and chakras.  I began investing in myself and running towards 
                        healing.  Learning about Ayurvedic chakra work was a real game changer 
                        for me.  I fell in love with meditation.  I began to understand myself.  
                        I became very aware of the energy within my body and I learned how to work 
                        with that awareness instead of reacting to my nervous system.  My perspective 
                        began to shift.  Layer after layer was peeled back energetically.  I am a 
                        new person, honoring my past self and striving to be my most magnetic self, 
                        whom I named Jade.
                    </PStyled>
                </SectionStyled>
                
                <SectionStyled
                    sx={{
                        flexDirection: 'column'
                    }}
                >
                    <PStyled
                        sx={{
                            width: {
                                md: '60%'
                            }
                        }}
                    >
                        Energy of Jade was created because I want everyone to experience what I did…revelations, 
                        clarity, a new found hope and love for life.  I learned to love myself.  I stand in awe 
                        of what has transpired in my own story.  I want to hear your story while I hold space for 
                        you.  I want to stand with you while you reclaim what has been lost and celebrate your 
                        transformation.  I can promise you that I wont judge you.  You can trust me.  I will serve 
                        you to the best of my ability.  If you are struggling I want you to know that there is hope 
                        and a stronger version of yourself on the other side of what is happening now.  

                    </PStyled>
                    {/* <ImageStyled 
                        src='https://eojassets.s3.us-west-1.amazonaws.com/natasha-holmes-jW7u8qRMClw-unsplash.jpeg' 
                        sx={{ 
                            filter: 'brightness(90%)',
                            height: {
                                md: 400
                            },
                            width: {
                                xs: '100%',
                                md: 300
                            },
                            marginBottom: {
                                xs: 0,
                                md: '25px'
                            }
                        }} 
                    /> */}
                </SectionStyled>
                
                <BlackHeaderDivider>
                    <H2Styled
                        sx={{
                            color: 'white',
                            fontStyle: 'italic',
                            marginTop: 20,
                            marginBottom: 20
                        }}
                    >
                        <em>What do I mean by “energy”?</em>   
                    </H2Styled>
                </BlackHeaderDivider>
                
                <SectionStyled
                    sx={{
                        flexDirection: 'column',
                        justifyContent: 'center'
                    }}
                >
                    <PStyled
                        sx={{
                            marginBottom: 5,
                            width: {
                                md: '60%'
                            }
                        }}
                    >
                        We are made up of energy and there is plenty of evidence to support this in our everyday lives.  
                        The racing in your chest is energy.  The heaviness…is energy.  The love, frustration, flow…all 
                        energy.  Energy caused by an emotion caused by a thought caused by a situation, and that energy 
                        gets trapped in your body. For example, think of a time when an emotion has caused a lump in your 
                        throat.  That sensation is your throat chakra, full of words unsaid.  All the times you have not 
                        spoken “your truth”.  That is powerful energy and the good news is that it can be moved.  Sometimes 
                        one must say things out loud in order to release energy and I encourage my clients to do so, in a 
                        very safe and confidential container that is Energy of Jade.
                    </PStyled>
                    <PStyled
                        sx={{
                            width: {
                                md: '60%'
                            }
                        }}
                    >
                        Ancient Ayurvedic wisdom is used to design energetic healing services and rituals for the mind, body 
                        and soul.  Sacred bodywork such as massage, full body scrubs and wraps, yoni steaming, chakra cleansing, 
                        medicinal oils, healing herbs, sound therapy, along with guided meditation, intentional rituals and oracle 
                        readings are some of the modalities that will be used during our time together.  Shirodhara will be included 
                        in all packages in order to awaken and cleanse your third eye to enhance your intuition in your pursuit to
                        move forward.  A healthy, catered lunch is included as well as dosha specific herbal teas and organic fresh juice.
                    </PStyled>
                </SectionStyled>

                <BreakBox>
                    <HrStyled/>
                </BreakBox>

                <SectionStyled
                    sx={{
                        flexDirection: {
                            xs: 'column',
                            md: 'row'
                        },
                        justifyContent: 'center'
                    }}
                >
                    <H2Styled><em>Everything is energy.   Raise your vibration.</em></H2Styled>
                </SectionStyled>
            </BodyStyled>
        </div>
    );
}

export default About;