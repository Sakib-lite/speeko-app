import { createSlice } from '@reduxjs/toolkit';
import { UserState } from '../../../utils/types';
import { getUser, login, logout, signup } from './authService';

const initialState: UserState = {
  user: null,
  error: null,
  status: 'idle',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    //signup  section  starts
    builder.addCase(signup.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(signup.fulfilled, (state) => {
      // state.user = payload.user;
      state.status = 'idle';
    });

    builder.addCase(signup.rejected, (state, { payload }) => {
      if (payload) state.error = 'User is not logged in';
      state.status = 'idle';
    });

    //login  section  starts
    builder.addCase(login.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.user = payload.user;
      state.status = 'idle';
    });

    builder.addCase(login.rejected, (state, { payload }) => {
      if (payload) state.error = 'Registration failed';
      state.status = 'idle';
    });

    //getuser  section  starts
    builder.addCase(getUser.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(getUser.fulfilled, (state, { payload }) => {
      state.user = payload.user;
      state.status = 'idle';
    });

    builder.addCase(getUser.rejected, (state, { payload }) => {
      if (payload) state.error = 'User is not authenticated';
      state.status = 'idle';
    });

    //logout section  starts
    builder.addCase(logout.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(logout.fulfilled, (state, { payload }) => {
      state.user = payload.user;
      state.status = 'idle';
    });

    builder.addCase(logout.rejected, (state, { payload }) => {
      if (payload) state.error = 'Something went wrong';
      state.status = 'idle';
    });
  },
  reducers: {},
});

const { reducer } = authSlice;
export default reducer;
