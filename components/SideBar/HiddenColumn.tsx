import React, { Fragment } from 'react';
import InviteFriends from '../Friends/InviteFriends';

const HiddenColumn: React.FC = () => {
  return (
    <Fragment>
      <div className='mx-2'>
        <div className='mx-2 mt-4'>
          <InviteFriends />
        </div>
      </div>
    </Fragment>
  );
};

export default HiddenColumn;
