import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';


function Login() {

    const [userName, setUserName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/Home');
    };



  return (

    <Box
        sx={{
        minHeight: '100vh',
        background: 'linear-gradient(to right, #74ebd5, #ACB6E5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        }}
    >
        <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            maxWidth: 400,
            margin: '0 auto',
            padding: 3,
        }}>
        <Typography variant="h4" component="h1" gutterBottom>
            SR Enterprises
        </Typography>

        <Typography variant="subtitle1" gutterBottom>
            Please login to continue
        </Typography>
        
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3, width: '100%' }}>

            <TextField
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
            />
            
            <TextField
            label="Mobile Number"
            variant="outlined"
            fullWidth
            margin="normal"
            type="tel"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            required
            />
            
            <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 3, mb: 2 }}
            >
            Login
            </Button>

        </Box>

        </Box>
    </Box>

    

  )



};

export default Login;

