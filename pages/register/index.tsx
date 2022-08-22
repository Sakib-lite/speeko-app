import React, { Fragment, useEffect } from 'react';
import { NextPage } from 'next';
import Layout from '../../components/Layout/Layout';
import Register from '../../components/Form/Register';
import { useRouter } from 'next/router';
import { useAppSelector } from '../../components/store/hooks';

const RegisterPage: NextPage = () => {
  const user = useAppSelector((state) => state.auth?.user);
  const router = useRouter();
  useEffect(() => {
    if (user) router.push('/');
  }, [user]);

  return (
    <Fragment>
      <Layout>
        <Register />
      </Layout>
    </Fragment>
  );
};

export default RegisterPage;
