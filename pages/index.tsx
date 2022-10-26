import React, { Fragment } from 'react';
import type { NextPage } from 'next';
import Layout from '../components/Layout/Layout';
import { useAppSelector } from '../components/store/hooks';
import Messenger from '../components/Chat/Messenger/Messenger';
import ChatIcon from '../components/Chat/Messenger/ChatIcon';

const Home: NextPage = () => {

const receiver=useAppSelector(state=>state.chat?.receiver)

  return (
    <Fragment>
      <div className='h-full w-full'>
        <Layout>
          <div className='mt-10'>
     {receiver ? <Messenger/> :<ChatIcon/>}      
     
          </div>
        </Layout>
      </div>
    </Fragment>
  );
};

export default Home;
