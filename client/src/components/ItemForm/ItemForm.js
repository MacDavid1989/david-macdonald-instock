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
        <form>
          <div>
            <h3 className="item-form-com__title">Item Detials</h3>
            <div>
              <label for="name">item Name</label>
              <input type="text" name="name" />
            </div>

            <div>
              <label for="name">Description</label>
              <textarea></textarea>
            </div>

            <div>
              <label for="category">Category</label>
              <select name="category">
                <option defaultValue hidden>
                  Pick A Category
                </option>
                <option value="Accessories">Accessories</option>
                <option value="Apparel">Apparel</option>
                <option value="Electronics">Electronics</option>
                <option value="Gear">Gear</option>
                <option value="Health">Health</option>
              </select>
            </div>
          </div>
          <div>
            <h3 className="item-form-com__title">Item Availability</h3>
            <div>
                <p>Status</p>
                <input type="radio" name="status" value={true}/>
                <label>In Stock</label>
                <input type="radio" name="status" value={false}/>
                <label>Out of Stock</label>
            </div>
            <div>
                <label for="qty">Quantity</label>
                <input type="number" name="qty" />
            </div>
            <div>
              <label name="warehouse">Warehouse</label>
              <select name="Warehouse">
                <option defaultValue hidden>
                  Please Select
                </option>
              </select>
            </div>
          </div>
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
