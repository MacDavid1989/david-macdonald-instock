import React, { Component } from 'react';

import './ItemForm.scss';

class ItemForm extends Component {

    state={
        name: "",
        description: "",
        category: "",
        status: true,
        qty: 0,
        warehouse: ""
    }

    render() {
        return (
            <div className="item-form-com">
                <h3 className="item-form-com__title">Item Detials</h3>

                <form>

                </form>
            </div>
        );
    }
}

export default ItemForm;
