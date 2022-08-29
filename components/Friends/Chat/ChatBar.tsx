import React, { Fragment } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { useAppSelector } from '../../store/hooks';
import Chat from './Chat';
import { User } from '../../../utils/types';

const ChatBar = () => {
  const friends = useAppSelector((state) => state.friends.friends);

  return (
    <Fragment>
      <h3 className='text-xs font-semibold uppercase text-gray-400 mb-1'>
        Chats
      </h3>
      <div className='divide-y divide-gray-200'>
        <List sx={{ width: '100%' }}>
          {friends.map((user: User) => (
            <ListItem key={user.id}>
              <Chat name={user.name} id={user.id} email={user.email} />
            </ListItem>
          ))}
        </List>
      </div>
    </Fragment>
  );
};

export default ChatBar;
