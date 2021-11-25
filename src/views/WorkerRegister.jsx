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
                          <input type="text" id="form3Example1m" className="form-control form-control-lg" placeholder="Fulanito" />
                          <label className="form-label" for="form3Example1m">First name</label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input type="text" placeholder="Pérez" id="form3Example1n" className="form-control form-control-lg" />
                          <label className="form-label" for="form3Example1n">Last name</label>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input type="text" id="form3Example1m1" placeholder="12.345.678-K" className="form-control form-control-lg" />
                          <label className="form-label" for="form3Example1m1">R.U.T number</label>
                        </div>
                      </div>
                    </div>

                    <div className="form-outline mb-4">
                      <input type="text" placeholder="Av. Manquehue Sur 350, Oficina 110, Las Condes, Región Metropolitana" id="form3Example8" className="form-control form-control-lg" />
                      <label className="form-label" for="form3Example8">Home Address</label>
                    </div>

                    <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">

                      <h6 className="mb-0 me-4">Gender: </h6>

                      <div className="form-check form-check-inline mb-0 me-4">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="femaleGender"
                          value="option1" />
                        <label className="form-check-label" for="femaleGender">Female</label>
                      </div>

                      <div className="form-check form-check-inline mb-0 me-4">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="maleGender"
                          value="option2" />
                        <label className="form-check-label" for="maleGender">Male</label>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4">

                        <select className="select">
                          <option value="1">Please select the restaurant location</option>
                          <option value="2">Región Metropolitana</option>
                          <option value="3">Región de Valparaiso</option>
                          <option value="4">Región de Los Lagos</option>
                        </select>

                      </div>
                      <div className="col-md-6 mb-4">

                        <select className="select">
                          <option value="1">City</option>
                          <option value="2">Santiago Centro</option>
                          <option value="3">Macul</option>
                          <option value="4">Ñuñoa</option>
                        </select>

                      </div>
                    </div>

                    <div className="form-outline mb-4">
                      <input type="text" id="form3Example9" className="form-control form-control-lg" />
                      <label className="form-label" for="form3Example9">Date of Birth</label>
                    </div>

                    <div className="form-outline mb-4">
                      <input type="text" id="form3Example97" className="form-control form-control-lg" />
                      <label className="form-label" for="form3Example97">Email</label>
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