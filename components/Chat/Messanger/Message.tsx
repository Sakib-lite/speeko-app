import React, { Fragment } from 'react';
import { Message } from '../../../utils/types';
import { useAppSelector } from '../../store/hooks';
import ChatAvatar from '../ChatAvatar';
import MessageText from './MessageText';

const Message = ({ date, content, chatId, photos }: Message) => {
  // changing message box interface  for sender and receiver

  const userId = useAppSelector((state) => state.auth.user?.id);
  const margin = userId !== chatId ? 'ml-auto' : 'mr-auto';
  const dir = userId === chatId ? 'flex-1' : 'flex-2 flex';
  const bg =
    userId === chatId ? 'text-white bg-blue-600' : 'text-gray-700 bg-gray-300';
  return (
    <Fragment>
      {/* my message starts */}
      <div className={`message me mb-4 flex text-right ${margin}`}>
        <div className={dir}>

          {/* chat avatar will shown for only sender */}
          {userId !== chatId && (
            <div className='w-12 h-12 relative'>
              <ChatAvatar photos={photos} />
            </div>
          )}
          <MessageText text={content} bg={bg} date={date} />
        </div>
      </div>
      {/* my message ends */}
    </Fragment>
  );
};

export default Message;
