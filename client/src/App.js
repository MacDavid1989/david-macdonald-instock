import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        {/* <Route path="/warehouse/:warehouseId" component={Warehouse} /> */}
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
