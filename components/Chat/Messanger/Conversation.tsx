import React, { Fragment, useEffect } from 'react';
import { privateChatHistory } from '../../socket-client/socketConnections';
import { useAppSelector } from '../../store/hooks';
import AllMessages from './AllMessages';

const Conversation = () => {
  const receiver = useAppSelector((state) => state.chat.receiver);
  const receiverId = receiver?.id;
  useEffect(() => {
    if (receiverId) privateChatHistory(receiverId);
  }, [receiver]);

  return (
    <Fragment>
      <div className='messages flex-1 overflow-auto'>
        <AllMessages />
      </div>
    </Fragment>
  );
};

export default Conversation;
