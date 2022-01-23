import React, { useState } from 'react';
import { useAuth } from '../../context/useAuthContext';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { SidebarData } from './SidebarData';

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

const SidebarMenu = styled.div`
  width: 10%;
  height: 100vh;
  background-color: #ffffff;
  position: relative;
  top: 0;
  transition: 0.6s;
`;

const MenuItems = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
  height: 90px;
  padding: 1rem 0 1.25rem;
`;

const MenuItemLinks = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 20px;
  text-decoration: none;
  color: #000000;
  &:hover {
    background-color: #ffffff;
    color: #000080;
    width: 100%;
    height: 45px;
    text-align: center;
    border-radius: 5px;
    margin: 0 2rem;
  }
`;
const Sidebar: React.FC = () => {
  return (
    <>
      <SidebarMenu>
        {SidebarData.map((item, index) => {
          return (
            <MenuItems key={index}>
              <MenuItemLinks to={item.path}>
                <span style={{ marginLeft: '16px' }}>{item.title}</span>
              </MenuItemLinks>
            </MenuItems>
          );
        })}
      </SidebarMenu>
    </>
  );
};

export { Sidebar };
