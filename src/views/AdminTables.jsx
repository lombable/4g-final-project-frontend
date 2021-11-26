import React from "react";
import Sidebar from "../components/Sidebar";

const AdminTables = () => {
    return (
        <>
            <div class="container-fluid overflow-hidden">
                <div class="row vh-100 overflow-auto">
                    <div className="col-4 col-sm-3 col-xl-2 px-sm-2 px-0 bg-light d-flex sticky-top">
                        <Sidebar />
                    </div>
                    <div className="col-md-8">
                    <div className="mx-4 col d-flex flex-column h-sm-100">
                        <main className="row overflow-auto">
                            <div className="col pt-4">
                                <h3>Tables admin panel</h3>
                                <p className="lead">From here, you will be able to add and eliminate tables.</p>
                                <hr />
                            </div>
                            <div className="row">
                                <div className="col pt-4">
                                    <a className="btn btn-success text-center justify-content-around" href="/table-creation" role="button">Add a table</a>
                                </div>
                            </div>
                            <div className="row text-center">
                                <div className="col text-center pt-4">
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th scope="col">Table Number #</th>
                                                <th scope="col"></th>
                                                <th scope="col"></th>
                                                <th scope="col">Eliminate</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td></td>
                                                <td></td>
                                                <td>X</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </main>
                    </div></div></div></div>
        </>
    )
}

export default AdminTables;