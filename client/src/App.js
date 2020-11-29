import "./App.scss";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import AddNewInventory from "./components/AddNewInventory/AddNewInventory";
import WarehouseDetails from "./pages/WarehouseDetails/WarehouseDetails";
import ItemDetails from "./pages/ItemDetails/ItemDetails";
import ItemEdit from "./pages/ItemEdit/ItemEdit";
import WarehouseEdit from './pages/WarehouseEdit/WarehouseEdit';
import WarehouseAdd from './pages/WarehouseAdd/WarehouseAdd';
import Copyright from './components/Copyright/Copyright';
import Inventory from './pages/Inventory/Inventory';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <Redirect to="/warehouse"/>
        </Route>
        <Route path="/inventory/add" component={AddNewInventory}/>
        <Route path="/inventory" component={Inventory}/>
        <Route path="/warehouse/add" component={WarehouseAdd} />
        <Route path="/warehouse/:warehouseId/inventory/:itemId/edit" component={ItemEdit}/>
        <Route path="/warehouse/:warehouseId/inventory/:itemId" component={ItemDetails}/>
        <Route path="/warehouse/:warehouseId/edit" component={WarehouseEdit} />
        <Route path="/warehouse/:warehouseId" component={WarehouseDetails} />
        <Route path="/warehouse" component={Home}/>
      </Switch>
      <Copyright />
    </BrowserRouter>
  );
}

export default App;
