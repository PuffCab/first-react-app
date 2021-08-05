
import './App.css';
import List from './components/List';
import { Grid } from '@material-ui/core/'
import Modal from './components/Modal';
import React, { useState } from "react";


function App() {

  const [show, setShow] = useState(false)

  return (
    <div className="App">
     
      {/* <h1>RICK & MORTY FANPAGE</h1> */}
      <button onClick={() => setShow(true)}>Show modal</button>
      <Modal title="My Modal" onClose={() => setShow(false)} show={show}>
          <p>Here goes de Modal body</p>
      </Modal>
      {/* <Grid container spacing={4} justify='center'>
          <Grid item xs={12} sm={6} md={4}> */}
              <List/>
          {/* </Grid>
      </Grid> */}
      
    </div>
  );
}

export default App;
