import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import { Divider, Drawer, Grid, Typography } from '@material-ui/core';
import {Link} from 'react-router-dom'
import logo from '../../images/logo.png'

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
          <ListItem key={'Learn to swim'} disablePadding>
            <ListItemButton>
              <ListItemText primary={'Learn to swim'} />
            </ListItemButton>
          </ListItem>
          <Divider/>
          <ListItem key={'Contact us'} disablePadding>
            <ListItemButton>
              <ListItemText primary={'Contact us'} />
            </ListItemButton>
          </ListItem>
      </List>
    </Box>
  );

  return (
    <div style={{padding:'10px', display:'flex',justifyContent:'space-between'}}>
                <Link  to='/'><img src={logo}  style={{height:'50px',width:'60px'}}/> </Link>
                <React.Fragment key={'right'}>
                    <MenuIcon style={{color:'rgb(55, 77, 154)',fontSize:'36px',paddingTop:'6px'}}  onClick={toggleDrawer('right', true)}/>
                    <Drawer
                        anchor={'right'}
                        open={state['right']}
                        onClose={toggleDrawer('right', false)}
                        onOpen={toggleDrawer('right', true)}
                    >
                        {list('right')}
                    </Drawer>
                </React.Fragment>
    </div>
  );
}