import React from "react";
import sortIcon from "../../assets/icons/sort-24px.svg";
import "./WarehouseLabels.scss";

function WarehousesLabels(props) {
  return (
    <div className="warehouse-labels">
      <div className="warehouse-labels__container warehouse-labels__container--warehouse">
        <p className="warehouse-labels__sub-container warehouse-labels__sub-container--warehouse">
          <span className="warehouse-labels__text">WAREHOUSE</span>
          <span className="warehouse-labels__icon">
            <img
              src={sortIcon}
              alt="sortIcon"
              className="warehouse-labels__icon-image"
              onClick={()=>{props.onSort("name")}}
            />
          </span>
        </p>
      </div>
      <div className="warehouse-labels__container warehouse-labels__container--address">
        <p className="warehouse-labels__sub-container warehouse-labels__sub-container--address">
          <span className="warehouse-labels__text">ADDRESS</span>
          <span className="warehouse-labels__icon">
            <img
              src={sortIcon}
              alt="sortIcon"
              className="warehouse-labels__icon-image"
              onClick={()=>{props.onSort("address")}}
            />
          </span>
        </p>
      </div>
      <div className="warehouse-labels__container warehouse-labels__container--name">
        <p className="warehouse-labels__sub-container warehouse-labels__sub-container--name">
          <span className="warehouse-labels__text">CONTACT NAME</span>
          <span className="warehouse-labels__icon">
            <img
              src={sortIcon}
              alt="sortIcon"
              className="warehouse-labels__icon-image"
              onClick={()=>{props.onSort("contact", "name")}}
            />
          </span>
        </p>
      </div>
      <div className="warehouse-labels__container warehouse-labels__container--contact">
        <p className="warehouse-labels__sub-container warehouse-labels__sub-container--info">
          <span className="warehouse-labels__text">CONTACT INFORMATION</span>
          <span className="warehouse-labels__icon">
            <img
              src={sortIcon}
              alt="sortIcon"
              className="warehouse-labels__icon-image"
              onClick={()=>{props.onSort("contact", "email")}}
            />
          </span>
        </p>
      </div>
      <div className="warehouse-labels__container warehouse-labels__container--actions">
        <p className="warehouse-labels__sub-container warehouse-labels__sub-container--actions">
          <span className="warehouse-labels__text">ACTIONS</span>
        </p>
      </div>
    </div>
  );
}

export default WarehousesLabels;