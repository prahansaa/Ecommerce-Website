import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Products = () => {
    const [data, setData] = useState([]);
    const { category } = useParams();
    const navigate = useNavigate();

    const getData = async () => {
        try {
            const endpoint = category
                ? `https://fakestoreapi.com/products/category/${category}`
                : 'https://fakestoreapi.com/products';

            const response = await fetch(endpoint);
            const res = await response.json();
            setData(res);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getData();
    }, [category]); // refetch when category changes

    return (
        <div className="container">
            <h1 className="text-center mt-3">
                {category ? `Products in ${category}` : 'All Products'}
            </h1>
            <div className="row mt-3">
                {data.map((value) => (
                    <div className="col-md-3 mb-3" key={value.id}>
                        <div className="card rounded-0 shadow shadow-1">
                            <div className="card-body">
                                <img src={value.image} alt="" height="250px" width="100%" />
                                <h4>{value.title}</h4>
                                <h4>${value.price}</h4>
                                <button
                                    className="btn btn-primary mx-auto d-block"
                                    onClick={() => navigate(`/products/details/${value.id}`)}
                                >
                                    Get Details
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
