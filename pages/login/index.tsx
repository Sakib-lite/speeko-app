import React, { Fragment, useEffect } from 'react';
import Login from '../../components/Form/Login';
import Layout from '../../components/Layout/Layout';
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
      <Layout>
        <Login />
      </Layout>
    </Fragment>
  );
};

export default LoginPage;
