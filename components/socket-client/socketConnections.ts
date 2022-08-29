import { DefaultEventsMap } from '@socket.io/component-emitter';
import io, { Socket } from 'socket.io-client';
import store from '../store/store';
import { User } from '../../utils/types';
import { friendsActions } from '../store/friends/friendsSlice';

let socket: Socket<DefaultEventsMap, DefaultEventsMap> | null = null;

export const connectToSocketServer = (user: User) => {
  socket = io('http://localhost:5000', {
    auth: {
      user,
    },
  });

  socket.on('connect', () => {
    console.log('connected to server');
    console.log(socket?.id);
  });

  socket.on('friends-invitations', (data) => {
    const { pendingInvitations } = data;
    store.dispatch(friendsActions.getPendingInvitations(pendingInvitations));
  });

  socket.on('friend-list', (data) => {
    const { friends } = data;
    store.dispatch(friendsActions.addFriends(friends));
  });

  socket.on('online-users', (data) => {
    const { onlineUsers } = data;
    store.dispatch(friendsActions.getOnlineUsers(onlineUsers));
  });

  socket.on("disconnect", () => {
    console.log(socket?.id); // undefined
  });
};
