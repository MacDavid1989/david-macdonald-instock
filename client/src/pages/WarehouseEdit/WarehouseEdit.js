// <<<<<<<<<< IMPORTS >>>>>>>>>> \\

import React, { Component } from 'react';
import BackArrow from '../../assets/icons/arrow_back-24px.svg';
import './WarehouseEdit.scss';
import axios from 'axios';


const API_URL = process.env.REACT_APP_API_URL;

// <<<<<<<<<< CLASS COMPONENT FUNCTION >>>>>>>>>> \\

class EditWarehouse extends Component {
    state  = {
        address: "",
        city: "",
        contact: {
            email: "",
            name: "",
            phone: "",
            position: ""
        },
        country: "",
        id: "",
        name: "",
    };

    componentDidMount() {
        axios
        .get(`${API_URL}/warehouse/${this.props.match.params.warehouseId}`)
        .then((res) => {
            this.setState({
                address: res.data.warehouse.address,
                city: res.data.warehouse.city,
                contact: {
                    email: res.data.warehouse.contact.email,
                    name:res.data.warehouse.contact.name,
                    phone:res.data.warehouse.contact.phone,
                    position: res.data.warehouse.contact.position
                },
                country:res.data.warehouse.country,
                id: res.data.warehouse.id,
                name: res.data.warehouse.name,   
            });
        })
        .catch((err) => console.log(err));
    }

    onNameChange = (e) => {
        this.setState({ name: e.target.value });
    };

    onAddressChange = (e) => {
        this.setState({ address: e.target.value });
    };

    onCityChange = (e) => {
        this.setState({ city: e.target.value });
    };

    onCountryChange = (e) => {
        this.setState({ country: e.target.value });
    };

    onContactNameChange = (e) => {
        this.setState({contact: { 
            name: e.target.value, 
            position: this.state.contact.position,
            phone: this.state.contact.phone,
            email: this.state.contact.email 
        }});
    };

    onPositionChange = (e) => {
        this.setState({contact: { 
            name: this.state.contact.name, 
            position: e.target.value,
            phone: this.state.contact.phone,
            email: this.state.contact.email 
        }});
    };

    onPhoneChange = (e) => {
        this.setState({contact: { 
            name: this.state.contact.name, 
            position: this.state.contact.position,
            phone: e.target.value,
            email: this.state.contact.email 
        }});
    };

    onEmailChange = (e) => {
        this.setState({contact: { 
            name: this.state.contact.name, 
            position: this.state.contact.position,
            phone: this.state.contact.phone,
            email: e.target.value 
        }});
    };

    editWarehouse = (data) => {
        data.preventDefault();
        axios
        .put((`${API_URL}/warehouse/${this.props.match.params.warehouseId}/update`), {
            address: this.state.address,
            city: this.state.city,
            contact: {
                email: this.state.contact.email,
                name: this.state.contact.name,
                phone: this.state.contact.phone,
                position: this.state.contact.position
            },
            country:this.state.country,
            id: this.state.id,
            name: this.state.name,   
        }).then((response) => {
            this.props.history.goBack();
        })
        .catch((error) => console.log(error));
    }

    handleReset = () => {
        axios
        .get(`${API_URL}/warehouse/${this.props.match.params.warehouseId}`)
        .then((res) => {
            this.setState({
                address: res.data.warehouse.address,
                city: res.data.warehouse.city,
                contact: {
                    email: res.data.warehouse.contact.email,
                    name:res.data.warehouse.contact.name,
                    phone:res.data.warehouse.contact.phone,
                    position: res.data.warehouse.contact.position
                },
                country:res.data.warehouse.country,
                id: res.data.warehouse.id,
                name: res.data.warehouse.name,   
            });
        })
        .catch((err) => console.log(err));
    }

    handleBack = () => {
        this.props.history.goBack();
    }

    render() {
        return (
            <>
            {/*  <<<<<<<<<< EDIT WAREHOUSE HEADER >>>>>>>>>> */}
            <div className="edit-warehouse">
                <div className="edit-warehouse__card">
                    <div className="edit-warehouse__header" >
                        <img src={BackArrow} alt="Go Back " onClick={this.handleBack} className="edit-warehouse__arrow"/>
                        <h2 className="edit-warehouse__title">edit warehouse</h2>
                    </div>

                    {/*  <<<<<<<<<< EDIT WAREHOUSE FORMS >>>>>>>>>> */}
                    <div className="edit-warehouse__details">
                        <form onSubmit={(e) =>{this.editWarehouse(e)}} >
                            <div className="edit-warehouse__details-form">
                                {/*  <<<<<<<<<< WAREHOUSE DETAILS >>>>>>>>>> */}
                                <div className="edit-warehouse__warehouse-details">

                                    <h3 className="edit-warehouse__details-title">warehouse details</h3>
                                    <label htmlFor="warehouseName" className="edit-warehouse__tag" >warehouse name</label>
                                    <input required name= "warehouseName" placeholder="Warehouse name" type="text" className="edit-warehouse__insert" value={this.state.name} onChange={this.onNameChange} />

                                    <label htmlFor="address" className="edit-warehouse__tag">street address</label>
                                    <input required name= "address" placeholder="Warehouse address" type="address" className="edit-warehouse__insert" value={this.state.address} onChange={this.onAddressChange} />

                                    <label htmlFor="city" className="edit-warehouse__tag">city</label>
                                    <input required name= "city" placeholder="Warehouse city" type="text" className="edit-warehouse__insert" value={this.state.city} onChange={this.onCityChange} />

                                    <label htmlFor="country" className="edit-warehouse__tag">country</label>
                                    <input required name= "country" placeholder="Warehouse country" type="text" className="edit-warehouse__insert" value={this.state.country} onChange={this.onCountryChange} />
                                </div>

                                {/*  <<<<<<<<<< CONTACT DETAILS >>>>>>>>>> */}
                                <div className="edit-warehouse__contact-details">
                                    <h3 className="edit-warehouse__details-title">contact details</h3>
                                    <label htmlFor="contactName" className="edit-warehouse__tag">contact name</label>
                                    <input required name= "contactName" placeholder="Contact name" type="text"  className="edit-warehouse__insert" value={this.state.contact.name} onChange={this.onContactNameChange} />

                                    <label htmlFor="position" className="edit-warehouse__tag">position</label>
                                    <input required name= "position" placeholder="Contact position" type="text" className="edit-warehouse__insert" value={this.state.contact.position} onChange={this.onPositionChange} />

                                    <label htmlFor="phone"  className="edit-warehouse__tag">phone number</label>
                                    <input required name= "phone" placeholder="Contact number" type="tel" minLength="10" className="edit-warehouse__insert" value={this.state.contact.phone} onChange={this.onPhoneChange} />

                                    <label htmlFor="email"  className="edit-warehouse__tag">email</label>
                                    <input required name= "email" placeholder="Contact email" type="email" className="edit-warehouse__insert" value={this.state.contact.email} onChange={this.onEmailChange} />
                                </div>
                            </div>
                            {/*  <<<<<<<<<< EDIT WAREHOUSE FOOTER >>>>>>>>>> */}
                            <div className="edit-warehouse__btn-func">
                                    <button className="edit-warehouse__btn edit-warehouse__btn--cancel" type="reset" onClick={this.handleReset}>cancel</button>
                                    <button className="edit-warehouse__btn edit-warehouse__btn--save" type="submit">save</button>
                                </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
        );
    }
}

// <<<<<<<<<< EXPORTS >>>>>>>>>> \\
export default EditWarehouse;