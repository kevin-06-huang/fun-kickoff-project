import React, { useState } from 'react';
import { useAuth } from '../../context/useAuthContext';
import { Link } from 'react-router-dom'

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
    return (
        <MenuItem>
            <span style={{marginLeft: '16px'}}>test</span>
        </MenuItem>
    )
}

export default Sidebar