import React from 'react';
import { NavLink } from 'react-router-dom';
import { wrapper1024 } from '../../lib/wrappers.styles';
import { header, h1, navItems, navLink } from './NavMain.styles';

const NavMain = () => (
  <header className={header}>
    <div className={wrapper1024}>
      <div className={navItems}>
        <h1 className={h1}>Behance User Search</h1>
        <NavLink className={navLink} to="/" exact>
          Search
        </NavLink>
      </div>
    </div>
  </header>
);

export default NavMain;
