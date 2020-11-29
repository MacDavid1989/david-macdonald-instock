import React from 'react';

import backArrow from '../../assets/icons/arrow_back-24px.svg';

import './AddNewItemHeader.scss'

const AddNewItemHeader = (props) => {
    console.log(props)
    return (
        <div className="add-item-header">
            <img className="add-item-header__back" onClick={props.props.history.goBack} src={backArrow} alt="back arrow"/>
            <h1 className="add-item-header__title">Add New Inventory Item</h1>
        </div>
    );
}

export default AddNewItemHeader;
