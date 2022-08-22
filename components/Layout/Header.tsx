import Link from 'next/link';
import React, { Fragment } from 'react';
import { logout } from '../store/auth/authReducer';
import { useAppSelector, useAppDispatch } from '../store/hooks';

const Header: React.FC = () => {
  const user = useAppSelector((state) => state.auth?.user);
  const dispatch = useAppDispatch();
  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <Fragment>
      <div className='flex ml-auto space-x-4'>
        {user && <button onClick={logoutHandler} className='text-gray-500'>Logout</button>}
        <Link href='/login' passHref>
          <a className='text-gray-500'>Login</a>
        </Link>
        <Link href='/register' passHref>
          <a className='text-gray-500'>Register</a>
        </Link>
      </div>
    </Fragment>
  );
};

export default Header;
