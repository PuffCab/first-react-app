
import './App.css';
import List from './components/List';
import { Grid } from '@material-ui/core/'


function App() {


  return (
    <div className="App">
     
      <h1>RICK & MORTY CHARACTERS</h1>
      {/* <Grid container spacing={4} justify='center'>
          <Grid item xs={12} sm={6} md={4}> */}
              <List/>
          {/* </Grid>
      </Grid> */}
      
    </div>
  );
}

export default App;
