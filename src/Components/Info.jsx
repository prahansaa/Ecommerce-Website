import React from 'react';
import men from '../images/men.jpg';
import women from '../images/women.jpg';
import jewellery from '../images/jewellery.jpg';
import device from '../images/device.jpg';
import Category from './Category';

const Info = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <h1 className="text-center mb-3">Category</h1>

                <Category
                    image={men}
                    title="Men's Wear"
                    text="This is Men's section"
                    category="men's clothing"
                />

                <Category
                    image={women}
                    title="Women's Wear"
                    text="This is Women's section"
                    category="women's clothing"
                />

                <Category
                    image={jewellery}
                    title="Jewellery"
                    text="This is Jewellery section"
                    category="jewelery"
                />

                <Category
                    image={device}
                    title="Devices"
                    text="This is Device section"
                    category="electronics"
                />
            </div>
        </div>
    );
};

export default Info;
