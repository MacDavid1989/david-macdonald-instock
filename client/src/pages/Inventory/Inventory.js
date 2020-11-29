import React, { Component, Fragment } from "react";
import { appUrl } from "../../utils/axios";
import axios from "axios";
import InventoryLabels from "../../components/InventoryLabels/InventoryLabels";
import InventoryNav from "../../components/InventoryNav/InventoryNav";
import InventoryList from "../../components/InventoryList/InventoryList";
import "./Inventory.scss";
import DeleteModal from "../../components/DeleteModal/DeleteModal";

//http://localhost:8080/inventory
class Inventory extends Component {
  state = {
    inventories: null,
    deleteObj: {
      name: "",
      id: "",
      header: "inventory item",
      body: "the inventory list.",
    },
    inOrder: true,
    inventoryConst: [],
  };

  getInventories = () => {
    axios
      .get(appUrl + "/inventory")
      .then((response) => {
        const data = response.data;
        console.log(data);
        this.setState({
          inventories: data,
          inventoryConst: data,
          deleteObj: {
            name: "",
            id: "",
            header: "inventory item",
            body: "the inventory list.",
          },
        });
      })
      .catch((error) => console.log(error));
  };

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
    axios.delete(`http://localhost:8080/inventory/${id}`).then((res) => {
      this.getInventories();
    });
  };

  //sorts the values
  sortByValue = (key1) => {
    let tempData = [];
    let sortedData = [];
    for (let i = 0; i < this.state.inventoryConst.length; i++) {
      tempData.push(this.state.inventoryConst[i]);
    }

    if (typeof(tempData[0][key1]) !== "number") {
      if (this.state.inOrder) {
        sortedData = tempData.sort(function (a, b) {
          return a[key1].localeCompare(b[key1]);
        });
      } else {
        sortedData = tempData.sort(function (a, b) {
          return b[key1].localeCompare(a[key1]);
        });
      }
    }else{
      if (this.state.inOrder) {
        sortedData = tempData.sort(function (a, b) {
          return a[key1] - b[key1];
        });
      } else {
        sortedData = tempData.sort(function (a, b) {
          return b[key1] - a[key1];
        });
      }
    }

    this.setState({
      inventories: sortedData,
      inOrder: !this.state.inOrder,
    });
  };

  render() {
    return (
      <Fragment>
        <DeleteModal
          deleteThing={this.state.deleteObj}
          onDeleteRoute={this.deleteRoute}
        />
        <div className="inventory__container">
          <InventoryNav />
          <InventoryLabels onSort={this.sortByValue}/>
          {this.state.inventories && (
            <InventoryList
              inventories={this.state.inventories}
              setDelete={this.setDeleteWarehouse}
            />
          )}
        </div>
      </Fragment>
    );
  }
}

export default Inventory;
