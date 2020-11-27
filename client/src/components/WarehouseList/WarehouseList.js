import React from 'react';
import chevronRight from "../../Assets/Icons/chevron_right-24px.svg"
import deleteOutline from "../../Assets/Icons/delete_outline-24px.svg"
import edit from "../../Assets/Icons/edit-24px.svg"
import './WarehouseList.scss'

const WarehouseList = ({warehouses}) => {
    const showWarehouses = warehouses.map((warehouse) => {
        return(
        <div className="card" key={warehouse.id}>
            <div className="card__top-container">
                <div className="card__warehouse-address">
                    <div className="card__warehouse">
                        <span className="card__subheader">WAREHOUSE</span>
                        <p className="card__location-container">
                            <span className="card__location">{warehouse.name}</span>
                            <span>
                                <img src={chevronRight} className="card__chevron"alt="chevronRight"/>
                            </span>
                        </p>
                    </div>
                    <div className="card__address">
                        <span className="card__subheader">ADDRESS</span>
                        <span className="card__info card__info--address">{`${warehouse.address}, ${warehouse.city}, ${warehouse.country}`}</span>
                    </div>
                </div>
                <div className="card__contact-details">
                    <div className="card__name">
                        <span className="card__subheader">CONTACT NAME</span>
                        <span className="card__info card__info--name">{warehouse.contact.name}</span>
                    </div>
                    <div className="card__contact-info">
                        <span className="card__subheader">CONTACT INFORMATION</span>
                        <span className="card__info card__phone">{warehouse.contact.phone}</span>
                        <span className="card__info card__email">{warehouse.contact.email}</span>
                    </div>
                </div>
            </div>
            <div className="card__icons">
                <img src={deleteOutline} alt="delete" className="card__delete-icon"/>
                <img src={edit} alt="edit" className="card__edit-icon"/>
            </div>
        </div>)
    })
     
    return (
        <div>
            {showWarehouses}
        </div>
        
    );
};

export default WarehouseList;