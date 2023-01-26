import React, { useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from 'next/link';
import GoogleIcon from '@mui/icons-material/Google';
import { getUser, login } from '../store/auth/authReducer';
import { useAppDispatch } from '../store/hooks';

export default function Login() {
  const dispatch = useAppDispatch();


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const formData = {
      email: data.get('email'),
      password: data.get('password'),
    };
    dispatch(login(formData));
  };

  useEffect(() => {
    dispatch(getUser());
  }, []);

  const googleHandler = async () => {
    window.location.href = 'web-production-c89b.up.railway.app/api/auth/google'
  };

  return (
    <Container
      component='main'
      maxWidth='xs'
      className='dark:bg-gray-300 bg-gray-100 rounded-lg pb-4'
    >
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar className='bg-green-400'>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign in
        </Typography>
        <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin='normal'
            required
            fullWidth
            id='email'
            label='Email Address'
            name='email'
            autoComplete='email'
            autoFocus
            defaultValue='sakib@gmail.com'
          />
          <TextField
            margin='normal'
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
            id='password'
            autoComplete='current-password'
            defaultValue='123456'
          />

          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}
            className='bg-green-400 hover:bg-green-500 '
          >
            Sign In
          </Button>
          <Button
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}
            className='bg-blue-500 hover:bg-blue-600 text-white'
            startIcon={<GoogleIcon />}
            onClick={googleHandler}
          >
            Login with Google
          </Button>

          <Grid container>
            <Grid item xs>
              <Link href='/forget-password' passHref>
                <a className='text-blue-500 darK:text-blue-500 hover:text-blue-800'>
                  Forgot password?
                </a>
              </Link>
            </Grid>
            <Grid item>
              <Link href='/register' passHref>
                <a className='text-blue-500 darK:text-blue-500 hover:text-blue-800'>
                  {"Don't have an account? Sign Up"}
                </a>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
