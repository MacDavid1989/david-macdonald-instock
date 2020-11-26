import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './ItemEdit.scss'
import backArrow from '../../Assets/Icons/arrow_back-24px.svg'
class ItemEdit extends Component {
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
               <div className="itemEdit">
                    <section className="itemEdit__banner">
                            <Link to={`/warehouse/${this.props.match.params.warehouseId}/inventory/${this.props.match.params.itemId}`}>
                                <img className="banner__arrow" src={backArrow} alt=""/>
                            </Link>
                            <h1 className="banner__heading">Edit Inventory Item</h1>
                    </section>
                    <form className="itemEdit__form">
                        <div className="itemEdit__details">
                            <h2 className="itemEdit__details-title">Item Details</h2>
                            <div className="itemEdit__details-name">
                                <label className="itemEdit__details-label">Item Name</label>
                                <input id="itemName" name="itemName" type="text" placeholder={`${!!this.state.item&&this.state.item.itemName}`} required/>
                            </div>
                            <div>
                                <label className="itemEdit__details-label">Description</label>
                                <textarea id="itemDescription" name="itemDescription"></textarea>
                            </div>
                            <div>
                                <label className="itemEdit__details-label">Category</label>
                                <select id="itemCategory" name="itemCategory">
                                    <option>Electronics</option>
                                </select>
                            </div>
                        </div>
                        <div className="itemEdit__availability">
                            <h2 className="itemEdit__availability-title">Item Availability</h2>
                            <div>
                                <label className="itemEdit__availability-label">Status</label>
                                <div>
                                    <div>
                                        <input id="itemStatus" name="itemStatus" type="radio"/>
                                        <label className="itemEdit__availability-radio">In Stock</label>
                                    </div>
                                    <div>
                                        <input id="itemStatus" name="itemStatus" type="radio"/>
                                        <label className="itemEdit__availability-radio">Out of Stock</label>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label className="itemEdit__availability-label">Warehouse</label>
                                <select id="itemWarehouse" name="itemWarehouse">
                                    <option>Manhattan</option>
                                </select>
                            </div>
                        </div>
                    </form> 
                </div>
            </>
        );
    }
}

export default ItemEdit;