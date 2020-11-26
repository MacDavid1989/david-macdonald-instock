import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import AddnewInventory from "./components/AddNewInventory/AddNewInventory";
import Warehouse from "./pages/Warehouse/Warehouse";
import ItemDetails from "./pages/ItemDetails/ItemDetails";
import ItemEdit from "./pages/ItemEdit/ItemEdit";

import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        {/* <Route path="/warehouse/:warehouseId/edit" component={WarehouseEdit} /> */}
        {/* <Route path="/warehouse/add" component={WarehouseAdd} /> */}
        {/* <Route path="/warehouse/:warehouseId/inventory" component={WarehouseInventory} /> */}
        <Route
          exact
          path="/warehouse/:warehouseId/inventory/:itemId/edit"
          component={ItemEdit}
        />
        <Route
          path="/warehouse/:warehouseId/inventory/add"
          component={AddnewInventory}
        />
        <Route
          exact
          path="/warehouse/:warehouseId/inventory/:itemId"
          component={ItemDetails}
        />
        <Route exact path="/warehouse/:warehouseId" component={Warehouse} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
