import React, { Fragment } from 'react';
import { useAppSelector } from '../../store/hooks';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { FriendObj } from '../../../utils/types';
import DeclineInvitation from './DeclineInvitation';
import AcceptInvitation from './AcceptInvitation';
import Tooltip from '@mui/material/Tooltip';

const Invitations = () => {
  const invitations = useAppSelector(
    (state) => state.friends.pendingInvitations
  );
  if (invitations.length === 0)
    return <p className='mx-auto opacity-80 font-serif'>No Invitations</p>;
  return (
    <Fragment>
      <div className='m-1'>
     
        <fieldset className='border border-gray-500 rounded-lg'>
          <legend className='ml-2 font-serif opacity-80'>Invitations</legend>
          <List sx={{ width: '100%' }}>
            <ListItem></ListItem>
            {invitations.map((invite: FriendObj) => (
              <ListItem key={invite?.createdAt}>
                <div className='flex items-center w-full'>
                  <Tooltip title={invite.senderId?.name} followCursor arrow>
                    <h1 className='text-xs w-24'>{invite.senderId?.email}</h1>
                  </Tooltip>
                  <div className='ml-auto space-x-2'>
                 
                    <AcceptInvitation email={invite.senderId?.email}/>
                    <DeclineInvitation email={invite.senderId?.email}/>
                  </div>
                </div>
              </ListItem>
            ))}
          </List>{' '}
        </fieldset>{' '}
      </div>
    </Fragment>
  );
};

export default Invitations;
