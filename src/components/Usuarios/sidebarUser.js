import React from 'react';
import * as AiIcons from 'react-icons/ai';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },

  {
    title: 'Shop',
    path: '/Shop',
    icon: <AiIcons.AiFillShopping />,
    cName: 'nav-text'
  },
  
  {
    title: 'Settings',
    path: '/settings',
    icon: <AiIcons.AiTwotoneSetting />,
    cName: 'nav-text'
  },
  {
    title: 'LogOut',
    path: '/logout',
    icon: <AiIcons.AiOutlineUserDelete />,
    cName: 'nav-text'
  },
  
  
];