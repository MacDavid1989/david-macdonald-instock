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
                    <form>
                        <div>
                            <h2>Item Details</h2>
                            <div>
                                <label>Item Name</label>
                                <input/>
                            </div>
                            <div>
                                <label>Description</label>
                                <textarea></textarea>
                            </div>
                            <div>
                                <label>Category</label>
                                <select>
                                    <option>Electronics</option>
                                </select>
                            </div>
                        </div>
                        <div>
                        <h2>Item Availability</h2>
                            <div>
                                <label>Status</label>
                                <div>
                                    <div>
                                        <input type="radio"/>
                                        <label>In Stock</label>
                                    </div>
                                    <div>
                                        <input type="radio"/>
                                        <label>Out of Stock</label>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label>Warehouse</label>
                                <select>
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