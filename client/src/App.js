import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
// import AddNewInventory from "./components/ItemAdd/ItemAdd";
import WarehouseDetails from "./pages/WarehouseDetails/WarehouseDetails";
import ItemDetails from "./pages/ItemDetails/ItemDetails";
import ItemEdit from "./pages/ItemEdit/ItemEdit";
import WarehouseEdit from './pages/WarehouseEdit/WarehouseEdit';
import WarehouseAdd from './pages/WarehouseAdd/WarehouseAdd';
import Copyright from './components/Copyright/Copyright';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home}/>
        {/* <Route path="/inventory/add" exact component={AddNewInventory}/> */}
        {/* <Route path="/inventory" exact component={InventoryList}/> */}
        <Route path="/warehouse/add" component={WarehouseAdd} />
        <Route path="/warehouse/:warehouseId/inventory/:itemId/edit" component={ItemEdit}/>
        <Route path="/warehouse/:warehouseId/inventory/:itemId" component={ItemDetails}/>
        <Route path="/warehouse/:warehouseId/edit" component={WarehouseEdit} />
        <Route path="/warehouse/:warehouseId" component={WarehouseDetails} />
      </Switch>
      <Copyright />
    </BrowserRouter>
  );
}

export default App;
