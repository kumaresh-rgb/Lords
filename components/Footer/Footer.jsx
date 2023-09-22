"use client"

import Link from 'next/link';

import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';


import { BsBookmarkCheck } from 'react-icons/bs';
import { ImClipboard } from 'react-icons/im';
import { MdOutlineDashboard } from 'react-icons/md';
import { HiOutlinePresentationChartBar } from 'react-icons/hi';
import { PiSuitcaseSimpleFill } from 'react-icons/pi';

export default function BottomNavWithDrawer() {
  const [value, setValue] = React.useState(0);
  const [isDrawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setDrawerOpen(open);
  };

  const handleBottomNavClick = (index) => {
    setValue(index);
    setDrawerOpen(true); // Open the drawer when a bottom navigation item is clicked
  };
  const bottomNavItems = [
    { label: <p className='font-semibold hover:text-blue-500'>Recents</p>, icon: <MdOutlineDashboard className="text-3xl hover:text-blue-500 "/> },
    { label: <p className='font-semibold hover:text-blue-500 '>Memorise</p>, icon: <ImClipboard  className="text-2xl hover:text-blue-500" /> },
    { label: <p className='font-semibold hover:text-blue-500'>Board</p>, icon: <HiOutlinePresentationChartBar  className="text-2xl hover:text-blue-500" /> },
    { label: <p className='font-semibold hover:text-blue-500'>Saved</p>, icon: <Link href="/Memorise"> <BsBookmarkCheck  className="text-2xl hover:text-blue-500" /></Link>  },
    { label: <p className='font-semibold hover:text-blue-500'>Unplanned</p>, icon: <PiSuitcaseSimpleFill  className="text-2xl hover:text-blue-500" /> },
  ];

  const drawerContent = (
    <Box >
      {/* Additional lists */}
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <footer className=" sticky container mx-auto bg">
      <Box>
        <Drawer
          anchor="bottom"
          open={isDrawerOpen}
          onClose={toggleDrawer(false)}
        >
          {drawerContent}
        </Drawer>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            handleBottomNavClick(newValue);
          }}
        >
          {bottomNavItems.map((item, index) => (
            <BottomNavigationAction
              key={item.label}
              label={item.label}
              icon={item.icon}
            />
          ))}
        </BottomNavigation>
      </Box>
    </footer>
  );
}
