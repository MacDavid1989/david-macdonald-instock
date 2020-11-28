import React from "react";
import sortIcon from "../../assets/icons/sort-24px.svg";
import "./InventoryLabels.scss";

function InventoryLabels() {
  return (
    <div className="inventory-labels">
      <div className="inventory-labels__container inventory-labels__container--inventory">
        <p className="inventory-labels__sub-container inventory-labels__sub-container--inventory">
          <span className="inventory-labels__text">INVENTORY ITEM</span>
          <span className="inventory-labels__icon">
            <img
              src={sortIcon}
              alt="sortIcon"
              className="inventory-labels__icon-image"
            />
          </span>
        </p>
      </div>
      <div className="inventory-labels__container inventory-labels__container--category">
        <p className="inventory-labels__sub-container inventory-labels__sub-container--category">
          <span className="inventory-labels__text">CATEGORY</span>
          <span className="inventory-labels__icon">
            <img
              src={sortIcon}
              alt="sortIcon"
              className="inventory-labels__icon-image"
            />
          </span>
        </p>
      </div>
      <div className="inventory-labels__container inventory-labels__container--status">
        <p className="inventory-labels__sub-container inventory-labels__sub-container--status">
          <span className="inventory-labels__text">STATUS</span>
          <span className="inventory-labels__icon">
            <img
              src={sortIcon}
              alt="sortIcon"
              className="inventory-labels__icon-image"
            />
          </span>
        </p>
      </div>
      <div className="inventory-labels__container inventory-labels__container--qty">
        <p className="inventory-labels__sub-container inventory-labels__sub-container--qty">
          <span className="inventory-labels__text">QTY</span>
          <span className="inventory-labels__icon">
            <img
              src={sortIcon}
              alt="sortIcon"
              className="inventory-labels__icon-image"
            />
          </span>
        </p>
      </div>
      <div className="inventory-labels__container inventory-labels__container--warehouse">
        <p className="inventory-labels__sub-container inventory-labels__sub-container--warehouse">
          <span className="inventory-labels__text">WAREHOUSE</span>
          <span className="inventory-labels__icon">
            <img
              src={sortIcon}
              alt="sortIcon"
              className="inventory-labels__icon-image"
            />
          </span>
        </p>
      </div>
      <div className="inventory-labels__container inventory-labels__container--actions">
        <p className="inventory-labels__sub-container inventory-labels__sub-container--actions">
          <span className="inventory-labels__text">ACTIONS</span>
        </p>
      </div>
    </div>
  );
}

export default InventoryLabels;