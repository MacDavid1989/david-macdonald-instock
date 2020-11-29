import React from "react";
import { Link } from "react-router-dom";
import search from '../../assets/icons/search-24px.svg'
import './InventoryNav.scss';

const InventoryNav = () => {
  return (
    <nav className="navInv">
      <div className="navInv__left">
        <h1 className="navInv__title">Inventory</h1>
      </div>
      <div className="navInv__middle">
        <div className="navInv__search-wrapper">
          <input className="navInv__search" placeholder="Search..." />
          <img src={search} className="navInv__search-icon" alt="search icon" />
        </div>
      </div>
      <div className="navInv__right">
          <Link to="/warehouse/:warehouseId/inventory/add" className="navInv__button">
              + Add New Item
          </Link>
      </div>

    </nav>
  );
};

export default InventoryNav;