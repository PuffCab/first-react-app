import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Image from 'material-ui-image';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const SimpleCard = (props) => {
  
  console.log(`PROPs`, props.name )
    const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardMedia
        
        component="img"
        src={props.imagen}
        alt={props.name}

        />
      <CardContent>
      {/* <Image 
        src={props.img}
      /> ALternativa a component='img' , importando arriba*/}
        
        <Typography variant="h5" component="h2">
          {props.name}
          <br/>
          {props.species}
        </Typography>
        
      </CardContent>
      <CardActions>
        <Button size="small">a button</Button>
      </CardActions>
    </Card>
  );
}
export default SimpleCard