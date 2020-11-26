// <<<<<<<<<< IMPORTS >>>>>>>>>> \\

import React, { Component } from 'react';
import BackArrow from '../../../Assets/Icons/arrow_back-24px.svg';
import './EditWarehouse.scss';
import Logo from '../../../Assets/Logo/InStock-Logo.svg';

// <<<<<<<<<< CLASS COMPONENT FUNCTION >>>>>>>>>> \\

class EditWarehouse extends Component {
    // state  = {
    //     warehouseName: "",
    //     address: "",
    //     city: "",
    //     country: "",
    //     contactName: "",
    //     position: "",
    //     phone: "",
    //     email: "",
    //     success: false
    // }

    // componentDidMount() {

    //     if(!this.props.editWarehouse) {
    //         axios.get("http://localhost:8080/warehouse/"+this.props.editWarehouse).then(res=>{
    //             console.log(res.data);
    //             this.setState(
    //                 {   
    //                     warehouseName: res.data.warehouseName,
    //                     address: res.data. address,
    //                     city: res.data.city ,
    //                     country: res.data.country,
    //                     contactName: res.data.contactName,
    //                     position: res.data.position,
    //                     phone: res.data.phone,
    //                     email: res.data.email,
    //                     success: true
    //                 })
    //         })
    //     }
        
    // }

    // handleSubmit = (e) => {
    //     e.preventDefault();
    //     this.setState({
    //         warehouseName: e.target.warehouseName.value,
    //         address: e.target.address.value,
    //         city: e.target.city.value,
    //         country: e.target.country.value,
    //         contactName: e.target.contactName.value,
    //         position: e.target.position.value,
    //         phone: e.target.phone.value,
    //         email: e.target.email.value,
    //         success: true
    //     }, () => console.log(this.state))

    //     e.target.reset();
    // }

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
                        <form className="edit-warehouse__details-form" >
                        {/* onSubmit="" */}
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

                        </form>

                    </div>

                    {/*  <<<<<<<<<< EDIT WAREHOUSE FOOTER >>>>>>>>>> */}
                    <div className="edit-warehouse__btn-func">
                        <button className="edit-warehouse__btn edit-warehouse__btn--cancel" type="reset">cancel</button>
                        <button className="edit-warehouse__btn edit-warehouse__btn--save" type="submit">save</button>
                    </div>
                </div>
            </div>
        </>
        );
    }
}

// <<<<<<<<<< EXPORTS >>>>>>>>>> \\
export default EditWarehouse;