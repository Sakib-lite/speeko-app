import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import DuoIcon from '@mui/icons-material/Duo';
import { Props } from '../../utils/types';
import {
  AppBar,
  Drawer,
  DrawerHeader,
  useStyles,
} from './../../utils/mui/styles';
import RoomList from '../Rooms/RoomList';
import HiddenColumn from '../SideBar/HiddenColumn';
import Header from './Header';
import Link from 'next/link';
import { useAppDispatch, useAppSelector} from '../store/hooks';
import { getUser } from '../store/auth/authReducer';
import InviteFriendModal from '../Modal/InviteFriendModal';
import { connectToSocketServer } from '../../utils/socket-client/socketConnections';

 const Layout: React.FC<Props> = ({ children }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState<boolean>(true);
  const dispatch = useAppDispatch();
const user= useAppSelector(state=>state.auth.user)
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    dispatch(getUser());
    if(user)connectToSocketServer(user)
  }, []);

  return (
    <Box sx={{ display: 'flex' }} className='bg-gray-300 min-h-screen'>
      {/* header starts */}
      <AppBar position='fixed' open={open} className='  bg-gray-200'>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            edge='start'
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <DuoIcon />
          </IconButton>
          <Link href='/' passHref>
            <Typography
              variant='h6'
              noWrap
              component='div'
              className='cursor-pointer text-gray-800'
            >
              Speeko
            </Typography>
          </Link>
          <Header />
        </Toolbar>
      </AppBar>
      {/* header ends */}

      {/* drawer starts */}
      <Drawer
        variant='permanent'
        open={open}
        classes={{ paper: classes.paper }}
      >
        <DrawerHeader>
          <div className='mx-auto'>
            <IconButton className='text-gray-700'>
              {' '}
              <DuoIcon />
            </IconButton>
          </div>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <div className='flex h-screen'>
          <div className=''>
            <RoomList open={open} />
            <Divider />
          </div>

          <div className=' w-full bg-gray-200 '>
            <HiddenColumn />
          </div>
        </div>
      </Drawer>
      {/* drawer ends */}
      <Box component='main' className='mx-auto'>
        <Toolbar />
        {/* <DrawerHeader /> */}
        {children}
   { user &&    <InviteFriendModal/>}
      </Box>
    </Box>
  );
};

export default  Layout