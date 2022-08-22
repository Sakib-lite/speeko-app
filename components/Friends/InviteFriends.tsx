import React, { Fragment } from 'react';
import Button from '@mui/material/Button';
import { uiActions } from '../store/ui/uiSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import Snackbar from '../../utils/notistack';

const InviteFriends: React.FC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);
  const sendInvitationHandler = () => {
    if (!user) {
      Snackbar.error('Please Sign in to invite friends');

      return;
    }
    dispatch(uiActions.showInvitationModal());
  };

  return (
    <Fragment>
      <Button
        className='text-gray-200 bg-gray-600  w-full hover:bg-gray-500 hover:text-gray-100'
        onClick={sendInvitationHandler}
      >
        Add Friend
      </Button>
    </Fragment>
  );
};

export default InviteFriends;
