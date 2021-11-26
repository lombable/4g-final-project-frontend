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
import Sidebar from "./components/Sidebar";
import './App.css'
import ClientLogin from "./views/ClientLogin"
import AdminTables from "./views/AdminTables";
import TableCreation from "./views/TableCreation";

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
            </Routes>
    </Router >
  );
}

export default App;
