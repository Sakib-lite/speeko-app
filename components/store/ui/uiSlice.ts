import { UiSlice } from '../../../utils/types';
import { createSlice } from '@reduxjs/toolkit';

const initialState: UiSlice = {
  invitationModal: false,
  loading: false
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    showInvitationModal(state) {
      state.invitationModal = true;
    },
    hideInvitationModal(state) {
      state.invitationModal = false;
    },
    setLoading(state) {
      state.loading = true;
    },
    unsetLoading(state) {
      state.loading = false;
    },
  },
});

const { reducer } = uiSlice;
export default reducer;
export const uiActions = uiSlice.actions;
