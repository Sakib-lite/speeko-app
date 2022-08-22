import React, { Fragment } from 'react';
import type { NextPage } from 'next';
import Layout from '../components/Layout/Layout';
import { useAppSelector } from '../components/store/hooks';

const Home: NextPage = () => {

const user=useAppSelector(state=>state.auth?.user)

  return (
    <Fragment>
      <div className='h-full w-full'>
        <Layout>
          <div className='mt-10'>
            {user?.name}
          </div>
        </Layout>
      </div>
    </Fragment>
  );
};

export default Home;
