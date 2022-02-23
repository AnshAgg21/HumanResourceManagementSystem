import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
// import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SearchIcon from '@mui/icons-material/Search';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { InputBase, ListItemButton, Collapse, Typography, Divider } from '@mui/material';
import './index.module.scss'
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';

const drawerWidth = 240;
const openedMixin = (theme) => ({
  width: drawerWidth,
  backgroundColor: '#4e73df',
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  backgroundColor: '#4e73df',
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  display: 'flex',
  justifyContent: 'space-between',
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    display: 'flex',
    justifyContent: 'space-between',
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    backgroundColor: '#224abe',
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);


function SideNav({links,...props}) {
  const navigate = useNavigate();
  
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [collapseActive, setcollapseActive] = useState('Dashboard')

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar sx={{ backgroundColor: 'white' }} position="fixed" open={open}>
        <Toolbar sx={{ display: 'flex', justfyContent: 'space-between'}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: '36px',
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1, backgroundColor: 'white', borderRadius: '50px', maxWidth: '30%', p: '5px 10px'}}
            placeholder="Search for..."
            className="searchInput"
          />
          <IconButton type="submit" className='searchIcon' sx={{ p: '10px', backgroundColor: '#4e73df' }} aria-label="search">
            <SearchIcon sx={{ color: 'white' }} />
          </IconButton>
          <div style={{ display: 'flex' }}>
            <IconButton>
              <NotificationsIcon />
            </IconButton>
            <Divider />
            <div style={{ display: 'flex' }}>
              <IconButton>
                <PersonIcon />
              </IconButton>
              <Typography color="black">Ansh Aggarwal</Typography>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer style={{ backgroundColor: '#224abe' }} variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {links.map((data, index) => (
            data.collapsible === true ? (
              <>
                <ListItemButton key={data.main} onClick={() => {
                  collapseActive === data.main ? (setcollapseActive('')) : (setcollapseActive(data.main))
                }}>
                  <ListItemIcon>
                    {data.icon}
                  </ListItemIcon>
                  <ListItemText primary={data.main} />
                  {collapseActive === data.main ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse sx={{ backgroundColor: 'white' }} in={collapseActive === data.main} timeout="auto" unmountOnExit>
                  {data.subhead.map((subhead, idx) => (
                      <ListItem onClick={() => navigate(subhead.url,{replace:true})} key={subhead.title} button sx={{ pl: 4 }}>
                        {/* <ListItemIcon>
                          <StarBorder />
                        </ListItemIcon> */}
                        <ListItemText primary={subhead.title} />
                      </ListItem>
                  ))}
                </Collapse>
              </>
            ) : (
              <ListItem button onClick={() => navigate(data.url,{replace: true})} key={data.main}>
              <ListItemIcon>
                {data.icon}
              </ListItemIcon>
              <ListItemText primary={data.main} />
            </ListItem>
            )
          ))}
        </List>
        <Divider />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {props.children}
      </Box>
    </Box>
  );
}

export default SideNav