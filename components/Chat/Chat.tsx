import React, { Fragment } from 'react';
import { ChatType, Friend } from '../../utils/types';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import ChatMenu from './ChatMenu';
import { User } from '../../utils/types';
import { chatActions } from '../store/chat/chatSlice';
import ChatAvatar from './ChatAvatar';

const Chat = ({ name, id, photos }: Friend) => {
  console.log(id, name);

  const onlineUsers = useAppSelector((state) => state.friends.onlineUsers);
  const lastMessages = useAppSelector((state) => state.chat.lastMessages);

  const message = lastMessages.find((msg) =>
    msg.participants.some((msgId: string) => msgId === id)
  );

  let content = 'No message';
  if (message) content = message.message.content; //sh0owing last message as preview

  const dispatch = useAppDispatch();
  const isOnline = onlineUsers.find((user: User) => user.id === id);

  const conversationHandler = () => {
    const chatType = ChatType.PRIVATE;
    const receiver = { name, id };

    dispatch(chatActions.selectConversation({ receiver, chatType }));
  };

  return (
    <Fragment>
      <div className='group cursor-pointer transform hover:bg-gray-100 bg-white rounded px-1 py-2   shadow-md w-full relative'>
        <button className='flex' onClick={conversationHandler}>
          {' '}
          <div className='flex-2'>
            <div className='w-12 h-12 relative'>
              <ChatAvatar photos={photos} />
              {!isOnline && (
                <span className='absolute w-4 h-4 bg-green-400 rounded-full right-0 bottom-0 border-2 border-white'></span>
              )}
            </div>
          </div>
          <div className='flex-1 px-2'>
            <div className='truncate text-md'>
              <span className='text-gray-800 '>{name}</span>
            </div>
            <div>
              <small className='text-gray-600'>{content}</small>
            </div>
          </div>
        </button>
        <div className='hidden group-hover:block absolute top-5 right-2 z-40  rounded-2xl'>
          <ChatMenu id={id} />
        </div>
      </div>
    </Fragment>
  );
};

export default Chat;
