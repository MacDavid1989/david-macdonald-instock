import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./WarehouseDetails.scss";
import axios from "axios";
import DeleteModal from "../../components/DeleteModal/DeleteModal";
import backArrow from "../../assets/icons/arrow_back-24px.svg";
import edit from "../../assets/icons/edit-24px.svg";
import editWhite from "../../assets/icons/edit_white-24px.svg";
import sort from "../../assets/icons/sort-24px.svg";
import chevron from "../../assets/icons/chevron_right-24px.svg";
import deleteOutline from "../../assets/icons/delete_outline-24px.svg";

const API_URL = process.env.REACT_APP_API_URL;
class Warehouse extends Component {
  state = {
    warehouse: null,
    inventory: null,
    inventoryConst: null,
    inOrder: true,
    deleteObj: { 
      name: "", 
      id: "",
      header: "inventory item",
      body: `the warehouse inventory list.`
    },
  };

  getWarehouse = () => {
    axios
      .get(`${API_URL}/warehouse/${this.props.match.params.warehouseId}`)
      .then((res) => {
        this.setState({
          warehouse: res.data.warehouse,
          inventory: res.data.inventory,
          inventoryConst: res.data.inventory,
          deleteObj: {
            name: "",
            id: "",
          }
        });
      })
      .catch(console.error);
  }

  componentDidMount() {
    this.getWarehouse()
  }

  sortByValue = (key1) => {
    let tempData = [];
    let sortedData = [];
    for (let i = 0; i < this.state.inventoryConst.length; i++) {
      tempData.push(this.state.inventoryConst[i]);
    }

    if (this.state.inOrder) {
      sortedData = tempData.sort(function (a, b) {
        if (typeof tempData[0][key1] == "number") {
            return a[key1] - b[key1];
        }
        return a[key1].localeCompare(b[key1]);
      });
    } else {
      sortedData = tempData.sort(function (a, b) {
        if (typeof tempData[0][key1] == "number") {
            return b[key1] - a[key1];
        }
        return b[key1].localeCompare(a[key1]);
      });
    }

    this.setState({
      inventory: sortedData,
      inOrder: !this.state.inOrder,
    });
  };

  setDeleteItem = (id, name) => {
    this.setState({
      deleteObj: { ...this.state.deleteObj, id: id, name: name },
    });
  };

  deleteRoute = (id) => {
    this.getWarehouse()
  };

  resetRoute = () => {
    this.setState({
      deleteObj: {
        name: "",
        id: "",
      }
    }) 
  }

  render() {
    return (
      <>
        <DeleteModal
          deleteThing={this.state.deleteObj}
          onDeleteRoute={this.deleteRoute}
          resetRoute={this.resetRoute}
        />
        <div className="warehouse">
          <section className="warehouse__banner">
            <div className="banner__header">
              <Link to="/">
                <img className="banner__arrow" src={backArrow} alt="" />
              </Link>
              <h1 className="banner__heading">
                {!!this.state.warehouse && this.state.warehouse.name}
              </h1>
            </div>
            <Link to={`/warehouse/${this.props.match.params.warehouseId}/edit`}>
              <button className="banner__button">
                <img className="button__icon" src={editWhite} alt="" />
                <h3 className="button__text">Edit</h3>
              </button>
            </Link>
          </section>
          <section className="warehouse__info">
            <div className="warehouse__address">
              <h4 className="address__heading">WAREHOUSE ADDRESS:</h4>
              <p className="address__street">
                {!!this.state.warehouse && this.state.warehouse.address}
              </p>
              <p className="address__city">
                {!!this.state.warehouse &&
                  `${this.state.warehouse.city}, ${this.state.warehouse.country}`}
              </p>
            </div>
            <div className="warehouse__contact">
              <div className="warehouse__contact-name">
                <h4 className="title">CONTACT NAME:</h4>
                <p className="name">
                  {!!this.state.warehouse && this.state.warehouse.contact.name}
                </p>
                <p className="position">
                  {!!this.state.warehouse &&
                    this.state.warehouse.contact.position}
                </p>
              </div>
              <div className="warehouse__contact-info">
                <h4 className="title">CONTACT INFORMATION:</h4>
                <p className="number">
                  {!!this.state.warehouse && this.state.warehouse.contact.phone}
                </p>
                <p className="email">
                  {!!this.state.warehouse && this.state.warehouse.contact.email}
                </p>
              </div>
            </div>
          </section>
          <section className="warehouse__inventory">
            <table className="inventory">
              <thead className="inventory__header">
                <tr className="inventory__header-categories">
                  <th
                    className="inventory__header-category inventory__header-category--1"
                    colSpan="1"
                  >
                    INVENTORY ITEM
                    <img
                      className="inventory__header-icon"
                      src={sort}
                      alt=""
                      onClick={() => {
                        this.sortByValue("itemName");
                      }}
                    />
                  </th>
                  <th
                    className="inventory__header-category inventory__header-category--2"
                    colSpan="1"
                  >
                    CATEGORY
                    <img
                      className="inventory__header-icon"
                      src={sort}
                      alt=""
                      onClick={() => {
                        this.sortByValue("category");
                      }}
                    />
                  </th>
                  <th
                    className="inventory__header-category inventory__header-category--3"
                    colSpan="1"
                  >
                    STATUS
                    <img
                      className="inventory__header-icon"
                      src={sort}
                      alt=""
                      onClick={() => {
                        this.sortByValue("status");
                      }}
                    />
                  </th>
                  <th
                    className="inventory__header-category inventory__header-category--4"
                    colSpan="1"
                  >
                    QTY
                    <img
                      className="inventory__header-icon"
                      src={sort}
                      alt=""
                      onClick={() => {
                        this.sortByValue("quantity");
                      }}
                    />
                  </th>
                  <th
                    className="inventory__header-category inventory__header-category--5"
                    colSpan="1"
                  >
                    ACTIONS
                  </th>
                </tr>
              </thead>
              <tbody className="inventory__items">
                {this.state.inventory &&
                  this.state.inventory.map((item) => {
                    return (
                      <tr className="item__details" key={item.id}>
                        <td>
                          <Link
                            className="item__name"
                            to={`/warehouse/${this.props.match.params.warehouseId}/inventory/${item.id}`}
                          >
                            {item.itemName}
                            <img className="item__icon" src={chevron} alt="" />
                          </Link>
                        </td>
                        <td className="item__type">{item.category}</td>
                        <td
                          className={
                            item.status.toUpperCase() === "IN STOCK"
                              ? "item__value item__value--in"
                              : "item__value item__value--out"
                          }
                        >
                          {item.status.toUpperCase()}
                        </td>
                        <td className="item__amount">{item.quantity}</td>
                        <td className="item__icons">
                          <img
                            className="item__delete"
                            src={deleteOutline}
                            onClick={()=> this.setDeleteItem(item.id, item.itemName)}
                            alt=""
                          />
                          <Link
                            to={`/warehouse/${this.props.match.params.warehouseId}/inventory/${item.id}/edit`}
                          >
                            <img className="item__edit" src={edit} alt="" />
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </section>
          <section className="warehouse__inventory-mobile">
            {this.state.inventory &&
              this.state.inventory.map((item) => {
                return (
                  <div className="inventory" key={item.id}>
                    <div className="inventory__item">
                      <div className="item__name">
                        <h4 className="heading">INVENTORY ITEM</h4>
                        <Link
                          to={`/warehouse/${this.props.match.params.warehouseId}/inventory/${item.id}`}
                        >
                          <div className="link">
                            <p className="item">{item.itemName}</p>
                            <img className="icon" src={chevron} alt="" />
                          </div>
                        </Link>
                      </div>
                      <div className="item__status">
                        <h4 className="heading">STATUS</h4>
                        <p
                          className={
                            item.status.toUpperCase() === "IN STOCK"
                              ? "value value__in"
                              : "value value__out"
                          }
                        >
                          {item.status.toUpperCase()}
                        </p>
                      </div>
                    </div>
                    <div className="inventory__info">
                      <div className="item__category">
                        <h4 className="heading">CATEGORY</h4>
                        <p className="type">{item.category}</p>
                      </div>
                      <div className="item__quantity">
                        <h4 className="heading">QTY</h4>
                        <p className="amount">{item.quantity}</p>
                      </div>
                    </div>
                    <div className="inventory__buttons">
                      <img
                        className="inventory__delete"
                        src={deleteOutline}
                        onClick={()=>this.setDeleteItem(item.id,item.itemName)}
                        alt=""
                      />
                      <Link
                        to={`/warehouse/${this.props.match.params.warehouseId}/inventory/${item.id}/edit`}
                      >
                        <img className="inventory__edit" src={edit} alt="" />
                      </Link>
                    </div>
                  </div>
                );
              })}
          </section>
        </div>
      </>
    );
  }
}

export default Warehouse;
