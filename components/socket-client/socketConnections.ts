import { DefaultEventsMap } from '@socket.io/component-emitter';
import io, { Socket } from 'socket.io-client';
import store from '../store/store';
import { PrivateMessageType, User } from '../../utils/types';
import { friendsActions } from '../store/friends/friendsSlice';
import { chatActions } from '../store/chat/chatSlice';

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
  socket.on('private-chat-history', (data) => {
    store.dispatch(chatActions.getMessages(data));
  });
  socket.on('disconnect', () => {
    console.log(socket?.id); // undefined
  });
};

export const sendPrivateMessage = (data: PrivateMessageType) => {
  if (socket) socket.emit('private-message', data);
  console.log('  data', data);
};

export const privateChatHistory = (receiverId: string) => {
  if (socket) socket.emit('private-chat-history', receiverId);
  // console.log('  receiverId', receiverId)
};
