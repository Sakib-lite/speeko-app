import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  FormError,
  LoginFormType,
  RegisterFormType,
  User,
} from '../../../utils/types';
import Snackbar from '../../../utils/notistack'

const URL='http://localhost:5000'

export const signup = createAsyncThunk(
  'auth/signup',
  async (formData: RegisterFormType, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetch(`${URL}/auth/signup`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.status==='success') {
        const { email, password } = formData;
        const userData = { email, password };
        return dispatch(login(userData));
      }

      return data;
    } catch (err) {
      return rejectWithValue({
        message: 'Failed to Login',
      });
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (formData: LoginFormType, { rejectWithValue }) => {
    try {
      const response = await fetch(`${URL}/auth/login`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log('  data', data)
      if (data.status==='success') {
  Snackbar.success(data.message)
      }

      return data;
    } catch (err) {
      Snackbar.error('Wrong email or password')
      return rejectWithValue({
        message: 'Failed to Login',
      });
    }
  }
);

export const getUser = createAsyncThunk<{
  user: User;
  message?: string;
  rejectValue: FormError;
}>('auth/getUser', async (_, { rejectWithValue }) => {
  try {
    const response = await fetch(`${URL}/auth/user`, {
      credentials: 'include',
    });
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
    return rejectWithValue({
      message: 'User is not authenticated',
    });
  }
});

export const logout = createAsyncThunk<{
  user: null;
  message?: string;
  rejectValue: FormError;
}>('auth/logout', async (_, { rejectWithValue }) => {
  try {
    const response = await fetch(`${URL}/auth/logout`, {
      credentials: 'include',
    });
    const data = await response.json();
    if (data.status==='success') {
      Snackbar.success(data.message)
          }
    return data;
  } catch (err) {
    Snackbar.error('Something went wrong')
    return rejectWithValue({
      message: 'Something went wrong',
    });
  }
});
