import React, { Fragment } from 'react';
import Avatar from '@mui/material/Avatar';

interface Props {
  photos: string;
}

const ChatAvatar = ({ photos }: Props) => {
  return (
    <Fragment>
      <Avatar
        className='w-12 h-12 rounded-full mx-auto'
        src={photos}
        alt='Marie Zulfikar'
      />
    </Fragment>
  );
};

export default ChatAvatar;
