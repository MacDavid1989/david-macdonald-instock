// <<<<<<<<<< IMPORTS >>>>>>>>>> \\

import React, { Component } from 'react';
import BackArrow from '../../assets/icons/arrow_back-24px.svg';
import './WarehouseEdit.scss';
import axios from 'axios';


const API_URL = process.env.REACT_APP_API_URL;

// <<<<<<<<<< CLASS COMPONENT FUNCTION >>>>>>>>>> \\

class EditWarehouse extends Component {
    state  = {
        warehouseName: "",
        address: "",
        city: "",
        country: "",
        contactName: "",
        position: "",
        phone: "",
        email: ""
    };

    componentDidMount() {
        console.log(this.props.match.params);
        axios
        .get(`${API_URL}/warehouse/${this.props.match.params.warehouseId}`)
        .then((res) => {
            console.log(res.data);
            this.setState({
                warehouseName: res.data.warehouse.name,
                address: res.data.warehouse.address,
                city: res.data.warehouse.city,
                country:res.data.warehouse.country,
                contact: {
                    contactName:res.data.warehouse.contact.name,
                    email: res.data.warehouse.contact.email,
                    phone:res.data.warehouse.contact.phone,
                    position: res.data.warehouse.contact.position
                }
                
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
        this.setState({ contactName: e.target.value });
    };

    onPositionChange = (e) => {
        this.setState({ position: e.target.value });
    };

    onPhoneChange = (e) => {
        this.setState({ phone: e.target.value });
    };

    onEmailChange = (e) => {
        this.setState({ email: e.target.value });
    };

    editWarehouse = (data) => {
        data.preventDefault();
        axios
        .post((`${API_URL}/warehouse/${this.props.match.params.warehouseId}/update`), {
            name: data.target.warehouseName.value,
            address: data.target.address.value,
            city: data.target.city.value,
            country: data.target.country.value,
            contact: {
                name: data.target.contactName.value,
                position: data.target.position.value,
                phone: data.target.number.value,
                email: data.target.email.value
            },
        }).then((response) => {

        })
        .catch((error) => console.log(error));
        data.reset();
        this.props.history.push(`/warehouse/${this.props.match.params.warehouseId}`);
    }


    render() {
        return (
            <>
            {/*  <<<<<<<<<< EDIT WAREHOUSE HEADER >>>>>>>>>> */}
            <div className="edit-warehouse">
                <div className="edit-warehouse__card">
                    <div className="edit-warehouse__header">
                        <img src={BackArrow} alt="Go Back " className="edit-warehouse__arrow"/>
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
                                    <input name= "warehouseName" placeholder="King West" type="text" className="edit-warehouse__insert" value={this.state.warehouseName} onChange={this.onNameChange} />

                                    <label htmlFor="address" className="edit-warehouse__tag">street address</label>
                                    <input name= "address" placeholder="469 King Street West" type="address" className="edit-warehouse__insert" value={this.state.address} onChange={this.onAddressChange} />

                                    <label htmlFor="city" className="edit-warehouse__tag">city</label>
                                    <input name= "city" placeholder="Toronto" type="text" className="edit-warehouse__insert" value={this.state.city} onChange={this.onCityChange} />

                                    <label htmlFor="country" className="edit-warehouse__tag">country</label>
                                    <input name= "country" placeholder="CAN" type="text" className="edit-warehouse__insert" value={this.state.country} onChange={this.onCountryChange} />
                                </div>

                                {/*  <<<<<<<<<< CONTACT DETAILS >>>>>>>>>> */}
                                <div className="edit-warehouse__contact-details">
                                    <h3 className="edit-warehouse__details-title">contact details</h3>
                                    <label htmlFor="contactName" className="edit-warehouse__tag">contact name</label>
                                    <input name= "contactName" placeholder="I" type="text"  className="edit-warehouse__insert" value={this.state.contactName} onChange={this.onContactNameChange} />

                                    <label htmlFor="position" className="edit-warehouse__tag">position</label>
                                    <input name= "position" placeholder="Position" type="text" className="edit-warehouse__insert" value={this.state.position} onChange={this.onPositionChange} />

                                    <label htmlFor="phone"  className="edit-warehouse__tag">phone number</label>
                                    <input name= "phone" placeholder="Phone Number" type="tel"  className="edit-warehouse__insert" value={this.state.phone} onChange={this.onPhoneChange} />

                                    <label htmlFor="email"  className="edit-warehouse__tag">email</label>
                                    <input name= "email" placeholder="Email" type="email" className="edit-warehouse__insert" value={this.state.email} onChange={this.onEmailChange} />
                                </div>
                            </div>
                            {/*  <<<<<<<<<< EDIT WAREHOUSE FOOTER >>>>>>>>>> */}
                            <div className="edit-warehouse__btn-func">
                                    <button className="edit-warehouse__btn edit-warehouse__btn--cancel" type="reset">cancel</button>
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