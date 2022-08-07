import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles({
    scroll: {
        backgroundColor: 'blue',
        color: 'black',
        position: 'fixed',
        top: '2vh',
        right: '5%',
        border: '1px solid white',
        // zIndex: 99,
    },
    scrollTop: {
        backgroundColor: 'black',
        color: 'white',
        position: 'fixed',
        top: '2vh',
        right: '5%',
        zIndex: 100,
        border: '1px solid white',
        '&:hover': {
            backgroundColor: 'white',
            color: 'black',
        }
    },
});

export default function Scroll({showBelow}) {
    const [show, setShow] = useState(showBelow ? false : true);
    const styles = useStyles();

    useEffect(() => {
        if(showBelow) {
            window.addEventListener('scroll', handleScroll);   
        } else {
            return () => window.removeEventListener('scroll', handleScroll);
        }
    })
    function handleClick(e) {
        window['scrollTo']({ top: 0, behavior: 'smooth' })
    }

    function handleScroll(e) {
        if(window.pageYOffset > showBelow) {
            if(!show) setShow(true);
        } else {
            if(show) setShow(false);
        }
    }
    return (
        <div>
            {show && 
                // <IconButton onClick={handleClick}>
                <IconButton className={styles.scrollTop} onClick={handleClick}>
                    <ExpandLessIcon />
                    {/* <ExpandLessIcon className={styles.scrollTop} /> */}
                </IconButton>
            }
        </div>
    );
}