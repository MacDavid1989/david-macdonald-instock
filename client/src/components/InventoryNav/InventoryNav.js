import React from "react";
import { Link } from "react-router-dom";
import search from '../../Assets/Icons/search-24px.svg'
import './InventoryNav.scss';

const InventoryNav = () => {
  return (
    <nav className="nav">
      <div className="nav__left">
        <h1 className="nav__title">Inventory</h1>
      </div>
      <div className="nav__middle">
        <div className="nav__search-wrapper">
          <input className="nav__search" placeholder="Search..." />
          <img src={search} className="nav__search-icon" alt="search icon" />
        </div>
      </div>
      <div className="nav__right">
          <Link to="/warehouse/:warehouseId/inventory/add" className="nav__button">
              + Add New Item
          </Link>
      </div>

    </nav>
  );
};

export default InventoryNav;