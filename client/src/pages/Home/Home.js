
import WarehouseNav from '../../components/WarehouseNav/WarehouseNav';
import WarehouseList from '../../components/WarehouseList/WarehouseList';
import {appUrl} from '../../utils/axios';
import axios from 'axios';
import React, { Component } from 'react';
import './Home.scss';
import WarehousesLabels from '../../components/WarehouseLabels/WarehouseLabels';


class Home extends Component {
    state = {
        warehouses: []
    }

    componentDidMount() {
      axios.get(appUrl + "/warehouse")
      .then((response) => {
        this.setState({
          warehouses: response.data,
        });
      })
      .catch((error) => console.log(error));
    }

    render() {
        return (
            <div className="warehouse__container">
                <WarehouseNav />
                <WarehousesLabels />
                <WarehouseList
                warehouses={this.state.warehouses} 
                />
            </div>
        );
    }
}



export default Home;