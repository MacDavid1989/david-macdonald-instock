import './App.scss';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import Warehouse from './pages/Warehouse/Warehouse';
import Header from './components/Header/Header';

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/warehouse/:warehouseId" component={Warehouse} />
        {/* <Route path="/warehouse/:warehouseId/edit" component={WarehouseEdit} /> */}
        {/* <Route path="/warehouse/add" component={WarehouseAdd} /> */}
        {/* <Route path="/warehouse/:warehouseId/inventory" component={WarehouseInventory} /> */}
        {/* <Route path="/warehouse/:warehouseId/inventory/:itemId" component={ItemDetails} /> */}
        {/* <Route path="/warehouse/:warehouseId/inventory/:itemId/edit" component={ItemEdit} /> */}
        {/* <Route path="/warehouse/:warehouseId/inventory/add" component={ItemAdd} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
