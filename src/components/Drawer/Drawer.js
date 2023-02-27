import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ReorderIcon from '@material-ui/icons/Reorder';
import ListItemText from '@material-ui/core/ListItemText';


const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function SwipeableTemDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
          <>
          <h3 style = {{textAlign: "center", margin: "1em 0"}}>Welcome!</h3>
        {['About Me', 'My Skills', 'My Projects', 'Contact Me'].map((text, index) => (
          <a href= {`#${text}`}  style = {{textDecoration: "none", color:"black", margin:"0.3em 0"}} ><ListItem button key={text}>
        {/* <ListItemIcon>{index % 2 === 0 ? "inboxicon" : "mailicon"}</ListItemIcon> */}
            <ListItemText primary={text} />
          </ListItem>
          < Divider />
          </a>
          
        ))}
      
        </>
      </List>
      {/* <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? "inbox" : "mail"}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
    </div>
  );

  return (
    <div>
  
        <React.Fragment>
          <Button onClick={toggleDrawer('right', true)}><ReorderIcon className = "reoder" style = {{color:"white", fontSize: "2.5rem", margin: "0 0.5em"}}/></Button>
          <SwipeableDrawer
            anchor='right'
            open={state['right'
            ]}
            onClose={toggleDrawer('right', false)}
            onOpen={toggleDrawer('right', true)}
          >
            {list('right')}
          </SwipeableDrawer>
        </React.Fragment>
      
    </div>
  );
}
