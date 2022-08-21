import { createSlice } from '@reduxjs/toolkit';


const initialState: FriendSlice = {
  friends: [],
  pendingInvitations: [],
  activeFriends: [],
};

const friendSlice = createSlice({
  name: 'friend',
  initialState,
  reducers: {},
});

const { reducer } = friendSlice;

export default reducer;
export const friendsActions = friendSlice.actions;
