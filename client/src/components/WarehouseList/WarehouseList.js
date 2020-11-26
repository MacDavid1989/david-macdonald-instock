import React from 'react';
import chevronRight from "../../Assets/Icons/chevron_right-24px.svg"
import deleteOutline from "../../Assets/Icons/delete_outline-24px.svg"
import edit from "../../Assets/Icons/edit-24px.svg"

const WarehouseList = ({warehouses}) => {
    const showWarehouses = warehouses.map((warehouse) => {
        return(
        <div className="card" key={warehouse.id}>
            <div className="card__top-container">
                <div className="card__warehouse-address">
                    <div className="card__warehouse">
                        <span className="card__subheader">WAREHOUSE<img src={chevronRight} alt="chevronRight"/></span>
                        <span className="card__location">{warehouse.name}</span>
                    </div>
                    <div className="card__address">
                        <span className="card__subheader">ADDRESS</span>
                        <span className="card__info">{`${warehouse.address}, ${warehouse.city}, ${warehouse.country}`}</span>
                    </div>
                </div>
                <div className="card__contact-details">
                    <div className="card__name">
                        <span className="card__subheader">CONTACT NAME</span>
                        <span className="card__info">{warehouse.contact.name}</span>
                    </div>
                    <div className="card__contact-info">
                        <span className="card__subheader">CONTACT INFORMATION</span>
                        <span className="card__info">{warehouse.contact.phone}</span>
                        <span className="card__info">{warehouse.contact.email}</span>
                    </div>
                </div>
                <div className="card__icons">
                    <img src={deleteOutline} alt="delete"/>
                    <img src={edit} alt="edit"/>
                </div>
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