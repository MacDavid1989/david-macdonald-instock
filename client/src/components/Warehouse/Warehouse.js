import React from 'react';
import './Warehouse.scss'
import backArrow from '../../Assets/Icons/arrow_back-24px.svg'
import edit from '../../Assets/Icons/edit-24px.svg'
import editWhite from '../../Assets/Icons/edit-24px-white.svg'
import sort from '../../Assets/Icons/sort-24px.svg'
import chevron from '../../Assets/Icons/chevron_right-24px.svg'
import deleteOutline from '../../Assets/Icons/delete_outline-24px.svg'

function Warehouse() {
    return (
        <div className="warehouse">
            <section className="warehouse__banner">
                <div className="banner__header">
                    <img className="banner__arrow" src={backArrow} alt=""/>
                    <h1 className="banner__heading">King West</h1>
                </div>
                <button className="banner__button">
                    <img className="button__icon" src={editWhite} alt=""/>
                    <h3 className="button__text">EDIT</h3>
                </button>
            </section>
            <section className="warehouse__info">
                <div className="warehouse__address">
                    <h4 className="address__heading">WAREHOUSE ADDRESS:</h4>
                    <p className="address__street">469 King Street West</p>
                    <p className="address__city">Toronto, CAN</p>
                </div>
                <div className="warehouse__contact">
                    <div className="warehouse__contact-name">
                        <h4 className="title">CONTACT NAME:</h4>
                        <p className="name">Graeme Lyon</p>
                        <p className="position">Warehouse Manager</p>
                    </div>
                    <div className="warehouse__contact-info">
                        <h4 className="title">CONTACT INFORMATION:</h4>
                        <p className="number">+1 (647) 504-0911</p>
                        <p className="email">glyon@instock.com</p>
                    </div>
                </div>
            </section>
            <section className="warehouse__inventory">
                <table>
                    <thead>
                        <tr>
                            <th colSpan="1">INVENTORY ITEM<img src={sort} alt=""/></th>
                            <th colSpan="1">CATEGORY<img src={sort} alt=""/></th>
                            <th colSpan="1">STATUS<img src={sort} alt=""/></th>
                            <th colSpan="1">QTY<img src={sort} alt=""/></th>
                            <th colSpan="1">ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Television<img src={chevron} alt=""/></td>
                            <td>Electronics</td>
                            <td>IN STOCK</td>
                            <td>500</td>
                            <td><img src={deleteOutline} alt=""/><img src={edit} alt=""/></td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section className="warehouse__inventory-mobile">
                <div className="inventory__item">
                    <div className="item__name">
                        <h4 className="item__heading">INVENTORY ITEM</h4>
                        <div className="item__link">
                            <p className="item__item">TELEVISION</p>
                            <img className="item__icon" src={chevron} alt=""/>
                        </div>
                    </div>
                    <div className="item__status">
                        <h4 className="item__heading">STATUS</h4>
                        <p className="item__value">IN STOCK</p>
                    </div>
                </div>
                <div className="inventory__info">
                    <div className="item__category">
                        <h4 className="item__heading">CATEGORY</h4>
                        <p className="item__type">ELECTRONICS</p>
                    </div>
                    <div className="item__quantity">
                        <h4 className="item__heading">QTY</h4>
                        <p className="item__amount">500</p>
                    </div>
                </div>
                <div className="inventory__buttons">
                    <img className="inventory__delete" src={deleteOutline} alt=""/>
                    <img className="inventory__edit" src={edit} alt=""/>
                </div>
            </section>
        </div>
    );
}

export default Warehouse;