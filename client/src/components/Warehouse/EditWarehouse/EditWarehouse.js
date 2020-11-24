// <<<<<<<<<< IMPORTS >>>>>>>>>> \\

import React, { Component } from 'react';
import BackArrow from '../../../Assets/Icons/arrow_back-24px.svg';
import './EditWarehouse.scss';
import Logo from '../../../Assets/Logo/InStock-Logo.svg';

// <<<<<<<<<< CLASS COMPONENT FUNCTION >>>>>>>>>> \\

class EditWarehouse extends Component {
    render() {
        return (
            <>
            {/*  <<<<<<<<<< EDIT WAREHOUSE HEADER >>>>>>>>>> */}
            <div className="edit-warehouse">
                <div className="edit-warehouse__main-header">
                    <button className="edit-warehouse__logo-btn"><img src={Logo} alt="in-stock logo" className="edit-warehouse__logo" /></button>
                    <div className="edit-warehouse__w-i-btns">
                        <button className="edit-warehouse__warehouse-btn">warehouses</button>
                        <button className="edit-warehouse__inventory-btn">inventory</button>
                    </div>
                </div>
                <div className="edit-warehouse__card">
                    <div className="edit-warehouse__header">
                        <img src={BackArrow} alt="Go Back " className="edit-warehouse__arrow"/>
                        <h2 className="edit-warehouse__title">edit warehouse</h2>
                    </div>

                    {/*  <<<<<<<<<< EDIT WAREHOUSE FORMS >>>>>>>>>> */}
                    <div className="edit-warehouse__details">
                        <form className="edit-warehouse__details-form">

                            {/*  <<<<<<<<<< WAREHOUSE DETAILS >>>>>>>>>> */}
                            <div className="edit-warehouse__warehouse-details">

                                <h3 className="edit-warehouse__details-title">warehouse details</h3>
                                <label htmlFor="name" className="edit-warehouse__tag">warehouse name</label>
                                <input name= "name" placeholder="King West" type="text" className="edit-warehouse__insert"/>

                                <label htmlFor="address" className="edit-warehouse__tag">street address</label>
                                <input name= "address" placeholder="469 King Street West" type="address" className="edit-warehouse__insert" />

                                <label htmlFor="city" className="edit-warehouse__tag">city</label>
                                <input name= "city" placeholder="Toronto" type="text" className="edit-warehouse__insert" />

                                <label htmlFor="name" className="edit-warehouse__tag">country</label>
                                <input name= "name" placeholder="CAN" type="text" className="edit-warehouse__insert" />
                            </div>

                            {/*  <<<<<<<<<< CONTACT DETAILS >>>>>>>>>> */}
                            <div className="edit-warehouse__contact-details">
                                <h3 className="edit-warehouse__details-title">contact details</h3>
                                <label htmlFor="name" className="edit-warehouse__tag">contact name</label>
                                <input name= "name" placeholder="I" type="text"  className="edit-warehouse__insert"/>

                                <label htmlFor="address" className="edit-warehouse__tag">position</label>
                                <input name= "address" placeholder="Position" type="address" className="edit-warehouse__insert" />

                                <label htmlFor="city"  className="edit-warehouse__tag">phone number</label>
                                <input name= "city" placeholder="Phone Number" type="number"  className="edit-warehouse__insert" />

                                <label htmlFor="name"  className="edit-warehouse__tag">email</label>
                                <input name= "name" placeholder="Email" type="email" className="edit-warehouse__insert" />
                            </div>

                        </form>

                    </div>

                    {/*  <<<<<<<<<< EDIT WAREHOUSE FOOTER >>>>>>>>>> */}
                    <div className="edit-warehouse__btn-func">
                        <button className="edit-warehouse__btn edit-warehouse__btn--cancel">cancel</button>
                        <button className="edit-warehouse__btn edit-warehouse__btn--save">save</button>
                    </div>
                </div>
            </div>
        </>
        );
    }
}

// <<<<<<<<<< EXPORTS >>>>>>>>>> \\
export default EditWarehouse;