import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  FormError,
  LoginFormType,
  RegisterFormType,
  User,
} from '../../../utils/types';
import Snackbar from '../../../utils/notistack';
import AuthService from './auth.service';


export const signup = createAsyncThunk(
  'auth/signup',
  async (formData: RegisterFormType, { rejectWithValue, dispatch }) => {
    try {
      const response = await AuthService.signupAPI(formData);

      const data = await response.json();
      if (data.status === 'success') {
        const { email, password } = formData;
        const userData = { email, password };
        return dispatch(login(userData));
      }

      if (response.ok === false) throw new Error(`${data.message}`);
      return data;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
    
      Snackbar.error(err.message);
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
      const data = await AuthService.loginAPI(formData);
      if (data.status === 'success') {
        Snackbar.success(data.message);
      }

      return data;
    } catch (err) {
      Snackbar.error('Wrong email or password');
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
    return await AuthService.getUserAPI();
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
    const data = await AuthService.logoutAPI();
    if (data.status === 'success') {
      Snackbar.success(data.message);
    }
    return data;
  } catch (err) {
    Snackbar.error('Something went wrong');
    return rejectWithValue({
      message: 'Something went wrong',
    });
  }
});
