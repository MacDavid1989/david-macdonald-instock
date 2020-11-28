import WarehouseNav from "../../components/WarehouseNav/WarehouseNav";
import WarehouseList from "../../components/WarehouseList/WarehouseList";
import { appUrl } from "../../utils/axios";
import axios from "axios";
import React, { Component } from "react";
import "./Home.scss";
import WarehousesLabels from "../../components/WarehouseLabels/WarehouseLabels";
import DeleteModal from "../../components/DeleteModal/DeleteModal";

class Home extends Component {
<<<<<<< HEAD
  state = {
    warehouses: [],
    deleteObj: {name:"", id: ""},
  };

  componentDidMount() {
    axios
      .get(appUrl + "/warehouse")
=======
    state = {
        warehouses: []
    }

    componentDidMount() {
      axios.get(appUrl + "/warehouse")
>>>>>>> develop
      .then((response) => {
        this.setState({
          warehouses: response.data,
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
      warehouses: data,
      deleteObj: {name:"", id: ""}
    })
    console.log("here", this.state.warehouses, data);
  }

  render() {
    return (
      <>
        <DeleteModal updateWarehouse={this.updateWarehouses} deleteThing={this.state.deleteObj} />
        <div className="warehouse__container">
          <WarehouseNav />
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
