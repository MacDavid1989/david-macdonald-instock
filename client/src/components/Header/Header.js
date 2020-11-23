import React from 'react';
import './header.css';

import logo from '../../Assets/Logo/InStock-Logo_1x.png'

const header = () => {
    return (
        <header className="header">
            <img src={logo} alt="logo" />
            <div>
                <button className="header__btn header__btn--active">Warehouses</button>
                <button className="header__btn">Inventory</button>
            </div>
        </header>
    );
}

export default header;
