import React, { useEffect, useState } from 'react';
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
import { useAppDispatch } from '../store/hooks';
import { signup } from '../store/auth/authReducer';
import Snackbar from './../../utils/notistack';

export default function Login() {
  const dispatch = useAppDispatch();

  const [image, setImage] = useState<string>('');
  const [isImageSelected, setIsImageSelected] = useState<boolean>(false);
  const [fileInputState, setFileInputState] = useState<string>('');
  const [previewSource, setPreviewSource] = useState<string>('');
  const [selectedFile, setSelectedFile] = useState<File>();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    processImageFile(); // getting image state. facing issues to get the updated image state


    if (!isImageSelected || image === '') {
      Snackbar.error('Please Select a profile picture');
      return;
    }

    
    //handling form
    const data = new FormData(event.currentTarget);

    const formData = {
      name: data.get('name'),
      email: data.get('email'),
      password: data.get('password'),
      confirmPassword: data.get('confirmPassword'),
      image: image,
    };

    dispatch(signup(formData));
  };

  const handleFileInputChange = (e: React.ChangeEvent) => {
// getting image from input and processing

    const target = e.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];

    setSelectedFile(file);
    setFileInputState(target.value);
    setIsImageSelected(true);
    previewFile(file); // preview selected image
    processImageFile()
  };

  const previewFile = (file: Blob) => {
    // preview selected image
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const imagePreview = reader.result as string;
      setPreviewSource(imagePreview);
    };
  };

  const processImageFile = () => {
    //processing image for cloudinary
    if (!selectedFile) return;
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onloadend = () => {
      setImage(reader.result as string);
    };
  };


// signup using google acc. This link will be redireced to google acc.
  const googleHandler = async () => {
    window.location.href = 'web-production-c89b.up.railway.app/auth/google';
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
          Registration Form
        </Typography>
        <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin='normal'
            required
            fullWidth
            id='name'
            label='Fullname'
            name='name'
            autoComplete='name'
            autoFocus
            defaultValue='Sakibul Anwar'
          />
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
          <TextField
            margin='normal'
            required
            fullWidth
            name='confirmPassword'
            label='Confirm Password'
            type='confirmPassword'
            id='confirmPassword'
            autoComplete='current-password'
            defaultValue='123456'
          />

          {/* upload image  start*/}
          <div className=''>
            <div>
              <h1 className='title'>Upload an Image</h1>
              <div className='form'>
                <input
                  id='fileInput'
                  type='file'
                  name='image'
                  onChange={handleFileInputChange}
                  value={fileInputState}
                  className='form-input'
                  />
              </div>
            </div>
            {previewSource && (
              <div className=''>
                <img
                  src={previewSource}
                  alt='chosen'
                  className='rounded-3xl w-24 h-24'
                  />
              </div>
            )}
          </div>
            {/* upload image  ends*/}
          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}
            className='bg-green-400 hover:bg-green-500 '
          >
            Sign Up
          </Button>

          <Button
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}
            className='bg-blue-500 hover:bg-blue-600 text-white'
            startIcon={<GoogleIcon />}
            onClick={googleHandler}
          >
            Sign in with Google
          </Button>

          <Grid container>
            <Grid item xs>
              <Link href='/login' passHref>
                <a className='text-blue-500 darK:text-blue-500 hover:text-blue-800'>
                  Already have a account?
                </a>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
