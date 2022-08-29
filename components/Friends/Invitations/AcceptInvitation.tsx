import React, { Fragment } from 'react';
import { acceptInvitation } from '../../store/friends/friendsReducer';
import { useAppDispatch } from '../../store/hooks';

const AcceptInvitation = ({email}: { email: string}) => {

const dispatch = useAppDispatch()

  const acceptHandler = () => {
 dispatch(acceptInvitation(email))
  };

  return (
    <Fragment>
      <button onClick={acceptHandler}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-3 h-3'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M3 13.5l6.785 6.785A48.1 48.1 0 0121 4.143'
          />
        </svg>
      </button>
    </Fragment>
  );
};

export default AcceptInvitation;

