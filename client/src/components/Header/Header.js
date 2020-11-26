import React from "react";
import "./Header.scss";

import logo from "../../Assets/Logo/InStock-Logo.svg";

const header = () => {
  return (
    <header className="header">
        <img className="header__logo" src={logo} alt="logo" />
      <div className="header__wrapper">
        <button className="header__btn header__btn--active">Warehouses</button>
        <button className="header__btn">Inventory</button>
      </div>
    </header>
  );
};

export default header;
