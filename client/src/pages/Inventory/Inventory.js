import React, { Component } from 'react';
import {appUrl} from '../../utils/axios';
import axios from 'axios';
import InventoryLabels from '../../components/InventoryLabels/InventoryLabels';
import InventoryNav from '../../components/InventoryNav/InventoryNav';
import InventoryList from '../../components/InventoryList/InventoryList';
import './Inventory.scss';

//http://localhost:8080/inventory
class Inventory extends Component {
    state = {
        inventories: null
    }

    componentDidMount() {
      axios.get(appUrl + "/inventory")
      .then((response) => {
        const data = response.data
        this.setState({ 
          inventories: data,
        });
      })
      .catch((error) => console.log(error));
    }

    render() {
        return (
            <div className="inventory__container">
                <InventoryNav />
                <InventoryLabels />
                {this.state.inventories&&
                <InventoryList inventories={this.state.inventories} />
                }
            </div>
        );
    }
}

export default Inventory;