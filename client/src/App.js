import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        {/* <Route path="/warehouse/:warehouseid" component={Warehouse} /> */}
        {/* <Route path="/warehouse/edit/:warehouseid" component={WarehouseEdit} /> */}
        {/* <Route path="/warehouse/add" component={WarehouseAdd} /> */}
        {/* <Route path="/warehouse/inventory/:warehouseid" component={WarehouseInventory} /> */}
        {/* <Route path="/inventory" component={Inventory} /> */}
        {/* <Route path="/inventory/:itemid" component={ItemDetails} /> */}
        {/* <Route path="/inventory/edit/:itemid" component={ItemEdit} /> */}
        {/* <Route path="/inventory/add" component={ItemAdd} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
