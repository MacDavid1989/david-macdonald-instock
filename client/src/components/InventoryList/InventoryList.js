import React from 'react';
import chevronRight from "../../Assets/Icons/chevron_right-24px.svg"
import deleteOutline from "../../Assets/Icons/delete_outline-24px.svg"
import edit from "../../Assets/Icons/edit-24px.svg"
import './InventoryList.scss'

const InventoryList = (props) => {
    const inventories = props.inventories && props.inventories.map(item => {
        return(
            <div className="card" key={item.id}>
                <div className="card__top-container">
                    <div className="card__item-category">
                        <div className="card__inventory-item">
                            <span className="card__subheader">INVENTORY ITEM</span>
                            <p className="card__item-container">
                                <span className="card__stock-item">{item.itemName}</span>
                                <span>
                                    <img src={chevronRight} className="card__chevron"alt="chevronRight"/>
                                </span>
                            </p>
                        </div>
                        <div className="card__category">
                            <span className="card__subheader">CATEGORY</span>
                            <span className="card__info>">{item.category}</span>
                        </div>
                    </div>
                    <div className="card__status-qty-warehouse">
                        <div className="card__status">
                            <span className="card__subheader">STATUS</span>
                            <span className="card__stock">{item.status}</span>
                        </div>
                        <div className="card__quantity">
                            <span className="card__subheader">QTY</span>
                            <span className="card__info">{item.quantity}</span>
                        </div>
                        <div className="card__location-container">
                            <span className="card__location">{item.warehouseName}</span>
                        </div>
                    </div>
                </div>
                <div className="card__icons">
                    <img src={deleteOutline} alt="delete" className="card__delete-icon"/>
                    <img src={edit} alt="edit" className="card__edit-icon"/>
                </div>
            </div>)
    })
        
    return <>
    {inventories}
    </>
     
    
};

export default InventoryList;