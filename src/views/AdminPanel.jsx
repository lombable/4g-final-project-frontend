import React from "react";

const AdminPanel = () => {
    return (
        <>
            <div className="mx-4 col d-flex flex-column h-sm-100">
                <main className="row overflow-auto">
                    <div className="col pt-4">
                        <h3>Main view</h3>
                        <p className="lead">Here you will find all available tables and what is going on with them.</p>
                        <hr />
                        <div class="card" style={{width: "18rem"}}>
                            <img src="../img/restaurant-table.jpg" class="card-img-top" alt="table" />
                            <div class="card-body">
                                <p class="card-text text-center align-center">Mesa número #</p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default AdminPanel;