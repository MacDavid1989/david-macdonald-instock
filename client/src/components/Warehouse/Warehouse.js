import React from 'react';
import './Warehouse.scss'
import backArrow from '../../Assets/Icons/arrow_back-24px.svg'
import edit from '../../Assets/Icons/edit-24px.svg'
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
                <img className="button__icon" src={edit} alt=""/>
                <h3 className="button__text">EDIT</h3>
            </button>
        </section>
        <section>
            <div>
                <h4>WAREHOUSE ADDRESS:</h4>
                <p>469 King Street West</p>
                <p>Toronto, CAN</p>
            </div>
            <div>
                <h4>CONTACT NAME:</h4>
                <p>Graeme Lyon</p>
                <p>Warehouse Manager</p>
                <h4>CONTACT INFORMATION:</h4>
                <p>+1 (647) 504-0911</p>
                <p>glyon@instock.com</p>
            </div>
        </section>
        <section>
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
        </div>
    );
}

export default Warehouse;