import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import backArrow from '../../Assets/Icons/arrow_back-24px.svg'
import editWhite from '../../Assets/Icons/edit-24px-white.svg'

class ItemDetails extends Component {
    state ={
        item: null
    }

    componentDidMount(){

        axios.get(`http://localhost:8080/warehouse/${this.props.match.params.warehouseId}/inventory/${this.props.match.params.itemId}`)
        .then(res=>{
            this.setState({item: res.data.inventoryItem[0]})
        })
        .catch(console.error)
    }

    render() {
        return (
            <>
                <div className="item">
                    <section className="item__banner">
                        <div className="item__header">
                            <Link to={`/warehouse/${this.props.match.params.warehouseId}/inventory`}>
                                <img className="banner__arrow" src={backArrow} alt=""/>
                            </Link>
                            <h1 className="banner__heading">{!!this.state.item&&this.state.item.itemName}</h1>
                        </div>
                        <Link to={`/warehouse/${this.props.match.params.warehouseId}/inventory/${this.props.match.params.itemId}/edit`}>
                            <button className="banner__button">
                                <img className="button__icon" src={editWhite} alt=""/>
                                <h3 className="button__text">Edit</h3>
                            </button>
                        </Link>
                    </section>
                    <section className="item__details">
                        <div className="item__about">
                            <div className="item__description">
                                <h4 className="description__heading">ITEM DESCRIPTION:</h4>
                                <p className="description__text">{!!this.state.item&&this.state.item.description}</p>
                            </div>
                            <div className="item__category">
                                <h4 className="category__heading">CATEGORY:</h4>
                                <p className="category__text">{!!this.state.item&&this.state.item.category}</p>
                            </div>
                        </div>
                        <div className="item__info">
                            <div className="item__stock">
                                <div className="item__status">
                                    <h4 className="item__heading">STATUS:</h4>
                                    <p className={!!this.state.item&&this.state.item.status.toUpperCase() === 'IN STOCK' ? "item__value item__value--in" : "item__value item__value--out"}>{!!this.state.item&&this.state.item.status}</p>
                                </div>
                                <div className="item__quantity">
                                    <h4 className="item__heading">QUANTITY:</h4>
                                    <p className="item__text">{!!this.state.item&&this.state.item.quantity}</p>
                                </div>
                            </div>
                            <div>
                            <div className="item__warehouse">
                                    <h4 className="warehouse__heading">WAREHOUSE:</h4>
                                    <p className="warehouse__text">{!!this.state.item&&this.state.item.warehouseName}</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>   
            </>
        );
    }
}

export default ItemDetails;