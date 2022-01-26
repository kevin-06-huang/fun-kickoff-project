import React from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import useStyles from './useStyles';
import Button from '@mui/material/Button';

interface Props {
  setView: (arg0: string) => void;
}
const Sidebar: React.FC<Props> = (props) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.sidebarMenu}>
        {SidebarData.map((item, index) => {
          return (
            <li key={index} className={classes.menuItems}>
              <Button
                color="info"
                style={{ backgroundColor: 'transparent' }}
                className={classes.menuItemLinks}
                onClick={() => props.setView(item.component)}
              >
                {item.title}
              </Button>
            </li>
          );
        })}
      </div>
    </>
  );
};

export { Sidebar };
