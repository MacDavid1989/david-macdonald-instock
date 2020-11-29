import React from 'react';

import AddNewItemHeader from '../AddNewItemHeader/AddNewItemHeader';
import ItemForm from '../ItemForm/ItemForm';

import './AddNewInventory.scss';


const AddNewInventory = (props) => {
    return (
        <div className="new-inventory">
            <AddNewItemHeader parentProps={props} />
            <ItemForm parentProps={props}/>
        </div>
    );
}

export default AddNewInventory;
