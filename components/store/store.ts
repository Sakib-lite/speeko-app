import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth/authSlice';
import uiSlice from './ui/uiSlice';
import friendsSlice from './friends/friendsSlice'
import chatSlice from './chat/chatSlice';

const store = configureStore({
  reducer: {
    auth: authSlice,
    ui:uiSlice,
    friends:friendsSlice,
    chat:chatSlice
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
