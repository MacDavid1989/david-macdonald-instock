import React, { Component } from "react";

import "./ItemForm.scss";

class ItemForm extends Component {
  state = {
    name: "",
    description: "",
    category: "",
    status: true,
    qty: 0,
    warehouse: "",
  };

  checkStatus = (data) =>{
    if(data="in"){
      return this.state.status
    }else{
      return !this.state.status
    }
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
    this.setState({ status: e.target.value });
  };

  onQtyChange = (e) => {
    this.setState({ qty: e.target.value });
  };

  onWarehouseChange = (e) => {
    this.setState({ warehouse: e.target.value });
  };

  render() {
    return (
      <div className="item-form-com">
        <form>
          <section>
            <h3 className="item-form-com__title">Item Detials</h3>
            <div className="item-form-com__wrapper">
              <div className="item-form-com__wrapper">
                <label htmlFor="name">Item Name</label>
                <input
                  className="item-form-com__input"
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.onNameChange}
                  placeholder="Item Name"
                />
              </div>

              <div className="item-form-com__wrapper">
                <label htmlFor="name">Description</label>
                <textarea
                  placeholder="Please enter a brief item description..."
                  className="item-form-com__input item-form-com__input--text-area"
                  onChange={this.onDescChange}
                  value={this.state.description}
                ></textarea>
              </div>

              <div className="item-form-com__wrapper">
                <label htmlFor="category">Category</label>
                <select
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
          <section>
            <h3 className="item-form-com__title">Item Availability</h3>
            <div className="item-form-com__wrapper">
              <div className="item-form-com__wrapper">
                <p>Status</p>
                <div className="item-form-com__wrapper item-form-com__wrapper--radio">
                  <div className="item-form-com__wrapper--radio-wrapper">
                    <input
                      className="item-form-com__radio"
                      type="radio"
                      name="status"
                      value={ this.checkStatus("in")}
                    />
                    <label>In Stock</label>
                  </div>
                  <div>
                    <input
                      className="item-form-com__radio"
                      type="radio"
                      name="status"
                      value={this.checkStatus("in")}
                    />
                    <label>Out of Stock</label>
                  </div>
                </div>
              </div>
              <div className="item-form-com__wrapper">
                <label htmlFor="qty">Quantity</label>
                <input
                  className="item-form-com__input"
                  type="number"
                  name="qty"
                />
              </div>
              <div className="item-form-com__wrapper">
                <label name="warehouse">Warehouse</label>
                <select
                  className="item-form-com__input item-form-com__input--select"
                  name="Warehouse"
                  onChange={this.onWarehouseChange}
                >
                  <option defaultValue hidden>
                    Please Select
                  </option>
                </select>
              </div>
            </div>
          </section>
          <div>
            <button type="reset">Cancel</button>
            <button type="submit"> + Add Item</button>
          </div>
        </form>
      </div>
    );
  }
}

export default ItemForm;
