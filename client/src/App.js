import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import AddNewInventory from "./components/AddNewInventory/AddNewInventory";
import WarehouseDetails from "./pages/WarehouseDetails/WarehouseDetails";
import ItemDetails from "./pages/ItemDetails/ItemDetails";
import ItemEdit from "./pages/ItemEdit/ItemEdit";
import WarehouseEdit from './pages/WarehouseEdit/WarehouseEdit';
import WarehouseAdd from './pages/WarehouseAdd/WarehouseAdd';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>

        <Route path="/" exact component={Home}/>
        {/* <Route path="/warehouse/:warehouseId/inventory" component={WarehouseInventory} /> */}
        <Route path="/warehouse/:warehouseId/inventory/:itemId/edit" component={ItemEdit}/>
        <Route path="/warehouse/:warehouseId/inventory/:itemId" component={ItemDetails}/>
        <Route path="/warehouse/:warehouseId/inventory/add" component={AddNewInventory}/>
        <Route path="/warehouse/:warehouseId/edit" component={WarehouseEdit} />
        <Route path="/warehouse/:warehouseId" component={WarehouseDetails} />
        <Route path="/warehouse/add" component={WarehouseAdd} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
