import React, { Fragment } from 'react';
import ChatBar from '../Friends/Chat/ChatBar';
import Invitations from '../Friends/Invitations/Invitations';
import InviteFriends from '../Friends/Invitations/InviteFriends';
import { useAppSelector } from '../store/hooks';

const HiddenColumn: React.FC = () => {
  const user = useAppSelector((state) => state.auth?.user);

  return (
    <Fragment>
      <div className=''>
        <div className='mt-4 space-y-8'>
          <div className='mx-2'>
            <InviteFriends />
          </div>
          <div className=''>{user && <ChatBar />}</div>
          <div className=' '>{user && <Invitations />}</div>
        </div>
      </div>
    </Fragment>
  );
};

export default HiddenColumn;
