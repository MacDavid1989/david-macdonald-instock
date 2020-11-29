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

  //for searching in search bar
  updateDisplay = (data) => {
    //need to make a deep copy or else the main copy of the array will change
    let updatedList = [];
    for (let i = 0; i < this.state.inventoryConst.length; i++) {
      updatedList.push(this.state.inventoryConst[i]);
    }

    if (data.trim().length > 0) {
      for (let i = 0; i < updatedList.length; i++) {
        if (
          !updatedList[i].name.toLowerCase().includes(data.toLowerCase()) &&
          !updatedList[i].address.toLowerCase().includes(data.toLowerCase()) &&
          !updatedList[i].city.toLowerCase().includes(data.toLowerCase()) &&
          !updatedList[i].country.toLowerCase().includes(data.toLowerCase()) &&
          !updatedList[i].contact.name
            .toLowerCase()
            .includes(data.toLowerCase()) &&
          !updatedList[i].contact.email
            .toLowerCase()
            .includes(data.toLowerCase()) &&
          !updatedList[i].contact.phone
            .toLowerCase()
            .includes(data.toLowerCase())
        ) {
          updatedList.splice(i, 1);
          i--;
        }
      }
      this.setState({
        inventories: updatedList,
      });
    } else {
      this.setState({
        inventories: this.state.InventoryConst,
      });
    }
  };

  render() {
    return (
      <Fragment>
        <DeleteModal
          deleteThing={this.state.deleteObj}
          onDeleteRoute={this.deleteRoute}
        />
        <div className="inventory__container">
          <InventoryNav updateDisplay={this.updateDisplay}/>
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
