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
    deleteObj: { name: "", id: "" },
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

  setDeleteWarehouse = (id, name) => {
    console.log(name, id);
    this.setState({
      deleteObj: { id: id, name: name },
    });
  };

  updateWarehouses = (data) => {
    this.setState({
      warehouseConst: data,
      warehouses: data,
      deleteObj: { name: "", id: "" },
    });
  };

  updateDisplay = (data) => {
    console.log(data);
    //need to make a deep copy or else the main copy of the array will change
    let updatedList = [];
    for (let i = 0; i < this.state.warehouseConst.length; i++) {
        updatedList.push(this.state.warehouseConst[i])
    }
    
    if (data.trim().length > 0) {
      for (let i = 0; i < updatedList.length; i++) {
        if (!updatedList[i].name.toLowerCase().includes(data.toLowerCase())
        && !updatedList[i].address.toLowerCase().includes(data.toLowerCase())
        && !updatedList[i].city.toLowerCase().includes(data.toLowerCase())
        && !updatedList[i].country.toLowerCase().includes(data.toLowerCase())
        && !updatedList[i].contact.email.toLowerCase().includes(data.toLowerCase())
        && !updatedList[i].contact.phone.toLowerCase().includes(data.toLowerCase()) ) {
          updatedList.splice(i, 1);
          i--;
        }
      }
      this.setState({
        warehouses: updatedList
      });
    }else{
      this.setState({
        warehouses: this.state.warehouseConst
      });
    }
  };

  render() {
    return (
      <>
        <DeleteModal
          updateWarehouse={this.updateWarehouses}
          deleteThing={this.state.deleteObj}
        />
        <div className="warehouse__container">
          <WarehouseNav updateDisplay={this.updateDisplay} />
          <WarehousesLabels />
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
