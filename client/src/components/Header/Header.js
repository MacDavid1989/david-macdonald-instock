import React from 'react';
import './Header.scss';

import logo from '../../assets/logo/inStock-logo.svg';
import {Link, NavLink } from 'react-router-dom';

const header = () => {
  return (
    <header className="header">
        <Link to="/">
          <img className="header__logo" src={logo} alt="logo" />
        </Link>
      <div className="header__wrapper">
        <NavLink to="/warehouse" className="header__btn"
        activeStyle={{
          backgroundColor: "#13182C"
        }} >Warehouses</NavLink>
        <NavLink to="/inventory" className="header__btn"
        activeStyle= {{
          backgroundColor: "#13182C"
        }} >Inventory</NavLink>
      </div>
    </header>
  );
};

export default header;
