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
                                <input id="itemName" name="itemName" type="text" placeholder={`${!!this.state.item&&this.state.item.itemName}`}/>
                            </div>
                            <div className="itemEdit__details-description">
                                <label className="itemEdit__details-label">Description</label>
                                <textarea id="itemDescription" name="itemDescription" placeholder={`${!!this.state.item&&this.state.item.description}`}></textarea>
                            </div>
                            <div className="itemEdit__details-category">
                                <label className="itemEdit__details-label">Category</label>
                                <select id="itemCategory" name="itemCategory">
                                    <option>{!!this.state.item&&this.state.item.category}</option>
                                </select>
                            </div>
                        </div>
                        <div className="itemEdit__availability">
                            <h2 className="itemEdit__availability-title">Item Availability</h2>
                            <div className="itemEdit__availability-status">
                                <label className="itemEdit__availability-label">Status</label>
                                <div>
                                    <div>
                                        <input id="itemStatus" name="itemStatus" type="radio"/>
                                        <label className="itemEdit__availability-radio checked">In Stock</label>
                                    </div>
                                    <div>
                                        <input id="itemStatus" name="itemStatus" type="radio"/>
                                        <label className="itemEdit__availability-radio checked">Out of Stock</label>
                                    </div>
                                </div>
                            </div>
                            <div className="itemEdit__availability-warehouse">
                                <label className="itemEdit__availability-label">Warehouse</label>
                                <select id="itemWarehouse" name="itemWarehouse">
                                    <option>{!!this.state.item&&this.state.item.warehouseName}</option>
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