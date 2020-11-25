import React, { Component } from 'react';
import axios from 'axios';
import './Warehouse.scss'
import backArrow from '../../Assets/Icons/arrow_back-24px.svg'
import edit from '../../Assets/Icons/edit-24px.svg'
import editWhite from '../../Assets/Icons/edit-24px-white.svg'
import sort from '../../Assets/Icons/sort-24px.svg'
import chevron from '../../Assets/Icons/chevron_right-24px.svg'
import deleteOutline from '../../Assets/Icons/delete_outline-24px.svg'


class Warehouse extends Component {

    state ={
        warehouse: null,
        inventory: null
    }

    componentDidMount(){
        axios.get('http://localhost:8080/warehouse/2922c286-16cd-4d43-ab98-c79f698aeab0')
        .then(res=>{
            this.setState({warehouse: res.data.warehouse ,inventory: res.data.inventory})
        })
        .catch(console.error)
    }

    render() {
        return (
            <div className="warehouse">
            <section className="warehouse__banner">
                <div className="banner__header">
                    <img className="banner__arrow" src={backArrow} alt=""/>
                    <h1 className="banner__heading">{!!this.state.warehouse&&this.state.warehouse.name}</h1>
                </div>
                <button className="banner__button">
                    <img className="button__icon" src={editWhite} alt=""/>
                    <h3 className="button__text">Edit</h3>
                </button>
            </section>
            <section className="warehouse__info">
                <div className="warehouse__address">
                    <h4 className="address__heading">WAREHOUSE ADDRESS:</h4>
                    <p className="address__street">{!!this.state.warehouse&&this.state.warehouse.address}</p>
                    <p className="address__city">{!!this.state.warehouse&&(`${this.state.warehouse.city}, ${this.state.warehouse.country}`)}</p>
                </div>
                <div className="warehouse__contact">
                    <div className="warehouse__contact-name">
                        <h4 className="title">CONTACT NAME:</h4>
                        <p className="name">{!!this.state.warehouse&&this.state.warehouse.contact.name}</p>
                        <p className="position">{!!this.state.warehouse&&this.state.warehouse.contact.position}</p>
                    </div>
                    <div className="warehouse__contact-info">
                        <h4 className="title">CONTACT INFORMATION:</h4>
                        <p className="number">{!!this.state.warehouse&&this.state.warehouse.contact.phone}</p>
                        <p className="email">{!!this.state.warehouse&&this.state.warehouse.contact.email}</p>
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
                        {!!this.state.inventory&&this.state.inventory.map(item => {
                            return ( 
                                <tr className="inventory" key={item.id}>
                                    <td className="item">{item.itemName}<img src={chevron} alt=""/></td>
                                    <td className="type">{item.category}</td>
                                    <td className={item.status.toUpperCase() === 'IN STOCK' ? "value value__in" : "value value__out"}>{item.status.toUpperCase()}</td>
                                    <td className="amount">{item.quantity}</td>
                                    <td><img src={deleteOutline} alt=""/><img src={edit} alt=""/></td>
                                </tr>
                            )
                        })}
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
            {!!this.state.inventory&&this.state.inventory.map(item => {
                            return ( 
                                <div className="inventory" key={item.id}>
                                <div className="inventory__item">
                                    <div className="item__name">
                                        <h4 className="heading">INVENTORY ITEM</h4>
                                        <div className="link">
                                            <p className="item">{item.itemName}</p>
                                            <img className="icon" src={chevron} alt=""/>
                                        </div>
                                    </div>
                                    <div className="item__status">
                                        <h4 className="heading">STATUS</h4>
                                        <p className={item.status.toUpperCase() === 'IN STOCK' ? "value value__in" : "value value__out"}>{item.status.toUpperCase()}</p>
                                    </div>
                                </div>
                                <div className="inventory__info">
                                    <div className="item__category">
                                        <h4 className="heading">CATEGORY</h4>
                                        <p className="type">{item.category}</p>
                                    </div>
                                    <div className="item__quantity">
                                        <h4 className="heading">QTY</h4>
                                        <p className="amount">{item.quantity}</p>
                                    </div>
                                </div>
                                <div className="inventory__buttons">
                                    <img className="inventory__delete" src={deleteOutline} alt=""/>
                                    <img className="inventory__edit" src={edit} alt=""/>
                                </div>
                                </div>
                            )
                        })}
                        
            </section>
        </div>
        );
    }
}

export default Warehouse;