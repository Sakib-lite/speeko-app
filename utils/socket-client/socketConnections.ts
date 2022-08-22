import { DefaultEventsMap } from '@socket.io/component-emitter';
import io, { Socket } from 'socket.io-client';
import { User } from '../types';

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
};
