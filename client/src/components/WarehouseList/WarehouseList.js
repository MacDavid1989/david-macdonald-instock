import React from 'react';
import chevronRight from "../../Assets/Icons/chevron_right-24px.svg"
import deleteOutline from "../../Assets/Icons/delete_outline-24px.svg"
import edit from "../../Assets/Icons/edit-24px.svg"

const WarehouseList = () => {
    return (
        <div className="card">
            <div className="card__top-container">
                <div className="card__warehouse-address">
                    <div className="card__warehouse">
                        <span className="card__subheader">WAREHOUSE<img src={chevronRight} alt="chevronRight"/></span>
                        <span className="card__location">Manhattan</span>
                    </div>
                    <div className="card__address">
                        <span className="card__subheader">ADDRESS</span>
                        <span className="card__info">503 Broadway, New York, USA</span>
                    </div>
                </div>
                <div className="card__contact-details">
                    <div className="card__name">
                        <span className="card__subheader">CONTACT NAME</span>
                        <span className="card__info">Parmin Aujla</span>
                    </div>
                    <div className="card__contact-info">
                        <span className="card__subheader">CONTACT INFORMATION</span>
                        <span className="card__info">+1 (629) 555-0129 paujla@instock.com</span>
                    </div>
                </div>
                <div className="card__icons">
                    <img src={deleteOutline} alt="delete"/>
                    <img src={edit} alt="edit"/>
                </div>
            </div>



            
        </div>
    );
};

export default WarehouseList;