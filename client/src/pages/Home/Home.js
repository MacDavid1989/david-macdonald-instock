import WarehouseNav from "../../components/WarehouseNav/WarehouseNav";
import WarehouseList from "../../components/WarehouseList/WarehouseList";
import { appUrl } from "../../utils/axios";
import axios from "axios";
import React, { Component } from "react";
import "./Home.scss";
import WarehousesLabels from "../../components/WarehouseLabels/WarehouseLabels";
import DeleteModal from "../../components/DeleteModal/DeleteModal";

class Home extends Component {
  state = {
    warehouseConst: [],
    warehouses: [],
    deleteObj: { name: "", id: "" , header: "warehouse", body: "the list of warehouses."},
    inOrder: true,
  };

  componentDidMount() {
    axios
      .get(appUrl + "/warehouse")
      .then((response) => {
        this.setState({
          warehouseConst: response.data,
          warehouses: response.data,
        });
      })
      .catch((error) => console.log(error));
  }

  //when a user pressed the trash can they 
  //set the delete object for the delete modal
  setDeleteWarehouse = (id, name) => {
    this.setState({
      deleteObj: { ...this.state.deleteObj, id: id, name: name },
    });
  };

  //this updates the state AFTER a delete is done
  //I reset the  deleteObj to empty so the window will close
  updateWarehouses = (data) => {
    this.setState({
      warehouseConst: data,
      warehouses: data,
      deleteObj: { name: "", id: "" },
    });
  };

  //for searching in search bar
  updateDisplay = (data) => {
    //need to make a deep copy or else the main copy of the array will change
    let updatedList = [];
    for (let i = 0; i < this.state.warehouseConst.length; i++) {
      updatedList.push(this.state.warehouseConst[i]);
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
        warehouses: updatedList,
      });
    } else {
      this.setState({
        warehouses: this.state.warehouseConst,
      });
    }
  };

  //sorts the values
  sortByValue = (key1, key2) => {
    let tempData = [];
    let sortedData = [];
    for (let i = 0; i < this.state.warehouseConst.length; i++) {
      tempData.push(this.state.warehouseConst[i]);
    }

    if (key2) {
      if (this.state.inOrder) {
        sortedData = tempData.sort(function (a, b) {
          return a[key1][key2].localeCompare(b[key1][key2]);
        });
      } else {
        sortedData = tempData.sort(function (a, b) {
          return b[key1][key2].localeCompare(a[key1][key2]);
        });
      }
    } else {
      if (this.state.inOrder) {
        sortedData = tempData.sort(function (a, b) {
          return a[key1].localeCompare(b[key1]);
        });
      } else {
        sortedData = tempData.sort(function (a, b) {
          return b[key1].localeCompare(a[key1]);
        });
      }
    }

    this.setState({
      warehouses: sortedData,
      inOrder: !this.state.inOrder,
    });
  };

  //this is the route for deleting the warehouse
  deleteRoute = (id) => {
    axios
      .delete(`http://localhost:8080/warehouse/${id}`)
      .then((res) => {
        this.updateWarehouses(res.data.warehouses);
      });
  }

  render() {
    return (
      <>
        <DeleteModal
          deleteThing={this.state.deleteObj}
          onDeleteRoute={this.deleteRoute}
        />
        <div className="warehouse__container">
          <WarehouseNav updateDisplay={this.updateDisplay} />
          <WarehousesLabels onSort={this.sortByValue} />
          <WarehouseList
            warehouses={this.state.warehouses}
            setDelete={this.setDeleteWarehouse}
          />
        </div>
      </>
    );
  }
}

export default Home;
