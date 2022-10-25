import React, { Fragment } from 'react';
import moment from 'moment';
import { MessageText } from '../../../utils/types';

const MessageText = ({ text, bg, date }: MessageText) => {
  const today = moment(Date.now()).format('L') === moment(date).format('L');
  const time = today
    ? moment(date).format('LT')
    : moment(date).format('MMM Do');

  return (
    <Fragment>
      <div className='px-2'>
        <div className={`inline-block rounded-full p-2 px-6 ${bg}`}>
          <span>{text}</span>
        </div>
        <div className='pr-4'>
          <small className='text-gray-500'>{time}</small>
        </div>
      </div>
    </Fragment>
  );
};

export default MessageText;
