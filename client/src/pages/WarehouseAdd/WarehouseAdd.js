import React, { Component } from "react";
import axios from "axios";
import BackArrow from '../../assets/icons/arrow_back-24px.svg';
import './WarehouseAdd.scss';

class WarehouseAdd extends Component {
state = {
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
    axios
    .post("http://localhost:8080/warehouse/create")
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
        console.log(res.data);
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

onFormSubmit = (e) => {
    //error checking
    if (!this.state.warehouseName || this.state.warehouseName.length <= 0) {
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
    if (!this.state.contactName || this.state.contactName.length <= 0) {
        return false;
    }
    if (!this.state.position || this.state.position.length <= 0) {
        return false;
    }
    if (!this.state.phone || this.state.phone.length < 0) {
        return false;
    }
    if (!this.state.email || this.state.email.length <= 0) {
        return false;
    }

    e.preventDefault();

    axios
        .get(`http://localhost:8080/warehouse/${this.props.match.params.warehouseId}`)
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
                                <input name= "warehouseName" placeholder="King West" type="text" className="add-warehouse__insert" value={this.state.warehouseName} onChange={this.onNameChange} />

                                <label htmlFor="address" className="add-warehouse__tag">street address</label>
                                <input name= "address" placeholder="469 King Street West" type="address" className="add-warehouse__insert" value={this.state.address} onChange={this.onAddressChange} />

                                <label htmlFor="city" className="add-warehouse__tag">city</label>
                                <input name= "city" placeholder="Toronto" type="text" className="add-warehouse__insert" value={this.state.city} onChange={this.onCityChange} />

                                <label htmlFor="country" className="add-warehouse__tag">country</label>
                                <input name= "country" placeholder="CAN" type="text" className="add-warehouse__insert" value={this.state.country} onChange={this.onCountryChange} />
                            </div>

                            {/*  <<<<<<<<<< CONTACT DETAILS >>>>>>>>>> */}
                            <div className="add-warehouse__contact-details">
                                <h3 className="add-warehouse__details-title">contact details</h3>
                                <label htmlFor="contactName" className="add-warehouse__tag">contact name</label>
                                <input name= "contactName" placeholder="I" type="text"  className="add-warehouse__insert" value={this.state.contactName} onChange={this.onContactNameChange} />

                                <label htmlFor="position" className="add-warehouse__tag">position</label>
                                <input name= "position" placeholder="Position" type="text" className="add-warehouse__insert" value={this.state.position} onChange={this.onPositionChange} />

                                <label htmlFor="phone"  className="add-warehouse__tag">phone number</label>
                                <input name= "phone" placeholder="Phone Number" type="tel"  className="add-warehouse__insert" value={this.state.phone} onChange={this.onPhoneChange} />

                                <label htmlFor="email"  className="add-warehouse__tag">email</label>
                                <input name= "email" placeholder="Email" type="email" className="add-warehouse__insert" value={this.state.email} onChange={this.onEmailChange} />
                            </div>
                        </div>
                        {/*  <<<<<<<<<< add WAREHOUSE FOOTER >>>>>>>>>> */}
                        <div className="add-warehouse__btn-func">
                                <button className="add-warehouse__btn add-warehouse__btn--cancel" type="reset">cancel</button>
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