import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FiDollarSign } from "react-icons/fi";
import { useCart } from "./CartContext.jsx";

const SingleProduct = () => {
    const { id } = useParams();
    const [item, setItem] = useState("");
    const { cart, setCart } = useCart();

    const addToCart = () => {
        setCart([...cart, item]);
    };

    const getData = async () => {
        try {
            const data = await fetch(`https://fakestoreapi.com/products/${id}`);
            const res = await data.json();
            setItem(res);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="container">
            <div className="row mt-5 mb-5">
                <div className="col-md-10 offset-md-1">
                    <div className="card rounded-0 shadow shadow-1 py-5">
                        <div className="card-body">
                            <div className="d-flex flex-column flex-md-row align-items-center">
                                <div className="mb-4 mb-md-0 text-center">
                                    <img
                                        src={item.image}

                                        style={{ width: "100%", height: "500px" }}
                                    />
                                </div>
                                <div className="ps-md-5">
                                    <h2>{item.title}</h2>
                                    <p>{item.description}</p>
                                    <h5>
                                        <strong>Category:</strong> {item.category}
                                    </h5>
                                    <h4 className="my-3">
                                        <strong>Price:</strong> <FiDollarSign /> {item.price}
                                    </h4>
                                    <div className="d-flex flex-wrap gap-2">
                                        <button className="btn btn-primary">Buy Now</button>
                                        <button onClick={addToCart} className="btn btn-warning">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;
