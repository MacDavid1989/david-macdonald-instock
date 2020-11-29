import React, { Component, Fragment } from 'react';
import {appUrl} from '../../utils/axios';
import axios from 'axios';
import InventoryLabels from '../../components/InventoryLabels/InventoryLabels';
import InventoryNav from '../../components/InventoryNav/InventoryNav';
import InventoryList from '../../components/InventoryList/InventoryList';
import './Inventory.scss';
import DeleteModal from "../../components/DeleteModal/DeleteModal";

//http://localhost:8080/inventory
class Inventory extends Component {
    state = {
        inventories: null,
        deleteObj: { name: "", id: "" , header: "inventory item", body: "the inventory list."},
    }

    getInventories = () => {
      axios.get(appUrl + "/inventory")
      .then((response) => {
        const data = response.data
        this.setState({ 
          inventories: data,
          deleteObj: { name: "", id: "" , header: "inventory item", body: "the inventory list."},
        });
      })
     .catch((error) => console.log(error));
    }

    componentDidMount() {
        this.getInventories();
    }

  //when a user pressed the trash can they 
  //set the delete object for the delete modal
  setDeleteWarehouse = (id, name) => {
    this.setState({
      deleteObj: { ...this.state.deleteObj, id: id, name: name },
    });
  };

    deleteRoute = (id) => {
        axios
          .delete(`http://localhost:8080/inventory/${id}`)
          .then((res) => {
            this.getInventories();
          });
      }

    render() {
        return (
            <Fragment>
              <DeleteModal
                deleteThing={this.state.deleteObj}
                onDeleteRoute={this.deleteRoute}
              />
              <div className="inventory__container">
                <InventoryNav />
                <InventoryLabels />
                {this.state.inventories&&
                  <InventoryList 
                    inventories={this.state.inventories} 
                    setDelete={this.setDeleteWarehouse} 
                  />
                }
              </div>
            </Fragment>

        );
    }
}

export default Inventory;
