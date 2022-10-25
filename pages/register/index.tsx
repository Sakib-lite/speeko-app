import React, { Fragment, useEffect } from 'react';
import { NextPage } from 'next';
import Register from '../../components/Form/Register';
import { useRouter } from 'next/router';
import { useAppSelector } from '../../components/store/hooks';
import SimpleBackdrop from '../../components/Layout/Backdrop';

const RegisterPage: NextPage = () => {
  const user = useAppSelector((state) => state.auth?.user);
  const loading=useAppSelector(state=>state.ui.loading)
  const router = useRouter();
  useEffect(() => {
    if (user) router.push('/');
  }, [user]);

  return (
    <Fragment>
   {loading &&  <SimpleBackdrop/>} 
      <Register />
    </Fragment>
  );
};

export default RegisterPage;
