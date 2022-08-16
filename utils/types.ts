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
  photo: string;
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
