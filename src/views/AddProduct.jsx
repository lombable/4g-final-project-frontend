import React from "react";
import Sidebar from "../components/Sidebar";
import { useContext, useState } from "react";
import { Context } from "../store/appContext";

const AddProducts = () => {

    const { actions, store } = useContext(Context);

    const [formData, setFormData] = useState({
        table: ""
    });

    const onChange = (e) => {
        setFormData(e.target.value);
        console.log(e);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(formData, store);
        actions.addTable(formData);
    }

    return (
        <div className="container-fluid overflow-hidden">
            <div className="row vh-100 overflow-auto">
                <div className="col-4 col-sm-3 col-xl-2 px-sm-2 px-0 bg-light d-flex sticky-top">
                    <Sidebar />
                </div>
                <div className="col-md-8">
                    <div className="mx-4 col d-flex flex-column h-sm-100">
                        <form className="border border-light pt-5" onSubmit={onSubmit}>

                            <p className="h4 mb-4 text-center">Add a Product</p>

                            <label for="textInput">Name of the product</label>
                            <input type="text" id="productName" className="form-control mb-4" placeholder="Pizza Margharita" />

                            <label for="textInput">Price</label>
                            <input type="text" id="productPrice" className="form-control mb-4" placeholder="$ 6.500 clp" />

                            <label for="productCategory">Category of the new product:</label><br /><br />
                            <select className="browser-default custom-select mb-4" id="productCategory">
                                <option value="" disabled="" selected="">Category</option>
                                <option value="1">Drinks</option>
                                <option value="2">Pizzas</option>
                                <option value="3">Pastas</option>
                                <option value="3">Burgers</option>
                                <option value="3">Meat</option>
                                <option value="3">Desserts</option>
                            </select>
                            <br />
                            <label for="textarea">Description of the product</label>
                            <textarea id="textarea" className="form-control mb-4" placeholder="Description"></textarea>

                            <div className="custom-control custom-checkbox mb-4">
                                <input type="checkbox" className="custom-control-input" id="checkbox" />
                                <label className="custom-control-label" for="checkbox">Is it available right now?</label>
                            </div>
                            <div className="d-grid gap-2">
                                <button className="btn btn-success" type="submit">Add product</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddProducts;