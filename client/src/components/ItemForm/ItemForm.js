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

  render() {
    return (
      <div className="item-form-com">
        <h3 className="item-form-com__title">Item Detials</h3>

        <form>
          <div>
            <label for="name">item Name</label>
            <input type="text" name="name" />
          </div>

          <div>
            <label for="name">Description</label>
            <textarea></textarea>
          </div>

          <div>
            <label name="category">Category</label>
            <select>
              <option defaultValue hidden>Pick A Category</option>
              <option value="Accessories">Accessories</option>
              <option value="Apparel">Apparel</option>
              <option value="Electronics">Electronics</option>
              <option value="Gear">Gear</option>
              <option value="Health">Health</option>
            </select>
          </div>
        </form>
      </div>
    );
  }
}

export default ItemForm;
