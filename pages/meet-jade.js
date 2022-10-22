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
    margin: '25px auto'
});

const BodyStyled = styled('div')({
    display: 'flex',
    flexDirection: 'column'
});

const SectionStyled = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 50,
    marginTop: 50
    
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
    textAlign: 'center'
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
                    <SubHeader
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
                    </Header>
                </HeaderBox>
               
                
                <ImageStyled 
                    src='https://eojassets.s3.us-west-1.amazonaws.com/meet_jade_4.jpg'
                    sx={{
                        borderRadius: 50,
                        height: {
                            xs: 300,
                            md: 500
                        }
                    }}
                /> 
            </HeaderContainer>
            <BodyStyled>
                <SectionStyled
                    sx={{
                        flexDirection: 'column'
                    }}
                >
                    <H2Styled
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
                    </BreakBox>
                    <PStyled
                        sx={{
                            width: {
                                md: '60%'
                            }
                        }}
                    >
                        Are you in the midst of a transformation? Do you have a broken heart? Are you experiencing 
                        the “dark night of the soul”?   Are you thirsty for connection?  Striving for authenticity?  
                        Reinventing yourself? Wanting to raise your vibration, enter a flow state, remove blocks for 
                        manifestation?

                    </PStyled>
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
                        ENERGY OF JADE WAS CREATED FOR YOU!  
                    </H2Styled>
                </BlackHeaderDivider>
                
                <SectionStyled
                    sx={{
                        flexDirection: {
                            xs: 'column',
                            md: 'row'
                        },
                        marginTop: {
                            xs: 0,
                            md: '50px'
                        }
                    }}
                >
                    <ImageStyled 
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
                    />
                    <PStyled
                        sx={{
                            margin: {
                                md: '0 50px'
                            },
                            width: {
                                xs: '95%',
                                md: '60%'
                            }
                        }}
                    >
                        I have been a healer for 20 years.  I studied Massage and Reiki and have worked in spas all over California.  
                        It wasn’t until I found and studied Ayurveda, that I went from surviving to thriving.  I changed.  There had 
                        been a shift in perspective.  Betrayal, rejection and heartbreak became blessings.  Layer after layer was peeled 
                        back energetically.  I received visions and revelations.  I found clarity.  I was finally able to let go of 
                        resentments and forgive.  What a relief!  I had hope.  I was bursting with enthusiasm and inspiration!
                    </PStyled>
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
                        <em>Who am I?</em>   
                    </H2Styled>
                </BlackHeaderDivider>
                
                <SectionStyled
                    sx={{
                        flexDirection: {
                            xs: 'column',
                            md: 'row'
                        },
                        marginBottom: {
                            xs: 0,
                            md: '50px'
                        }
                    }}
                >
                    <PStyled
                        sx={{
                            margin: {
                                md: '0 50px'
                            },
                            width: {
                                xs: '95%',
                                md: '60%'
                            }
                        }}
                    >
                        I am Jade. I am a Phoenix.  An overcomer.  A survivor!  And I am here to help.  Like you, I am no stranger to life’s 
                        challenges.  The struggle is real. I have overcome extreme clinical depression, addiction, self destructive patterns 
                        and toxic relationships. Because of that, I know my strength.  I came to the place where I had to tear my life down 
                        in order to build it back up.  A part of me had to die in order for me to live.  I tried several healing modalities, 
                        therapy and medication.  Thankfully, I found Ayurveda. I stand in awe of what has transpired in my own story. Now, I 
                        spend my time and energy feeding the warrior goddess within as a mother and a healer.  My desire is to be the conduit 
                        of light that is needed for healing.  I actively search for the magic in life and I know for certain that I am deeply 
                        loved by the universe.  I make choices everyday that enhance the connection from my heart to my intuition, in order to 
                        serve others.  

                    </PStyled>
                    <ImageStyled 
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
                    />
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
                        <em>Invest in yourself, you are worth it!</em>  
                    </H2Styled>
                </BlackHeaderDivider>
                
                <SectionStyled
                    sx={{
                        flexDirection: {
                            xs: 'column',
                            md: 'row'
                        },
                        marginTop: {
                            xs: 0,
                            md: '50px'
                        }
                    }}
                >
                    <ImageStyled 
                        src='https://eojassets.s3.us-west-1.amazonaws.com/wc11.jpeg' 
                        sx={{ 
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
                    />
                    <PStyled
                        sx={{
                            margin: {
                                md: '0 50px'
                            },
                            width: {
                                xs: '95%',
                                md: '60%'
                            }
                        }}
                    >
                        I created Energy of Jade for those who want to connect to Source and to reconnect with themselves.  For the 
                        broken hearted and for those who want to reclaim what has been lost.  A person can have great success with 
                        these ancient healing practices in all stages of life.  One may find it helpful in reflection, self awareness 
                        and self exploration.  The most powerful contributing factor to your experience in life will be the way that 
                        you treat yourself…self love and care.
                    </PStyled>
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
                        Ancient Ayurvedic wisdom is used to design energetic healing treatments and rituals for the mind, body 
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