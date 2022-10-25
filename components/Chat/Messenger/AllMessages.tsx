import React, { Fragment } from 'react';
import { MessageType } from '../../../utils/types';
import { useAppSelector } from '../../store/hooks';
import Message from './Message';

const AllMessages = () => {
  const messages = useAppSelector((state) => state.chat.messages);

  return (
    <Fragment>
      {messages.map((msg: MessageType) => (
        <Message
          content={msg.content}
          key={msg._id}
          chatId={msg.author.id}
          photos={msg.author.photos}
          date={msg.createdAt}
        />
      ))}
    </Fragment>
  );
};

export default AllMessages;
