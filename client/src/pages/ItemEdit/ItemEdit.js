import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './ItemEdit.scss'
import backArrow from '../../assets/icons/arrow_back-24px.svg'
class ItemEdit extends Component {
    state = {
        name: "",
        description: "",
        category: "",
        categoryList: ["Accessories", "Apparel", "Electronics", "Gear", "Health"],
        status: "",
        check: true,
        quantity: "",
        warehouse: "",
        warehouseList: [],
        warehouseNameList: []
    }

    getItem = () => {
        axios.get(`http://localhost:8080/warehouse/${this.props.match.params.warehouseId}/inventory/${this.props.match.params.itemId}`)
        .then(res=>{
            this.setState({
                name: res.data.inventoryItem[0].itemName,
                description: res.data.inventoryItem[0].description,
                category: res.data.inventoryItem[0].category,
                status: res.data.inventoryItem[0].status,
                quantity: res.data.inventoryItem[0].quantity,
                warehouse: res.data.inventoryItem[0].warehouseName,
            })
            if(res.data.inventoryItem[0].status.toLowerCase() === 'out of stock'){
                this.setState({
                    check: false,
                })
            } else {
                this.setState({
                    check: true,
                })
            }
        })
        .catch(console.error)
    }

    getAllWarehouses = () => {
        axios.get(`http://localhost:8080/warehouse`)
        .then(res=>{
            this.setState({
                warehouseNameList: res.data.map(warehouse=> warehouse.name).sort(),
                warehouseList: res.data
            })
        })
        .catch(console.error)
    }

    componentDidMount(){
        this.getItem();
        this.getAllWarehouses();
    }

    handleName = (e) => {
        this.setState({ 
            name: e.target.value 
        });
    };
    
    handleDescription = (e) => {
        this.setState({ 
            description: e.target.value 
        });
    };
    
    handleCategory = (e) => {
        this.setState({ 
            category: e.target.value 
        });
    };
    
    handleStatus = (e) => {
        const bool = (e.target.value === "true")
        if(bool){
            this.setState({status: "In Stock"})
        } else {
            this.setState({status: "Out of Stock"})
        }
        this.setState({
          check: bool
        });
    };
    
    handleWarehouse = (e) => {
        this.setState({ warehouse: e.target.value });
    };

    handleReset = () => {
        this.getItem()
    }
    
    handleSubmit = (e) => {
        e.preventDefault();

        const warehouseID = this.state.warehouseList.find(warehouse => warehouse.name === this.state.warehouse).id

        const item = {
            category: this.state.category,
            description: this.state.description,
            id: this.props.match.params.itemId,
            itemName: this.state.name,
            quantity: this.state.quantity,
            status: this.state.status,
            warehouseID: warehouseID,
            warehouseName: this.state.warehouse
        }

        // axios.put(`http://localhost:8080/warehouse/${this.props.match.params.warehouseId}/inventory/${this.props.match.params.itemId}/edit`, item)
        // .then(res => {
        //     this.props.history.push(`http://localhost:8080/warehouse/${this.props.match.params.warehouseId}/inventory/${this.props.match.params.itemId}`)
        // })
        // .catch(console.error)

        this.props.history.push(`http://localhost:8080/warehouse/${warehouseID}/inventory/${this.props.match.params.itemId}`)
    };

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
                    <form className="itemEdit__form" onSubmit={this.handleSubmit}>
                        <div className="itemEdit__details">
                            <h2 className="itemEdit__details-title">Item Details</h2>
                            <div className="itemEdit__details-name">
                                <label className="itemEdit__details-label">Item Name</label>
                                <input id="itemName" name="itemName" type="text" placeholder="Item Name" value={this.state.name} onChange={this.handleName}/>
                            </div>
                            <div className="itemEdit__details-description">
                                <label className="itemEdit__details-label">Description</label>
                                <textarea id="itemDescription" name="itemDescription" placeholder="Description" value={this.state.description} onChange={this.handleDescription}></textarea>
                            </div>
                            <div className="itemEdit__details-category">
                                <label className="itemEdit__details-label">Category</label>
                                <select id="itemCategory" name="itemCategory" value={this.state.category} onChange={this.handleCategory}>
                                {this.state.categoryList.map((category, i) => (
                                    <option key={i} value={category}>{category}</option>
                                ))}
                                </select>
                            </div>
                        </div>
                        <div className="itemEdit__availability">
                            <h2 className="itemEdit__availability-title">Item Availability</h2>
                            <div className="itemEdit__availability-status">
                                <label className="itemEdit__availability-label">Status</label>
                                <div className="status__wrapper">
                                    <div className="status__in">
                                        <input id="itemStatus" name="itemStatus" type="radio" checked={this.state.check} value="true" onChange={this.handleStatus}/>
                                        <label className={!!this.state.status&&this.state.status.toLowerCase() === "in stock" ? "status__in-radio checked" : "status__in-radio"}>In Stock</label>
                                    </div>
                                    <div className="status__out">
                                        <input id="itemStatus" name="itemStatus" type="radio" checked={!this.state.check} value="false" onChange={this.handleStatus}/>
                                        <label className={!!this.state.status&&this.state.status.toLowerCase() === "out of stock" ? "status__out-radio checked" : "status__out-radio"}>Out of Stock</label>
                                    </div>
                                </div>
                            </div>
                            <div className="itemEdit__availability-warehouse">
                                <label className="itemEdit__availability-label">Warehouse</label>
                                <select id="itemWarehouse" name="itemWarehouse" value={this.state.warehouse} onChange={this.handleWarehouse}>
                                {this.state.warehouseNameList.map((warehouse, i) => (
                                    <option key={i} value={warehouse}>{warehouse}</option>
                                ))}
                                </select>
                            </div>
                        </div>
                        <div className="itemEdit__buttons">
                            <button className="itemEdit__cancel" type="reset" onClick={this.handleReset}>Cancel</button>
                            <button className="itemEdit__save" type="submit">Save</button>
                        </div>
                    </form> 
                </div>
            </>
        );
    }
}

export default ItemEdit;