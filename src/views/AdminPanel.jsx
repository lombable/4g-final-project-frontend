import React from "react";
import Sidebar from "../components/Sidebar";
import { useContext } from "react";

const AdminPanel = () => {

    // const { store, context } = useContext(context);

    // const tableGenerator = store.table.map((tables) => {
    //     return (
    //         <div class="card" style={{ width: "18rem" }}>
    //             <img src="../img/restaurant-table.jpg" class="card-img-top" alt="table" />
    //             <div class="card-body">
    //                 <p class="card-text text-center align-center">Mesa número {tables.table}</p>
    //             </div>
    //         </div>)
    // })

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
                                    <h3>Main view</h3>
                                    <p className="lead">Here you will find all available tables and what is going on with them.</p>
                                    <hr />
                                    <div class="card" style={{ width: "18rem" }}>
                                        <img src="../img/restaurant-table.jpg" class="card-img-top" alt="table" />
                                        <div class="card-body">
                                            <p class="card-text text-center align-center">Mesa número #</p>
                                        </div>
                                    </div>
                                    {/* {tableGenerator}                       */}
                                </div>
                            </main>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default AdminPanel;