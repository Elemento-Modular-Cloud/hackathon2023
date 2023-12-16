import React, { useState } from 'react';
import API from './API/api.js';

// UI
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
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
  const [loading, setLoading] = useState(null);   // 0: loading, 1: success
  const [error, setError] = useState(null);       // 0: no error, 1: error
  const [message, setMessage] = useState(null);   // message to show
  const [response, setResponse] = useState(1); // response from API  1: success

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const inputValue = data.get('input');
    console.log('Input Value:', inputValue);

    fetch('http://127.0.0.1:5000/run-script', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      params: JSON.stringify({ input: inputValue }),
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response data
        console.log(data);
      })
      .catch(error => {
        // Handle any errors
        console.error('Error:', error);
      });
  };

  
  //   setLoading(1);

  //   try {
  //     await API.getScraper(inputValue);

  //     setLoading(0);
  //     setResponse(1);
  //   } catch (error) {
  //     setLoading(0);
  //     setError(1);
  //     console.error('Error:', error);
  //   }
  // };

  //  const handleReset = async (event) => { ... };

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
                height: 150,
                width: 150,
                maxHeight: { xs: 150 },
                maxWidth: { xs: 150 },
              }}
              src="elemento_logo.png"
            />
            <Typography component="h1" variant="h3" sx={{margin: "20px"}}>
              Elemento magic creator
            </Typography>

            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <Typography component="h1" variant="h6">
                Inserisci il nome o il link del servizio che vuoi creare in Elemento
              </Typography>
              <TextField
                margin="normal"
                fullWidth
                id="input"
                label="Scrivi qua"
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

              <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                {loading === 0 && <CircularProgress />}
                {loading === 1 && (
                  <>
                    {error === 0 && 
                      <Alert variant="filled" severity="error">
                        ERROR - Something went wrong!
                      </Alert>}
                    {error === 1 && (
                      <Alert variant="filled" severity="success">
                        Your name has been processed correctly. Check out the result below!
                      </Alert>
                    )}
                  </>
                )}
              </Box>
            </Box>

            {/* JSON box */}
            {response === 0 && 
              <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onSubmit={handleSubmit}
                >
                  Richiedi
                </Button>
              </Box>
            }
            {response === 1 && 
              <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                
              </Box>
            }

            {message}

            <Grid container sx={{backgroundColor: 'white', position: "absolute", bottom: "0px"}}>
              {/* TO DO: add linkedin profiles */}
              <Grid item xs>
                <Typography sx={{color: 'black', margin: '5px'}}>
                  Made by: 
                </Typography>
              </Grid>
              <Grid item xs sx={{margin: '5px'}}>
                <Link href="https://www.linkedin.com/in/paolo-beci-919a28199/" variant="body2">
                  Paolo
                </Link>
              </Grid>
              <Grid item xs sx={{margin: '5px'}}>
                <Link href="https://www.linkedin.com/in/bottarocarlo/" variant="body2">
                  Carlo
                </Link>
              </Grid>
              <Grid item xs sx={{margin: '5px'}}>
                <Link href="https://www.linkedin.com/in/nicola-gutierrez/" variant="body2">
                  Nicola
                </Link>
              </Grid>
              <Grid item xs sx={{margin: '5px'}}>
                <Link href="https://www.linkedin.com/in/francesco-audisio-8504582a/" variant="body2">
                  Francesco
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
