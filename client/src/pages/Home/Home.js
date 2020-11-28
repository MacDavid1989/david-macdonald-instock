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
    deleteObj: {name:"", id: ""},
  };

  componentDidMount() {
    axios
      .get(appUrl + "/warehouse")
      .then((response) => {
        this.setState({
          warehousesConst: response.data,
          warehouses: response.data
        });
      })
      .catch((error) => console.log(error));
  }

  setDeleteWarehouse = (id, name) => {
    console.log(name, id)
    this.setState({
      deleteObj: { id: id, name: name },
    });
  };

  updateWarehouses = (data) => {
    this.setState({
      warehouseConst: data,
      warehouses: data,
      deleteObj: {name:"", id: ""}
    })
  }

  updateDisplay = (event) => {
    let updatedList = this.state.warehouseConst;
    console.log(event);


  }

  render() {
    return (
      <>
        <DeleteModal updateWarehouse={this.updateWarehouses} deleteThing={this.state.deleteObj} />
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
