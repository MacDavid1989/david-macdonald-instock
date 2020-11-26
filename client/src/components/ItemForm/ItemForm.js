import React, { Component } from "react";
import axios from "axios";

import "./ItemForm.scss";

class ItemForm extends Component {
  state = {
    warehouseList: [],
    name: "",
    description: "",
    category: "",
    status: true,
    qty: 0,
    warehouse: "",
  };

  componentDidMount() {
    axios
      .get("http://localhost:8080/warehouse/")
      .then((res) => {
        this.setState({
          warehouseList: res.data,
        });
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }

  onNameChange = (e) => {
    this.setState({ name: e.target.value });
  };

  onDescChange = (e) => {
    this.setState({ description: e.target.value });
  };

  onCatChange = (e) => {
    this.setState({ category: e.target.value });
  };

  onStatusChange = (e) => {
    const s = e.target.value === "true";
    this.setState({
      status: s,
    });
  };

  onQtyChange = (e) => {
    this.setState({ qty: e.target.value });
  };

  onWarehouseChange = (e) => {
    this.setState({ warehouse: e.target.value });
  };

  onFormSubmit = (e) => {
    //error checkign
    if (!this.state.name || this.state.name.length <= 0) {
      return false;
    }
    if (!this.state.description || this.state.description.length <= 0) {
      return false;
    }
    if (!this.state.category || this.state.category.length <= 0) {
      return false;
    }
    //qty cannot be negative
    if (!this.state.qty || this.state.qty.length < 0) {
      return false;
    }
    if (!this.state.warehouse || this.state.warehouse.length <= 0) {
      return false;
    }

    e.preventDefualt();

    /* AXIOS REQUEST HERE */
  };

  render() {
    return (
      <div className="item-form-com">
        <form className="form" onSubmit={this.onFormSubmit}>
          <div className="form__wrapper">
            <section className="form__inner-wrap form__inner-wrap--top">
              <h3 className="item-form-com__title">Item Detials</h3>
              <div className="item-form-com__wrapper">
                <div className="item-form-com__wrapper">
                  <label id="name" htmlFor="name">
                    Item Name
                  </label>
                  <input
                    required
                    className="item-form-com__input"
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.onNameChange}
                    placeholder="Item Name"
                  />
                </div>

                <div className="item-form-com__wrapper">
                  <label id="desc" htmlFor="name">
                    Description
                  </label>
                  <textarea
                    required
                    placeholder="Please enter a brief item description..."
                    className="item-form-com__input item-form-com__input--text-area"
                    onChange={this.onDescChange}
                    value={this.state.description}
                  ></textarea>
                </div>

                <div className="item-form-com__wrapper">
                  <label id="cat" htmlFor="category">
                    Category
                  </label>
                  <select
                    required
                    name="category"
                    value={this.state.category}
                    onChange={this.onCatChange}
                    className="item-form-com__input item-form-com__input--select"
                  >
                    <option defaultValue value="default" hidden>
                      Please select
                    </option>
                    <option value="Accessories">Accessories</option>
                    <option value="Apparel">Apparel</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Gear">Gear</option>
                    <option value="Health">Health</option>
                  </select>
                </div>
              </div>
            </section>
            <section className="form__inner-wrap">
              <h3 className="item-form-com__title">Item Availability</h3>
              <div className="item-form-com__wrapper">
                <div className="item-form-com__wrapper">
                <label>Status</label>
                  <div className="item-form-com__wrapper item-form-com__wrapper--radio">
                    <div className="item-form-com__wrapper--radio-wrapper">
                      <input
                        className="item-form-com__radio"
                        type="radio"
                        name="status"
                        onChange={this.onStatusChange}
                        checked={this.state.status}
                        value={true}
                      />
                      <label>In Stock</label>
                    </div>
                    <div>
                      <input
                        className="item-form-com__radio"
                        type="radio"
                        name="status"
                        onChange={this.onStatusChange}
                        checked={!this.state.status}
                        value={false}
                      />
                      <label>Out of Stock</label>
                    </div>
                  </div>
                </div>
                <div className="item-form-com__wrapper">
                  <label id="qty" htmlFor="qty">
                    Quantity
                  </label>
                  <input
                    required
                    className="item-form-com__input"
                    type="number"
                    name="qty"
                  />
                </div>
                <div className="item-form-com__wrapper">
                  <label id="WH" name="warehouse">
                    Warehouse
                  </label>
                  <select
                    required
                    className="item-form-com__input item-form-com__input--select"
                    name="Warehouse"
                    onChange={this.onWarehouseChange}
                  >
                    <option defaultValue hidden>
                      Please Select
                    </option>
                    {this.state.warehouseList.map((data) => {
                      return (
                        <option key={data.id} value={data.id}>
                          {data.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
            </section>
          </div>
          <div className="form__btn-wrapper">
            <button className="form__btn" type="reset">Cancel</button>
            <button className="form__btn form__btn--add" type="submit"> + Add Item</button>
          </div>
        </form>
      </div>
    );
  }
}

export default ItemForm;
