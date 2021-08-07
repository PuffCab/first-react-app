import React from 'react'
import Card from './Card'
import { Grid } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    
  }));
const ListItem = (props) => {

    const classes = useStyles();
    const character = props.character
    console.log(`character`, character)

    return (
        <div>
           {/* <Grid container spacing={4} justify='center'> */}
                <Grid item xs={6} sm={3}>

                    <Card imagen={character.image} name={character.name} species={character.species} status={character.status}  />
                    
                </Grid> 
           {/* </Grid> */}
           
           {/* <p>{character.name}</p>
            <img src={character.image} alt="rick&morty pictures" /> */}
            
       
        </div>
    )
}

export default ListItem
