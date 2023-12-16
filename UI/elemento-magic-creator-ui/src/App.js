import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#f19e32',
    },
    secondary: {
      main: '#E0C2FF',
      light: '#F5EBFF',
      contrastText: '#47008F',
    },
  },
});

export default function SignInSide() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid 
          item xs={12} 
          component={Paper} 
          elevation={6} 
          square
          sx={{
            height: '100vh',
            width: '100vw',
            backgroundImage: 'url(back.jpg)', 
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: 'white',
          }}
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Box
              component="img"
              sx={{
                height: 250,
                width: 250,
                maxHeight: { xs: 250 },
                maxWidth: { xs: 250 },
              }}
              alt="The house from the offer."
              src="elemento_logo.png"
            />
            <Typography component="h1" variant="h3">
              Elemento magic creator
            </Typography>

            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="input"
                label="Inserisci il nome o il link del servizio che vuoi creare in Elemento"
                name="input"
                autoFocus
                InputLabelProps={{
                  style: { color: 'white' }, 
                }}
                inputProps={{
                  style: { color: 'white' }, 
                  color: 'white',
                }}
              />

              {/* TO DO: toggle which one */}
              <Alert variant="filled" severity="error">ERROR - Something went wrong!</Alert>
              <Alert variant="filled" severity="success">Your name is been processed correctly, check out the result below!</Alert>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Richiedi
              </Button>

              <Grid container sx={{backgroundColor: 'white', borderRadius: '16px', marginTop: '200px'}}>
                {/* TO DO: add linkedin profiles */}
                <Grid item xs>
                  <Typography sx={{color: 'black', margin: '5px'}}>
                    Made by: 
                  </Typography>
                </Grid>
                <Grid item xs sx={{margin: '5px'}}>
                  <Link href="#" variant="body2">
                    Paolo
                  </Link>
                </Grid>
                <Grid item xs sx={{margin: '5px'}}>
                  <Link href="#" variant="body2">
                    Carlo
                  </Link>
                </Grid>
                <Grid item xs sx={{margin: '5px'}}>
                  <Link href="#" variant="body2">
                    Nicola
                  </Link>
                </Grid>
                <Grid item xs sx={{margin: '5px'}}>
                  <Link href="#" variant="body2">
                    Francesco
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
