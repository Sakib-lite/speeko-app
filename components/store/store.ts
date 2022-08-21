import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth/authSlice';
import uiSlice from './ui/uiSlice';
import friendsSlice from './friends/friendsSlice'

const store = configureStore({
  reducer: {
    auth: authSlice,
    ui:uiSlice,
    friends:friendsSlice
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
