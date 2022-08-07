import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Header from '../components/Header';


const packages = ['the Cleopatra', 'the Rumi', 'the Storm', 'the Right of Path', 'the Tower', 'the Phoenix', 'the Muse']

const useStyles = makeStyles({
  button: {
     position: 'absolute',
     top: '80%',
     left: '50%',
     color: '#EEC373',
  //    maxWidth: 500, 
  //    maxHeight: 250,
  //    margin: 10,
     transform: 'translate(-50%, -50%)',
     marginLeft: 'auto',
     marginRight: 'auto',
     border: '1px solid #EEC373',
     '&:hover': {
      //    backgroundColor: '#eec37360',
         color: 'white',
         border: '1px solid white'
     }
     
  },
});

export default function Home() {
  
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <Header />
    </div>
  );
}
