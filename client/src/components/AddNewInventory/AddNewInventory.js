import React from 'react';

import AddNewItemHeader from '../AddNewItemHeader/AddNewItemHeader';
import ItemForm from '../ItemForm/ItemForm';

import './AddNewInventory.scss';


const AddNewInventory = () => {
    return (
        <div className="new-inventory">
            <AddNewItemHeader />
            <ItemForm />
        </div>
    );
}

export default AddNewInventory;
