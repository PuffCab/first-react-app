import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Image from 'material-ui-image';
import Modal from './Modal';





const useStyles = makeStyles({
  root: {
    minWidth: 200,
    // maxWidth: 300,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 40,
  },
  pos: {
    marginBottom: 12,
  },
});




const SimpleCard = (props) => {
  
//   console.log(`PROPs`, props.name )
    const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const [show, setShow] = useState(false)

  return (
    <Card className={classes.root} variant="outlined">
      <CardMedia
        
        component="img"
        src={props.imagen}
        alt={props.name}
        title={props.name}

        />
      <CardContent>
      {/* <Image 
        src={props.img}
      /> ALternativa a component='img' */}
        
        <Typography variant="h5" component="h2">
          {props.name}

        </Typography>
        
      </CardContent>
      <CardActions>
        <Button size="small">
            <button onClick={() => setShow(true)}>Show modal</button>
            <Modal title={props.name} onClose={() => setShow(false)} show={show}>
                <p>Species : {props.species}</p>
                <p>Status : {props.status}</p>
                <img src={props.imagen}/>
                
                
            </Modal>
        </Button>
      </CardActions>
    </Card>
  );
}
export default SimpleCard