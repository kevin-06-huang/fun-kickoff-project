import React, { useState } from 'react';
import { useAuth } from '../../context/useAuthContext';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import useStyles from './useStyles';

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Box,
} from '@mui/material';

const Sidebar: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.sidebarMenu}>
        {SidebarData.map((item, index) => {
          return (
            <li key={index} className={classes.menuItems}>
              <Link to={item.path} className={classes.menuItemLinks}>
                <span>{item.title}</span>
              </Link>
            </li>
          );
        })}
      </div>
    </>
  );
};

export { Sidebar };
