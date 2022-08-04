import * as React from 'react';
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

const Layout: React.FC<Props> = ({ children }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState<boolean>(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      {/* header starts */}
      <AppBar position='fixed' open={open} className='  bg-gray-400'>
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
          <Typography variant='h6' noWrap component='div'>
            Speeko
          </Typography>
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

          <div className=' w-full bg-gray-500 '></div>
        </div>
      </Drawer>
      {/* drawer ends */}
      <Box component='main'>
        <Toolbar />
        {/* <DrawerHeader /> */}
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
