import React, { Component } from "react";
import axios from "axios";
import BackArrow from '../../assets/icons/arrow_back-24px.svg';
import './WarehouseAdd.scss';

const API_URL = process.env.REACT_APP_API_URL;
class WarehouseAdd extends Component {
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

onFormSubmit = (e) => {
    e.preventDefault();

    //error checking
    if (!this.state.name || this.state.name.length <= 0) {
        return false;
    }
    if (!this.state.address || this.state.address.length <= 0) {
        return false;
    }
    if (!this.state.city || this.state.city.length <= 0) {
        return false;
    }
    if (!this.state.country || this.state.country.length <= 0) {
        return false;
    }
    if (!this.state.contact.name || this.state.contact.name.length <= 0) {
        return false;
    }
    if (!this.state.contact.position || this.state.contact.position.length <= 0) {
        return false;
    }
    if (!this.state.contact.phone || this.state.contact.phone.length < 0) {
        return false;
    }
    if (!this.state.contact.email || this.state.contact.email.length <= 0) {
        return false;
    }

    console.log({
        address: this.state.address,
        city: this.state.city,
        contact: {
            email: this.state.contact.email,
            name: this.state.contact.name,
            phone: this.state.contact.phone,
            position: this.state.contact.position
        },
        country:this.state.country,
        name: this.state.name,   
    })
    
    const header = {'Content-Type': 'application/json'};

    axios
    .post((`${API_URL}/warehouse/create`), {
        address: this.state.address,
        city: this.state.city,
        contact: {
            email: this.state.contact.email,
            name: this.state.contact.name,
            phone: this.state.contact.phone,
            position: this.state.contact.position
        },
        country:this.state.country,
        name: this.state.name,   
    }, header).then((response) => {
        // this.props.history.goBack();
    })
    .catch((error) => console.log(error));
};

render() {
    return (
        <>
        {/*  <<<<<<<<<< add WAREHOUSE HEADER >>>>>>>>>> */}
        <div className="add-warehouse">
            <div className="add-warehouse__card">
                <div className="add-warehouse__header">
                    <img src={BackArrow} alt="Go Back " className="add-warehouse__arrow"/>
                    <h2 className="add-warehouse__title">add new warehouse</h2>
                </div>

                {/*  <<<<<<<<<< add WAREHOUSE FORMS >>>>>>>>>> */}
                <div className="add-warehouse__details">
                    <form onSubmit={this.onFormSubmit} >
                    <div className="add-warehouse__details-form">
                                {/*  <<<<<<<<<< WAREHOUSE DETAILS >>>>>>>>>> */}
                                <div className="add-warehouse__warehouse-details">

                                    <h3 className="add-warehouse__details-title">warehouse details</h3>
                                    <label htmlFor="warehouseName" className="add-warehouse__tag" >warehouse name</label>
                                    <input required name= "warehouseName" placeholder="Warehouse name" type="text" className="add-warehouse__insert" value={this.state.name} onChange={this.onNameChange} />

                                    <label htmlFor="address" className="add-warehouse__tag">street address</label>
                                    <input required name= "address" placeholder="Warehouse address" type="address" className="add-warehouse__insert" value={this.state.address} onChange={this.onAddressChange} />

                                    <label htmlFor="city" className="add-warehouse__tag">city</label>
                                    <input required name= "city" placeholder="Warehouse city" type="text" className="add-warehouse__insert" value={this.state.city} onChange={this.onCityChange} />

                                    <label htmlFor="country" className="add-warehouse__tag">country</label>
                                    <input required name= "country" placeholder="Warehouse country" type="text" className="add-warehouse__insert" value={this.state.country} onChange={this.onCountryChange} />
                                </div>

                                {/*  <<<<<<<<<< CONTACT DETAILS >>>>>>>>>> */}
                                <div className="add-warehouse__contact-details">
                                    <h3 className="add-warehouse__details-title">contact details</h3>
                                    <label htmlFor="contactName" className="add-warehouse__tag">contact name</label>
                                    <input required name= "contactName" placeholder="Contact name" type="text"  className="add-warehouse__insert" value={this.state.contact.name} onChange={this.onContactNameChange} />

                                    <label htmlFor="position" className="add-warehouse__tag">position</label>
                                    <input required name= "position" placeholder="Contact position" type="text" className="add-warehouse__insert" value={this.state.contact.position} onChange={this.onPositionChange} />

                                    <label htmlFor="phone"  className="add-warehouse__tag">phone number</label>
                                    <input required name= "phone" placeholder="Contact number" type="tel"  className="add-warehouse__insert" value={this.state.contact.phone} onChange={this.onPhoneChange} />

                                    <label htmlFor="email"  className="add-warehouse__tag">email</label>
                                    <input required name= "email" placeholder="Contact email" type="email" className="add-warehouse__insert" value={this.state.contact.email} onChange={this.onEmailChange} />
                                </div>
                            </div>
                            {/*  <<<<<<<<<< add WAREHOUSE FOOTER >>>>>>>>>> */}
                            <div className="add-warehouse__btn-func">
                                    <button className="add-warehouse__btn add-warehouse__btn--cancel" type="reset" onClick={this.handleReset}>cancel</button>
                                    <button className="add-warehouse__btn add-warehouse__btn--save" type="submit">save</button>
                                </div>
                    </form>
                </div>
            </div>
        </div>
    </>
    )
}
}
export default WarehouseAdd;