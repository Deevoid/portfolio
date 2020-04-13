import React from 'react';
import * as ni from './NavItem';

//theme
const themeMap = {
    dark: "light",
    light: "dark",
  };
  let tmp;
  const theme = localStorage.getItem('theme')
    || (tmp = Object.keys(themeMap)[0],
        localStorage.setItem('theme', tmp),
        tmp);
  const bodyClass = document.body.classList;
  bodyClass.add(theme);
  function toggleTheme() {
    const current = localStorage.getItem('theme');
    const next = themeMap[current];
    bodyClass.replace(current, next);
    localStorage.setItem('theme', next);
  }
  //theme
  
  
export default function Nav(){ 
    return (
        <nav className="navbar">
        <ul className="navbar-nav">
            <ni.navLOGO />
            <ni.default title='About me' iClass='fas fa-user' isActive='active' />
            <ni.default title='Skills' iClass='fas fa-user-graduate' />
            <ni.default title='Projects' iClass='fas fa-tasks' />
            <ni.default title='Contact' iClass='fas fa-phone-square-alt' />
            <ni.navTheme fn={toggleTheme} title='Themify' />
        </ul>
    </nav>
    )
}
