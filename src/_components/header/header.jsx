// create header component react
import React from 'react';
import Button from '../button/button';
import './header.css';
function Header({name , onLogoutClick , onSettingsClick }) {
    return <div className="rt__header--container">
        <h1>Hello {name}!</h1>
        <div className='rt__header-actions--container'>
            <Button name="Logout" onClick={onLogoutClick}></Button>
            <Button name="Settings" onClick={onSettingsClick}></Button>
        </div>
    </div>;
  }

  export default Header;