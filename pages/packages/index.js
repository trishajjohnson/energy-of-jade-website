import React from 'react';

import TreatmentPackage from '../../components/TreatmentPackage';
import pkgs from '../../packageDetails';

import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

const disclaimer = `Ancient Ayurvedic wisdom is used to design energetic healing 
                    treatments and rituals for the mind, body and soul.  
                    Sacred bodywork such as massage, full body scrubs and wraps, 
                    yoni steaming, chakra cleansing, medicinal oils, herbs, sound 
                    therapy, along with guided meditation and oracle readings are 
                    some of the modalities that will be used during our time 
                    together.  Shirodhara will be included in all packages in order 
                    to awaken and cleanse your third eye to enhance your intuition 
                    in your pursuit to move forward.  A healthy, catered lunch is included
                    as well as dosha specific herbal teas and organic fresh juice.  
                    This is not a religious practice, it is a spiritual one.  We honor 
                    the individual, their thoughts, emotions and their personal experience.
                    Our goal is to connect spiritually, channel our highest self,
                    cleanse energetically, receive clarity and be renewed.
                    Sometimes in life you need a shift in perspective and it
                    might take practicing radical acceptance.  Letting go is not
                    easy and takes a repeated conscious effort, but it will
                    happen.  This act of will comes with much more ease when
                    your channels are cleansed.`;

const Card = styled(Grid)({
    textAlign: 'center',
    top: 0,
    left: '50%',
    margin: '5px',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '600px',
});

const ContainerStyled = styled('div')({

});

const CardContainer = styled('div')({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin: 50
});

const HeaderContainer = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
    height: '70vh',
    backgroundImage: `linear-gradient(
        to right bottom, 
        hsla(0, 0%, 0%, 0.75), 
        hsla(0, 0%, 0%, 0.2)),  
        url("https://eojassets.s3.us-west-1.amazonaws.com/christin-hume-0MoF-Fe0w0A-unsplash.jpeg")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
});

const Header = styled('h1')({
    color: '#f7f3f2',
    fontSize: '75px',
    textAlign: 'center',
    textShadow: '3px 3px 6px #171717',
});

const SectionStyled = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto'
});

const Box = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    margin: '0 auto'
});

const PackageCard = styled('div')({
    border: '1px solid black',
    borderRadius: 3,
    margin: 10
});

const H2Styled = styled('h2')({
    color: 'black',
    fontWeight: 300
});

const HrStyled = styled('hr')({
    textAlign: 'center',
    margin: '0 auto', 
    color: 'black',
    width: 25
});

const PStyled = styled('p')({
    margin: '25px auto',
    textAlign: 'center'
});

const LiStyled = styled('li')({
    color: 'black',
    fontWeight: 100,
    fontSize: 10,
    margin: 5,
    width: 250,
    textAlign: 'left'
});
 

function Packages() {

    return (
            <ContainerStyled>
                <HeaderContainer>
                    <Header>Packages</Header>
                </HeaderContainer>
                <SectionStyled>
                    <PStyled
                        sx={{
                            width: {
                                xs: '90%',
                                md: '60%'
                            }
                        }}
                    >
                        All healing packages will be customized to the client,
                        their constitution, needs and goals.  Please check out 
                        the list of treatments and let me know if a certain one 
                        interests you.  We will have time to speak before the day 
                        of treatment in order to create a package that will meet 
                        your needs.  Energy of Jade offers two types of packages: 
                        half and full day.  
                    </PStyled>
                    <SectionStyled
                        sx={{
                            flexDirection: 
                            { 
                                xs: 'column', 
                                md: 'row' 
                            }
                        }}
                    >
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
                                    marginRight: {
                                        md: 10
                                    }
                                }}
                            >
                                <H2Styled
                                    sx={{
                                        fontWeight: 500,
                                        marginBottom: 0                                    
                                    }}
                                >
                                    HALF DAY
                                </H2Styled>
                                <PStyled
                                    sx={{
                                        color: 'black',
                                        fontSize: 12,
                                        fontStyle: 'italic',
                                        marginTop: 0,
                                        marginBottom: 2                                    
                                    }}
                                >
                                    10am-1pm or 2pm-5pm
                                </PStyled>
                                <PStyled
                                    sx={{
                                        color: '#09db8b',
                                        fontStyle: 'italic',
                                        marginTop: 0
                                    }}
                                >
                                    $450.00
                                </PStyled>
                                <HrStyled />
                                <ul>
                                    <LiStyled>
                                        Sacred body work- Abhyanga or special massage that includes marma therapy and dosha specific medicinal oil
                                    </LiStyled>
                                    <LiStyled>
                                        Ayurvedic energy work (chakra cleansing with medicinal oil made specifically for client)                                    
                                    </LiStyled>
                                    <LiStyled>
                                        Shirodhara                                    
                                    </LiStyled>
                                    <LiStyled>
                                        Includes Collagen tea latte and snack
                                    </LiStyled>
                                </ul>
                            </PackageCard>
                            <PackageCard
                                sx={{
                                    marginLeft: {
                                        md: 10
                                    }
                                }}
                            >
                                <H2Styled
                                    sx={{
                                        fontWeight: 500,
                                        marginBottom: 0
                                    }}
                                >
                                    FULL DAY
                                </H2Styled>
                                <PStyled
                                    sx={{
                                        color: 'black',
                                        fontSize: 12,
                                        fontStyle: 'italic',
                                        marginTop: 0,
                                        marginBottom: 2                                    
                                    }}
                                >
                                    10am-4pm
                                </PStyled>
                                <PStyled
                                    sx={{
                                        color: '#09db8b',
                                        fontStyle: 'italic',
                                        marginTop: 0
                                    }}
                                >
                                    $750.00
                                </PStyled>
                                <HrStyled />
                                
                                <ul>
                                    <LiStyled>
                                        Sacred body work- Abhyanga or special massage that includes marma therapy and dosha specific medicinal oil
                                    </LiStyled>
                                    <LiStyled>
                                        Pinda Swedana (body wrap including facial mask)                                    
                                    </LiStyled>
                                    <LiStyled>
                                        Shower                                    
                                    </LiStyled>
                                    <LiStyled>
                                        Ayurvedic energy work (chakra cleansing with medicinal oil made specifically for client)                                    
                                    </LiStyled>
                                    <LiStyled>
                                        Shirodhara                                    
                                    </LiStyled>
                                    <LiStyled>
                                        Includes….Collagen tea latte, lunch, fresh organic juice
                                    </LiStyled>
                                    <LiStyled>
                                        And more!                                    
                                    </LiStyled>
                                </ul>
                            </PackageCard>
                        </Box>
                    </SectionStyled>
                    <PStyled
                        sx={{
                            width: {
                                xs: '90%',
                                md: '60%'
                            }
                        }}
                    >
                        {disclaimer}
                    </PStyled>
                    
                </SectionStyled>
                <CardContainer>
                    {pkgs.map((p, i) => {
                        return (
                            <Card item key={i} xs={12} md={6}>
                                <TreatmentPackage sx={{mx: "auto"}} pkg={p} />
                            </Card>
                        );
                    })}
                </CardContainer>
            </ContainerStyled>
    );
}


export default Packages;