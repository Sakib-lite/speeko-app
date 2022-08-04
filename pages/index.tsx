import React, { Fragment } from 'react';
import type { NextPage } from 'next';
import Layout from '../components/Layout/Layout';
import Typography from '@mui/material/Typography';

const Home: NextPage = () => {
  return (
    <Fragment>
      <div className='bg-gradient-to-r from-gray-400 to-gray-500 h-screen w-full'>
        <Layout>
          <div className='mt-10'>
            <Typography paragraph>
              Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
              ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
              elementum integer enim neque volutpat ac tincidunt. Ornare
              suspendisse sed nisi lacus sed viverra tellus. Purus sit amet
              volutpat consequat mauris. Elementum eu facilisis sed odio morbi.
              Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt
              ornare massa eget egestas purus viverra accumsan in. In hendrerit
              gravida rutrum quisque non tellus orci ac. Pellentesque nec nam
              aliquam sem et tortor. Habitant morbi tristique senectus et.
              Adipiscing elit duis tristique sollicitudin nibh sit. Ornare
              aenean euismod elementum nisi quis eleifend. Commodo viverra
              maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin
              aliquam ultrices sagittis orci a.
            </Typography>
          </div>
        </Layout>
      </div>
    </Fragment>
  );
};

export default Home;
