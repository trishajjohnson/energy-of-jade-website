import React from 'react';

import { styled } from "@mui/material/styles";


const HeaderContainer = styled('div')({
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    paddingBottom: 30,
    height: '70vh',
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
    textAlign: 'center',
    marginRight: 100,
    marginTop: 75,
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
    fontSize: 24,
    fontWeight: 100,
    letterSpacing: 18,
    textAlign: 'center',
    margin: 0,
    paddingLeft: 15,
    textShadow: '3px 3px 6px #171717',
});


const ImageStyled = styled('img')({
    width: 300,
    height: 400,
    boxShadow: '30px 30px 0px 0px rgba(217,184,73,0.83)',
});

const BodyStyled = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto 50px',
    width: '80vw'
});

const SectionStyled = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 50,
    marginTop: 50
});

const PStyled = styled('p')({
    // alignSelf: 'flex-start',
    margin: '0 25px',
    width: 650
});

const BreakBox = styled('div')({
    margin: '0 auto',
    paddingTop: 50,
    paddingBottom: 50
});

const HrStyled = styled('hr')({
    width: 250
});

const H2Styled = styled('h2')({
    fontSize: 35,
    fontWeight: 100
});

 
function About() {

    return (
        <div>
            <HeaderContainer>
                <HeaderBox>
                    <SubHeader>Hi, my name is</SubHeader>
                    <Header>Jade</Header>
                </HeaderBox>
                <ImageStyled src='meet_jade_4.jpg' /> 
            </HeaderContainer>
            <BodyStyled>
                <SectionStyled>
                    <ImageStyled 
                        src='https://eojassets.s3.us-west-1.amazonaws.com/saffu-pYaKs30p9zg-unsplash.jpeg' 
                        sx={{ 
                            boxShadow: '-30px 30px 0px 0px rgba(250,220,244,0.83)',
                        }} 
                    />
                    <PStyled>
                        I am Jade and I have been a healer for 20 years.  I studied Massage and Reiki and have worked in spas all over California.  
                        It wasn’t until I found and studied Ayurveda, that I went from surviving to thriving.  I changed.  There had 
                        been a shift in perspective.  Betrayal, rejection and heartbreak became blessings.  Layer after layer was peeled 
                        back energetically.  I received visions and revelations.  I found clarity.  I was finally able to let go of 
                        resentments and forgive.  What a relief!  I had hope.  I was bursting with enthusiasm and inspiration!
                    </PStyled>
                </SectionStyled>
                <BreakBox>
                    <HrStyled/>
                </BreakBox>
                <SectionStyled>
                    <PStyled>
                        Like you, I am no stranger to life’s challenges.  The struggle is real. I have overcome extreme clinical 
                        depression, addiction, self destructive patterns and toxic relationships. Because of that, I know my strength.  
                        I came to the place where I had to tear my life down in order to build it back up.  A part of me had to die in order 
                        for me to live.  I tried several healing modalities, therapy and medication.  Thankfully, I found Ayurveda. 
                        I stand in awe of what has transpired in my own story. Now, I spend my time and energy feeding the warrior goddess 
                        within as a mother and a healer.  My desire is to be the conduit of light that is needed for healing.  I actively 
                        search for the magic in life and I know for certain that I am deeply loved by the universe.  I make choices everyday 
                        that enhance the connection from my heart to my intuition, in order to serve others.  

                    </PStyled>
                    <ImageStyled 
                        src='https://eojassets.s3.us-west-1.amazonaws.com/nordwood-themes-FnOoRU-PYio-unsplash.jpeg' 
                        sx={{ 
                            boxShadow: '30px -30px 0px 0px rgba(184,245,223,0.83)',
                        }} 
                    />
                </SectionStyled>
                <BreakBox>
                    <HrStyled />
                </BreakBox>
                <SectionStyled>
                    <ImageStyled 
                        src='https://eojassets.s3.us-west-1.amazonaws.com/natasha-holmes-jW7u8qRMClw-unsplash.jpeg' 
                        sx={{ 
                            boxShadow: '-30px 30px 0px 0px rgba(247,214,161,0.83)',
                        }} 
                    />
                    <PStyled>
                        I created Energy of Jade for those who want to connect to Source and to reconnect with themselves.  For the 
                        broken hearted and for those who want to reclaim what has been lost.  A person can have great success with 
                        these ancient healing practices in all stages of life.  One may find it helpful in reflection, self awareness 
                        and self exploration.  The most powerful contributing factor to your experience in life will be the way that 
                        you treat yourself…self love and care.  Invest in yourself, you are worth it!
                    </PStyled>
                </SectionStyled>
                <BreakBox>
                    <HrStyled />
                </BreakBox>
                <SectionStyled sx={{ justifyContent: 'center' }}>
                    <H2Styled><em>Everything is energy.   Raise your vibration.</em></H2Styled>
                </SectionStyled>
            </BodyStyled>
        </div>
    );
}

export default About;