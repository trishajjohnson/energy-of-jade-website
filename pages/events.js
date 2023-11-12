import React, { useState, useEffect } from 'react';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const CardStyled = styled(Card)({
    backgroundColor: "#f5e4ec",
    margin: 20,
    border: "1px solid #f5f6f7",
    boxShadow: "none",
    borderRadius: 0,
    "&:hover": {
        boxShadow: "1px 0 15px grey",
        cursor: "pointer"
    }
});

const ContainerStyled = styled('div')({
    alignItems: 'center'
});

const HeaderContainer = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '70vh',
    backgroundImage: `linear-gradient(
        to right bottom, 
        hsla(0, 0%, 0%, 0.75), 
        hsla(0, 0%, 0%, 0.2)),  
        url("https://eojassets.s3.us-west-1.amazonaws.com/uby-yanes-ntTxsvPCbpU-unsplash.jpeg")`,
    backgroundSize: 'cover',
    backgroundPosition: '0 70%',
});

const Header = styled('h1')({
    color: '#f7f3f2',
    fontSize: '75px',
    textAlign: 'center',
    textShadow: '3px 3px 6px #171717',
});

const EventsContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    width: 1000,
    // height: '90vh',
    // backgroundColor: 'black',
    margin: "50px auto"
});

const Event = styled('div')({
    backgroundColor: 'white'
});

const FilterContainer = styled('div')({

});

let events = [
    { 
        title: "Grand Opening: Energy of Jade", 
        description: `Women's Blue Moon Celebration!  Come honor the pisces moon with 
            Pure Luna Apothecary and the grand opening of Energy of Jade Wednesday August 
            30 from 6:30-9:30pm.`, 
        date: "December 30, 2023", 
        time: "6:30-9:30pm", 
        location: "1 Victoria Court, Santa Barbara, CA 93101",
        image: "https://eojassets.s3.us-west-1.amazonaws.com/Screenshot+2023-08-26+at+12.53.59+PM.jpeg",
        eventBrightLink: "https://www.eventbrite.com/e/of-kundalini-activation-process-kap-powerful-energetic-transmission-tickets-706920206367?aff=ebdssbdestsearch",
        isRecurring: true
    },
    { 
        title: "Grand Opening: Energy of Jade", 
        description: `Women's Blue Moon Celebration!  Come honor the pisces moon with 
            Pure Luna Apothecary and the grand opening of Energy of Jade Wednesday August 
            30 from 6:30-9:30pm.`, 
        date: "August 30, 2023", 
        time: "6:30-9:30pm", 
        location: "1 Victoria Court, Santa Barbara, CA 93101",
        image: "https://eojassets.s3.us-west-1.amazonaws.com/Screenshot+2023-08-26+at+12.53.59+PM.jpeg",
        eventBrightLink: "https://www.eventbrite.com/e/of-kundalini-activation-process-kap-powerful-energetic-transmission-tickets-706920206367?aff=ebdssbdestsearch",
        isRecurring: false
    },
    { 
        title: "Grand Opening: Energy of Jade", 
        description: `Women's Blue Moon Celebration!  Come honor the pisces moon with 
            Pure Luna Apothecary and the grand opening of Energy of Jade Wednesday August 
            30 from 6:30-9:30pm.`, 
        date: "August 30, 2023", 
        time: "6:30-9:30pm", 
        location: "1 Victoria Court, Santa Barbara, CA 93101",
        image: "https://eojassets.s3.us-west-1.amazonaws.com/Screenshot+2023-08-26+at+12.53.59+PM.jpeg",
        eventBrightLink: "https://www.eventbrite.com/e/of-kundalini-activation-process-kap-powerful-energetic-transmission-tickets-706920206367?aff=ebdssbdestsearch",
        isRecurring: false
    },
    { 
        title: "Grand Opening: Energy of Jade", 
        description: `Women's Blue Moon Celebration!  Come honor the pisces moon with 
            Pure Luna Apothecary and the grand opening of Energy of Jade Wednesday August 
            30 from 6:30-9:30pm.`, 
        date: "August 30, 2023", 
        time: "6:30-9:30pm", 
        location: "1 Victoria Court, Santa Barbara, CA 93101",
        image: "https://eojassets.s3.us-west-1.amazonaws.com/Screenshot+2023-08-26+at+12.53.59+PM.jpeg",
        eventBrightLink: "https://www.eventbrite.com/e/of-kundalini-activation-process-kap-powerful-energetic-transmission-tickets-706920206367?aff=ebdssbdestsearch",
        isRecurring: false
    },
    { 
        title: "Grand Opening: Energy of Jade", 
        description: `Women's Blue Moon Celebration!  Come honor the pisces moon with 
            Pure Luna Apothecary and the grand opening of Energy of Jade Wednesday August 
            30 from 6:30-9:30pm.`, 
        date: "August 30, 2024", 
        time: "6:30-9:30pm", 
        location: "1 Victoria Court, Santa Barbara, CA 93101",
        image: "https://eojassets.s3.us-west-1.amazonaws.com/Screenshot+2023-08-26+at+12.53.59+PM.jpeg",
        eventBrightLink: "https://www.eventbrite.com/e/of-kundalini-activation-process-kap-powerful-energetic-transmission-tickets-706920206367?aff=ebdssbdestsearch",
        isRecurring: false
    },
];

const filters = [
    {label: "All"},
    {label: "Past"},
    {label: "Upcoming"},
    {label: "Recurring"},
];


function Events() {
    const [filterFunction, setFilterFunction] = useState(() => () => true);
    const [eventsList, setEventsList] = useState(events);
    const [filter, setFilter] = useState('Upcoming');

    
    useEffect(() => {
        switch(filter) {
            case 'Past':
                setEventsList(events.filter(evt => Date.parse(evt.date) < new Date().getTime()));
            case 'Upcoming':  
                setEventsList(events.filter(evt => Date.parse(evt.date) > new Date().getTime()));
            case "Recurring":
                setEventsList(events.filter(evt => evt.isRecurring === true));
            default:
                setEventsList(events);
        }
        // switch(filter) {
        //     case 'Past':
        //         setFilterFunction(() => evt => Date.parse(evt.date) < new Date().getTime());
        //         break;
        //     case 'Upcoming':  
        //         setFilterFunction(() => evt => Date.parse(evt.date) > new Date().getTime());
        //     case "Recurring":
        //         setFilterFunction(() => evt => evt.isRecurring === true);
        //     default:
        //         setFilterFunction(() => evt => true);
        // }
    }, [filter]);
                
                
    const handleChange = (evt, newValue) => {
        setFilter(newValue.props.value);
    }

    const filteredEvents = eventsList.filter(filterFunction);
    console.log(Date.parse(events[0].date), new Date().getTime());

    return (

        <ContainerStyled>

            <HeaderContainer>
                <Header>Events</Header>
            </HeaderContainer>

            <EventsContainer>
                <FilterContainer>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Filter</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={filter}
                        label="filter"
                        onChange={handleChange}
                        defaultValue={"All"}
                    >
                        {filters.map(fltr => {
                            return <MenuItem value={fltr.label}>{fltr.label}</MenuItem>
                        })}
                    </Select>
                </FormControl>
                </FilterContainer>
                {eventsList.map((evt, i) => {
                    return (
                        <CardStyled 
                            item 
                            key={i}
                            onClick={() => window.open(evt.eventBrightLink)}
                        >
                            <CardHeader
                                
                                // avatar={
                                // <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                //     R
                                // </Avatar>
                                // }
                                // action={
                                // <IconButton aria-label="settings">
                                //     <MoreVertIcon />
                                // </IconButton>
                                // }
                                title={evt.title}
                                subheader={evt.date}
                            />      
                            <CardMedia
                                component="img"
                                height="194"
                                image={evt.image}
                                alt="Blue Moon Celebration"
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                {evt.description}
                                </Typography>
                            </CardContent>
                            {/* <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                <FavoriteIcon />
                                </IconButton>
                                <IconButton aria-label="share">
                                <ShareIcon />
                                </IconButton>
                                <ExpandMore
                                expand={expanded}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                                >
                                <ExpandMoreIcon />
                                </ExpandMore>
                            </CardActions> */}
                            {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                <Typography paragraph>Method:</Typography>
                                <Typography paragraph>
                                    Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                                    aside for 10 minutes.
                                </Typography>
                                <Typography paragraph>
                                    Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                                    medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                                    occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                                    large plate and set aside, leaving chicken and chorizo in the pan. Add
                                    pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                                    stirring often until thickened and fragrant, about 10 minutes. Add
                                    saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                                </Typography>
                                <Typography paragraph>
                                    Add rice and stir very gently to distribute. Top with artichokes and
                                    peppers, and cook without stirring, until most of the liquid is absorbed,
                                    15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                                    mussels, tucking them down into the rice, and cook again without
                                    stirring, until mussels have opened and rice is just tender, 5 to 7
                                    minutes more. (Discard any mussels that don&apos;t open.)
                                </Typography>
                                <Typography>
                                    Set aside off of the heat to let rest for 10 minutes, and then serve.
                                </Typography>
                                </CardContent>
                            </Collapse> */}
                        </CardStyled>
                    );
                            }
                        )
                }
            </EventsContainer>
        </ContainerStyled>
        
    );
}


export default Events;