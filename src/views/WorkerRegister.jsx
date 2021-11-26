import React from "react";
import "bootstrap";
import '../App.css';
import Navbar from '../components/Navbar'


const ClientRegister = () => {
  return (
    <><Navbar /><section className="h-100" style={{ backgroundColor: "#d4d6d9" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="card card-registration my-4">
              <div className="row g-0">
                <div className="col-xl-6 d-none d-xl-block">
                  <img
                    src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-registration/img4.jpg"
                    alt="Sample photo"
                    className="img-fluid rounded" />
                </div>
                <div className="col-xl-6">
                  <div className="card-body p-md-5 text-black">
                    <h3 className="mb-5 text-uppercase">Worker Registration Form</h3>

                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input type="text" id="form3Example1m" name="first_name" className="form-control form-control-lg" placeholder="Fulanito" />
                          <label className="form-label" for="form3Example1m">First name</label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input type="text" name="last_name" placeholder="Pérez" id="form3Example1n" className="form-control form-control-lg" />
                          <label className="form-label" for="form3Example1n">Last name</label>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input type="text" id="form3Example1m1" name="rut" placeholder="12.345.678-K" className="form-control form-control-lg" />
                          <label className="form-label" for="form3Example1m1">R.U.T number</label>
                        </div>
                      </div>
                    </div>

                    <div className="form-outline mb-4">
                      <input type="text" name="address" placeholder="Av. Manquehue Sur 350, Oficina 110, Las Condes, Región Metropolitana" id="form3Example8" className="form-control form-control-lg" />
                      <label className="form-label" for="form3Example8">Home Address</label>
                    </div>

                       <div className="row">
                      
                      <div className="col-md-6 mb-4">

                        <select className="select" name="city">
                          <option value="1">City</option>
                          <option value="2">Santiago Centro</option>
                          <option value="3">Macul</option>
                          <option value="4">Ñuñoa</option>
                        </select>

                      </div>
                    </div>

                    <div className="form-outline mb-4">
                      <input type="text" name="dob" id="form3Example9" className="form-control form-control-lg" />
                      <label className="form-label" for="form3Example9">Date of Birth</label>
                    </div>

                    <div className="form-outline mb-4">
                      <input type="text" id="form3Example97" name="email" className="form-control form-control-lg" />
                      <label className="form-label" for="form3Example97">Email</label>
                    </div>

                    <div className="form-outline mb-4">
                      <input type="password" id="form3Example97" name="password" className="form-control form-control-lg" />
                      <label className="form-label" for="form3Example97">Password</label>
                    </div>

                    <div className="d-flex justify-content-end pt-3">
                      <button type="button" className="btn btn-light btn-lg">Reset all</button>
                      <button type="button" className="btn btn-warning btn-lg ms-2">Submit form</button>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section></>
  )
}

export default ClientRegister;