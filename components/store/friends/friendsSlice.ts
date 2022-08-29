import { createSlice } from '@reduxjs/toolkit';
import { FriendSlice } from '../../../utils/types';
import { getInvitations } from './friendsReducer';

const initialState: FriendSlice = {
  friends: [],
  pendingInvitations: [],
  onlineUsers: [],
};

const friendSlice = createSlice({
  name: 'friend',
  initialState,
  reducers: {
    addFriends(state, action) {
      state.friends = action.payload || []
    },
    getPendingInvitations(state,action){
      state.pendingInvitations=action.payload || []
    },
    getOnlineUsers(state,action){
      state.onlineUsers=action.payload || []
    }
  },

  extraReducers: (builder) => {
    //signup  section  starts
    builder.addCase(getInvitations.pending, (state) => {
      // state.status = 'loading';
      // state.error = null;
      console.log(state);
    });
    builder.addCase(getInvitations.fulfilled, (state, { payload }) => {
      state.pendingInvitations = payload.data;
    });

    builder.addCase(getInvitations.rejected, (state, { payload }) => {
      // if (payload) state.error = 'Registration failed';
      // state.status = 'idle';
      if (payload) console.log(payload);
    });
  },
});

const { reducer } = friendSlice;

export default reducer;
export const friendsActions = friendSlice.actions;
