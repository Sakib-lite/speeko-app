import React, { useRef } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';

import { useAppDispatch, useAppSelector } from '../store/hooks';
import { uiActions } from '../store/ui/uiSlice';
import { sendInvitation } from '../store/friends/friendsReducer';
import Snackbar from '../../utils/notistack';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  boxShadow: 24,
  p: 4,
};

export default function InviteFriendModal() {
  const dispatch = useAppDispatch();
  const open = useAppSelector((state) => state.ui.invitationModal);
  const handleClose = () => dispatch(uiActions.hideInvitationModal());
  const emailRef = useRef<HTMLInputElement | null>(null);

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = emailRef.current?.value;
    if (email) dispatch(sendInvitation({ email }));
    else Snackbar.error('Please enter an email address');
  };
  return (
    <div>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 1000,
        }}
      >
        <Fade in={open}>
          <Box
            sx={style}
            className='bg-gradient-to-r from-cyan-300 to-blue-300 rounded-lg'
          >
            <form onSubmit={submitHandler}>
              {' '}
              <Typography
                id='transition-modal-title'
                variant='h6'
                component='h2'
                className='text-gray-800'
              >
                Invite your friends
              </Typography>
              <FormControl variant='standard' className='mt-4 bg-transparent'>
                <InputLabel htmlFor='input-with-icon-adornment'>
                  Email Address
                </InputLabel>
                <Input
                  inputRef={emailRef}
                  className=''
                  id='input-with-icon-adornment'
                  startAdornment={
                    <InputAdornment position='start'>
                      <AccountCircle />
                    </InputAdornment>
                  }
                />
              </FormControl>
              <div className='w-full'>
                <Button
                  type='submit'
                  className='text-gray-200 bg-gray-600   hover:bg-gray-500 hover:text-gray-100 ml-auto mt-4 '
                >
                  Send Invitation
                </Button>
              </div>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
