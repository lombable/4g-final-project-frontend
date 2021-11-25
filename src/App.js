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

function App() {
  return (
    <Router>
      <div class="container-fluid overflow-hidden">
        <div class="row vh-100 overflow-auto">
          {/* <div className="col-4 col-sm-3 col-xl-2 px-sm-2 px-0 bg-light d-flex sticky-top">
            <Sidebar />
          </div> */}
          <div className="col-md-12">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/home" element={<Home />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/client-login" element={<ClientLogin />} />
              <Route exact path="/worker-register" element={<WorkerRegister />} />
              <Route exact path="/admin-panel" element={<AdminPanel />} />
            </Routes>
          </div>
        </div>
      </div >
    </Router >
  );
}

export default App;
