import React, { Fragment } from 'react';
import { Friend } from '../../../utils/types';
import { useAppSelector } from '../../store/hooks';
import ChatMenu from './ChatMenu';
import {  User } from '../../../utils/types';


const Chat = ({ name, email, id }: Friend) => {

const onlineUsers=useAppSelector(state=>state.friends.onlineUsers)

const isOnline=onlineUsers.find((user:User)=>user.id===id)


  return (
    <Fragment>
      <div className='w-full text-left py-2 focus:outline-none focus-visible:bg-indigo-50 group'>
        <div className='flex items-center relative z-10 '>
          <img
            className='rounded-full items-start flex-shrink-0 mr-3'
            src='https://res.cloudinary.com/dc6deairt/image/upload/v1638102932/user-32-01_pfck4u.jpg'
            width='32'
            height='32'
            alt='Marie Zulfikar'
          />
          <div>
         <div className="flex items-center">  <h4 className='text-sm font-semibold text-gray-900'>{name}</h4>
        
{isOnline && <div className='h-3 w-3 rounded-3xl bg-green-700 ml-auto' ></div>}

         </div> 
            <div className='text-[13px]'>{email}</div>
          </div>
        </div>
        <div className='hidden group-hover:block absolute top-8 right-2 z-40  rounded-2xl'>
          <ChatMenu id={id} />
        </div>
      </div>
    </Fragment>
  );
};

export default Chat;
