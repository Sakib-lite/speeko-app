import React, { Fragment, useEffect } from 'react';
import Login from '../../components/Form/Login';
import { NextPage } from 'next';
import { useAppSelector } from '../../components/store/hooks';
import { useRouter } from 'next/router';

const LoginPage: NextPage = () => {
  const user = useAppSelector((state) => state.auth?.user);
  const router = useRouter();
  useEffect(() => {
    if (user) router.push('/');
  }, [user]);

  return (
    <Fragment>
      <Login />
    </Fragment>
  );
};

export default LoginPage;
