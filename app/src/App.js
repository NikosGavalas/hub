import './App.css';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';


function App() {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      maxWidth="xs"
      spacing={10}>
      
      <Grid item xs={12} />

      <Grid item xs={10}>
        <Divider flexItem/>
        <Typography variant='h3'>Welcome</Typography>
      </Grid>  

    </Grid>
  );
}

export default App;
