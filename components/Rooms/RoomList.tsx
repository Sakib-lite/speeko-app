import React,{Fragment} from "react"
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import { RoomListProps } from "../../utils/types";


const RoomList:React.FC<RoomListProps> =({open}) => {
    
  return (
    <Fragment>
                 <List>
              {/* icons starts */}
              <ListItem disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                  sx={{
                    minHeight: 10,
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 1 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
              {/* icons ends */}
            </List>
    </Fragment>
  )
};

export default RoomList;
