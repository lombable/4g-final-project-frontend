import React from "react";
import "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./views/Home"
import WorkerRegister from "./views/WorkerRegister"
import Login from "./views/LogIn";
import AdminPanel from "./views/AdminPanel";
import './App.css'
import ClientLogin from "./views/ClientLogin"
import AdminTables from "./views/AdminTables";
import TableCreation from "./views/TableCreation";
import injectContext from "./store/appContext";
import Users from "./views/Users";
import Products from "./views/Products"
import AddProducts from "./views/AddProduct";

function App() {
  return (
    <Router>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/home" element={<Home />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/client-login" element={<ClientLogin />} />
              <Route exact path="/worker-register" element={<WorkerRegister />} />
              <Route exact path="/admin-panel" element={<AdminPanel />} />
              <Route exact path="/admin-tables" element={<AdminTables />} />
              <Route exact path="/table-creation" element={<TableCreation />} />
              <Route exact path="/users" element={<Users />} />
              <Route exact path="/products" element={<Products />}/>
              <Route exact path="/add-product" element={<AddProducts />}/>
            </Routes>
    </Router >
  );
}

export default injectContext(App);
