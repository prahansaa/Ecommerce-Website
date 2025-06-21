import React from "react";
import { useNavigate } from "react-router-dom";

const Category = (props) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    // Navigate to category-specific product page
    navigate(`/products/${props.category}`);
  };

  return (
    <div className="col-md-6 mb-3">
      <div className="card rounded-0 shadow shadow-1">
        <div className="card-body">
          <img src={props.image} height="300px" width="100%" alt={props.title} />
          <h4 className="text-center mt-3">{props.title}</h4>
          <h5 className="text-center">{props.text}</h5>
          <button
            className="btn btn-primary mx-auto d-block"
            onClick={handleNavigate}
          >
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Category;
