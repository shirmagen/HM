import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import SongForm from '../Forms/SongForm'

export default function NewWidowDrawer() {
    const [state, setState] = React.useState({
      left: false,
    });
  
    const toggleDrawer = (anchor, open) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
  
      setState({ ...state, [anchor]: open });
    };
  
    const list = (anchor) => (
      <div role="presentation">
       <Button onClick={toggleDrawer(anchor, false)} onKeyDown={toggleDrawer(anchor, false)}>X</Button>
       <h1>Create Song</h1>
       <Divider />
       <SongForm></SongForm>
        
      </div>
    );
  
    return (
      <div>
            <Button onClick={toggleDrawer('left', true)} variant="contained" color ={"primary"}>shir</Button>
            <Drawer open={state['left']} onClose={toggleDrawer('left', false)}>
              {list('left')}
            </Drawer>
      </div>
    );
  }
  