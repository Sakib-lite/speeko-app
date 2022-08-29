import { createAsyncThunk } from '@reduxjs/toolkit';
import Snackbar from './../../../utils/notistack';
import FriendService from './friends.service';
import { FormError, Invitation } from '../../../utils/types';
import { getUser } from '../auth/authReducer';

export const sendInvitation = createAsyncThunk(
  'friends/send-invite',
  async (form: Invitation, { rejectWithValue }) => {
    try {
      const response = await FriendService.sendInvitationAPI(form);

      const data = await response.json();

      if (data.status === 'success') {
        Snackbar.success(data.message);
      }
      if (response.ok === false) throw new Error(`${data.message}`);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      Snackbar.error(error.message);

      return rejectWithValue({
        message: 'Failed to send invitation',
      });
    }
  }
);


export const getInvitations = createAsyncThunk<{
data:[],

  rejectValue: FormError;
}>('friends/get-invite', async (_, { rejectWithValue }) => {
  try {
   const data= await FriendService.getInvitationAPI();
   const invitations=data
   console.log(invitations);
   return invitations
  } catch (err) {
    console.log(err);
    return rejectWithValue({
      message: 'User is not authenticated',
    });
  }
});



export const acceptInvitation = createAsyncThunk(
  'friends/accept-invite',
  async (email:string, { rejectWithValue,dispatch }) => {
    try {
      const response = await FriendService.acceptInvitationAPI(email);

      const data = await response.json();

      if (data.status === 'success') {
       dispatch(getUser())
        Snackbar.success(data.message);
        
      }
      if (response.ok === false) throw new Error(`${data.message}`);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      Snackbar.error(error.message);

      return rejectWithValue({
        message: 'Failed to send invitation',
      });
    }
  }
);
export const declineInvitation = createAsyncThunk(
  'friends/decline-invite',
  async (email:string, { rejectWithValue,dispatch}) => {
    try {
      const response = await FriendService.declineInvitationAPI(email);

      const data = await response.json();

      if (data.status === 'success') {
        dispatch(getUser())
        Snackbar.success(data.message);
      }
      if (response.ok === false) throw new Error(`${data.message}`);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      Snackbar.error(error.message);
      return rejectWithValue({
        message: 'Failed to send invitation',
      });
    }
  }
);