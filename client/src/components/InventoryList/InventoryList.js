import React from 'react';
import chevronRight from "../../assets/icons/chevron_right-24px.svg"
import deleteOutline from "../../assets/icons/delete_outline-24px.svg"
import edit from "../../assets/icons/edit-24px.svg"
import './InventoryList.scss'

const InventoryList = (props) => {
    const inventories = props.inventories && props.inventories.map(item => {
        return(
            <div className="inventory-card" key={item.id}>
                <div className="inventory-card__top-container">
                    <div className="inventory-card__item-category">
                        <div className="inventory-card__inventory-item">
                            <span className="inventory-card__subheader">INVENTORY ITEM</span>
                            <p className="inventory-card__item-container">
                                <span className="inventory-card__stock-item">{item.itemName}</span>
                                <span>
                                    <img src={chevronRight} className="inventory-card__chevron"alt="chevronRight"/>
                                </span>
                            </p>
                        </div>
                        <div className="inventory-card__category">
                            <span className="inventory-card__subheader">CATEGORY</span>
                            <span className="inventory-card__info">{item.category}</span>
                        </div>
                    </div>
                    <div className="inventory-card__status-qty-warehouse">
                        <div className="inventory-card__status">
                            <span className="inventory-card__subheader">STATUS</span>
                           {item.status === "In Stock" && <span className="inventory-card__stock inventory-card__stock--in">{item.status}</span>}
                           {item.status === "Out of Stock" && <span className="inventory-card__stock inventory-card__stock--out">{item.status}</span>}
                        </div>
                        <div className="inventory-card__quantity">
                            <span className="inventory-card__subheader">QTY</span>
                            <span className="inventory-card__info">{item.quantity}</span>
                        </div>
                        <div className="inventory-card__location-container">
                            <span className="inventory-card__subheader">WAREHOUSE</span>
                            <span className="inventory-card__info">{item.warehouseName}</span>
                        </div>
                    </div>
                </div>
                <div className="inventory-card__icons">
                    <img src={deleteOutline} alt="delete" className="inventory-card__delete-icon"/>
                    <img src={edit} alt="edit" className="inventory-card__edit-icon"/>
                </div>
            </div>)
    })
        
    return <>
    {inventories}
    </>
     
    
};

export default InventoryList;