import { ReactElement } from 'react';

export type Props = {
  children: ReactElement[] | ReactElement | string;
};
export type ClientProps = {
  children: ReactElement[] | ReactElement | string;
};

export type RoomListProps = {
  open: boolean;
};

export type User = {
  name: string;
  photos: string;
  email: string;
  googleId?: string;
  id: string;
  _id: string;
  __v: number;
};

export type LoginFormType = {
  email: FormDataEntryValue | null;
  password: FormDataEntryValue | null;
};
export type RegisterFormType = {
  name: FormDataEntryValue | null;
  email: FormDataEntryValue | null;
  password: FormDataEntryValue | null;
  confirmPassword: FormDataEntryValue | null;
};

export type FormError = {
  message: string;
};

export type UserState = {
  status: 'loading' | 'idle';
  error: string | null;
  user: User | null;
};

export type FriendSlice = {
  friends: [];
  pendingInvitations: [];
  onlineUsers: [];
};

export type Invitation = {
  email: FormDataEntryValue | null;
};

export type UiSlice = {
  invitationModal: boolean;
  loading:boolean
};

export type Friend = {
  _id?: string;
  name: string;
  photos:string
  id: string;
  email: string;
  isOnline?: boolean;
};
export type FriendObj = {
  _id: string;
  senderId: Friend;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type Receiver ={
  name: string;
  photos:string
  id: string;
}

export type MessageType = {
  author: Receiver;
  content: string;
  createdAt: string;
  type: string;
  updatedAt: string;
  __v: string;
  _id: string;
};
export type ChatSlice = {
  messages: MessageType[];
  chatType: string | null;
  receiver: Receiver | null;
};

export type PrivateMessageType = { receiver: Receiver; message: string };

export enum ChatType {
  PRIVATE = 'PRIVATE',
  GROUP = 'GROUP',
}
export type MessageText = { text: string; bg: string; date: string };
export type Message = {
  content: string;
  chatId: string;
  date: string;
  photos:string
};
