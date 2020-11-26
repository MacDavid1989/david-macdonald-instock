// <<<<<<<<<< IMPORTS >>>>>>>>>> \\

import React, { Component } from 'react';
import BackArrow from '../../../Assets/Icons/arrow_back-24px.svg';
import './EditWarehouse.scss';
import Logo from '../../../Assets/Logo/InStock-Logo.svg';
import axios from 'axios';

// <<<<<<<<<< CLASS COMPONENT FUNCTION >>>>>>>>>> \\

class EditWarehouse extends Component {
    state  = {
        warehouseName: {
            value: "",
            error: false
        },
        address: {
            value: "",
            error: false
        },
        city: {
            value: "",
            error: false
        },
        country: {
            value: "",
            error: false
        },
        contactName: {
            value: "",
            error: false
        },
        position: {
            value: "",
            error: false
        },
        phone: {
            value: "",
            error: false
        },
        email: {
            value: "",
            error: false
        },
        submitted: false,
    };

    editWarehouse = (data) => {
        data.preventDefault();
        axios
        .post((`http://localhost:8080/warehouse/${this.props.match.params.warehouseId}/update`), {
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

            // this.setState(this.baseState);
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
                                    <label htmlFor="warehouseName" className="edit-warehouse__tag">warehouse name</label>
                                    <input name= "warehouseName" placeholder="King West" type="text" className="edit-warehouse__insert"/>

                                    <label htmlFor="address" className="edit-warehouse__tag">street address</label>
                                    <input name= "address" placeholder="469 King Street West" type="address" className="edit-warehouse__insert" />

                                    <label htmlFor="city" className="edit-warehouse__tag">city</label>
                                    <input name= "city" placeholder="Toronto" type="text" className="edit-warehouse__insert" />

                                    <label htmlFor="country" className="edit-warehouse__tag">country</label>
                                    <input name= "country" placeholder="CAN" type="text" className="edit-warehouse__insert" />
                                </div>

                                {/*  <<<<<<<<<< CONTACT DETAILS >>>>>>>>>> */}
                                <div className="edit-warehouse__contact-details">
                                    <h3 className="edit-warehouse__details-title">contact details</h3>
                                    <label htmlFor="contactName" className="edit-warehouse__tag">contact name</label>
                                    <input name= "contactName" placeholder="I" type="text"  className="edit-warehouse__insert"/>

                                    <label htmlFor="position" className="edit-warehouse__tag">position</label>
                                    <input name= "position" placeholder="Position" type="text" className="edit-warehouse__insert" />

                                    <label htmlFor="phone"  className="edit-warehouse__tag">phone number</label>
                                    <input name= "phone" placeholder="Phone Number" type="tel" value="416-"  className="edit-warehouse__insert" />

                                    <label htmlFor="email"  className="edit-warehouse__tag">email</label>
                                    <input name= "email" placeholder="Email" type="email" className="edit-warehouse__insert" />
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