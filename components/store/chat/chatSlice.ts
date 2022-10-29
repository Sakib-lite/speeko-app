import { createSlice } from '@reduxjs/toolkit';
import { ChatSlice } from '../../../utils/types';

const initialState: ChatSlice = {
  messages: [],
  lastMessages: [],
  chatType: null,
  receiver: null,
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    selectConversation(state, action) {
      state.receiver = action.payload.receiver;
      state.chatType = action.payload.chatType;
    },
    getMessages(state,action){
      state.messages=action.payload.messages
    },
    getLastMessages(state,action){
      state.lastMessages=action.payload.lastMessages
    }
  },
});

const { reducer } = chatSlice;
export default reducer;
export const chatActions = chatSlice.actions;
