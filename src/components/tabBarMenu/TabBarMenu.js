import React from 'react';
import { NavLink } from 'react-router-dom';
import './TabBarMenu.css';

function TabBarMenu() {
  return (
      <nav className="tab-bar">
        <ul>
          <li>
            <NavLink className={(navData) => navData.isActive ? 'active' : '' } to="/">
              Vandaag
            </NavLink>
          </li>
          <li>
            <NavLink className={(navData) => navData.isActive ? 'active' : '' } to="komende-week">
              Komende week
            </NavLink>
          </li>
        </ul>
      </nav>
  );
}

export default TabBarMenu;