import React from "react";
import sortIcon from "../../Assets/Icons/sort-24px.svg";
import "./WarehousesLabels.scss";

function WarehousesLabels() {
  return (
    <div className="warehouse-labels">
      <div className="warehouse-labels__container warehouse-labels__container--warehouse">
        <p className="warehouse-labels__sub-container">
          <span className="warehouse-labels__text">WAREHOUSE</span>
          <span className="warehouse-labels__icon">
            <img
              src={sortIcon}
              alt="sortIcon"
              className="warehouse-labels__icon-image"
            />
          </span>
        </p>
      </div>
      <div className="warehouse-labels__container warehouse-labels__container--address">
        <p className="warehouse-labels__sub-container">
          <span className="warehouse-labels__text">ADDRESS</span>
          <span className="warehouse-labels__icon">
            <img
              src={sortIcon}
              alt="sortIcon"
              className="warehouse-labels__icon-image"
            />
          </span>
        </p>
      </div>
      <div className="warehouse-labels__container warehouse-labels__container--name">
        <p className="warehouse-labels__sub-container">
          <span className="warehouse-labels__text">CONTACT NAME</span>
          <span className="warehouse-labels__icon">
            <img
              src={sortIcon}
              alt="sortIcon"
              className="warehouse-labels__icon-image"
            />
          </span>
        </p>
      </div>
      <div className="warehouse-labels__container warehouse-labels__container--contact">
        <p className="warehouse-labels__sub-container">
          <span className="warehouse-labels__text">CONTACT INFORMATION</span>
          <span className="warehouse-labels__icon">
            <img
              src={sortIcon}
              alt="sortIcon"
              className="warehouse-labels__icon-image"
            />
          </span>
        </p>
      </div>
      <div className="warehouse-labels__container warehouse-labels__container--actions">
        <p className="warehouse-labels__sub-container">
          <span className="warehouse-labels__text">ACTIONS</span>
        </p>
      </div>

      {/* <div className="warehouse-labels">
        <p className="warehouses-items-labels__label-container">
          <span className="warehouses-items-labels__label-text">ADDRESS</span>
          <span className="warehouses-items-labels__label-icon">
            <img
              src={sortIcon}
              alt="sortIcon"
              className="warehouses-items-labels__label-icon-image"
            />
          </span>
        </p>
      </div>
      <div className="warehouse-labels">
        <p className="warehouses-items-labels__label-container">
          <span className="warehouses-items-labels__label-text">
            CONTACT NAME
          </span>
          <span className="warehouses-items-labels__label-icon">
            <img
              src={sortIcon}
              alt="sortIcon"
              className="warehouses-items-labels__label-icon-image"
            />
          </span>
        </p>
      </div>
      <div className="warehouses-items-labels__label warehouses-items-labels__label--contact">
        <p className="warehouses-items-labels__label-container">
          <span className="warehouses-items-labels__label-text">
            CONTACT INFORMATION
          </span>
          <span className="warehouses-items-labels__label-icon">
            <img
              src={sortIcon}
              alt="sortIcon"
              className="warehouses-items-labels__label-icon-image"
            />
          </span>
        </p>
      </div>
      <div className="warehouses-items-labels__label warehouses-items-labels__label--actions">
        <p className="warehouses-items-labels__label-container">
          <span className="warehouses-items-labels__label-text">ACTIONS</span>
        </p>
      </div> */}
    </div>
  );
}

export default WarehousesLabels;