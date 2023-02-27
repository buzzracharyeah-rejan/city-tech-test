import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import * as Yup from 'yup';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant='body2' color='text.secondary' align='center' {...props}>
      {'Copyright © '}
      <Link color='inherit' href='https://mui.com/'>
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

const schema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
});

export default function SignIn() {
  const [user, setUser] = useState({ email: '', password: '' });
  let navigate = useNavigate();

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(user);
    try {
      const response = await axios.post('https://jp-dev.cityremit.global/web-api/config/v1/auths/login', {
        login_id: user.email,
        login_password: user.password,
        ip_address: '192.158.1.38',
      });

      if (response.data) {
        localStorage.setItem('jwt', response.data.data[0].jwt_token);
        navigate('/dashboard/mui');
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
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
              onChange={handleChange}
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
              onChange={handleChange}
            />
            <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }} onSubmit={handleSubmit}>
              Sign In
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}

/* 

<Formik
       initialValues={{
         email: '',
         password: ''
       }}
       validationSchema={schema}
       onSubmit={values => {
         console.log(values);
       }}
     >
       {({  values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting, }) => (
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
              onChange={handleChange}
               error={touched.username && Boolean(errors.username)}
                  helperText={touched.username && errors.username}
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
              onChange={handleChange}
               error={touched.username && Boolean(errors.username)}
                  helperText={touched.username && errors.username}
            />
            <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }} onSubmit={handleSubmit}>
              Sign In
            </Button>
          </Box>
         
       )}
     </Formik>
*/
