import { List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { PAGE_LIST } from '../../../AppRoutes';
import { findElement } from '../../../Helpers/arrayHelper';

const SideDrawerNavigation = () => {
  const [currentPath, setCurrentPath] = useState('/');
  const [title, setTitle] = useState('Portfolio');
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleChange = (page) => {
    setCurrentPath(page.path);
    setTitle(page.title);
    navigate(page.path);
  };

  useEffect(() => {
    document.title = title;
    return () => {
      document.title = 'Portfolio';
    };
  }, [title]);

  useEffect(() => {
    if (pathname != currentPath) {
      handleChange(findElement(PAGE_LIST, { path: pathname }, 'path'));
    }
  }, [pathname]);


  return (
    <List component="nav">
      {
        PAGE_LIST.map((page, idx) => {
          const isSelected = currentPath === page.path;
          return (
            <ListItemButton
              key={`${page.path}-${idx}`}
              selected={isSelected}
              onClick={() => handleChange(page)}
            >
              <ListItemIcon>
                {isSelected ? page?.selectedIcon : page?.icon}
              </ListItemIcon>
              <ListItemText primary={page.title} />
            </ListItemButton>
          );
        })
      }
    </List>
  );
};

export default SideDrawerNavigation;