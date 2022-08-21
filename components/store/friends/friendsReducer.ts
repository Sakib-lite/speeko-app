import { createAsyncThunk } from '@reduxjs/toolkit';
import Snackbar from './../../../utils/notistack';
import FriendService from './friends.service';
import { AxiosError } from 'axios';
import { Invitation } from '../../../utils/types';

export const sendInvitation = createAsyncThunk(
  'friends/invite',
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
